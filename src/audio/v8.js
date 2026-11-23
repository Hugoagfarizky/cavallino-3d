/**
 * Synthesised flat-plane V8 start-up, built with the Web Audio API.
 * No audio files: every sound is generated, so nothing extra is downloaded.
 *
 * Sequence: starter motor → the engine catches with a flare → brief idle →
 * full-throttle rev to the 9,000 rpm limiter → lift off with overrun pops →
 * settle to idle and fade out.
 */

// Key moments (seconds from the click), used to sync the visuals.
export const V8_TIMING = {
  catch: 0.45, // engine fires
  pull: 1.35, // throttle floored
  peak: 2.55, // limiter, throttle released
  end: 5.2, // sound fully faded
};

const SAMPLE_RATE = 200; // automation points per second

// Engine speed over time, in rpm
function rpmAt(t) {
  const { catch: c, pull, peak } = V8_TIMING;
  if (t < c) return 0;
  if (t < c + 0.25) return 400 + (2400 - 400) * easeOut((t - c) / 0.25); // catch flare
  if (t < pull) return 1100 + 1300 * Math.exp(-(t - c - 0.25) * 7); // settle to idle
  if (t < peak - 0.15) {
    const x = (t - pull) / (peak - 0.15 - pull);
    return 1100 + (8950 - 1100) * (1 - Math.pow(1 - x, 1.6)); // pull to redline
  }
  if (t < peak) return 8850 + 150 * Math.sin((t - peak) * 2 * Math.PI * 22); // limiter bounce
  return 1050 + (9000 - 1050) * Math.exp(-(t - peak) * 2.6); // overrun back to idle
}

// Throttle (0..1) over time; drives loudness and brightness
function throttleAt(t) {
  const { catch: c, pull, peak } = V8_TIMING;
  if (t < c) return 0;
  if (t < c + 0.25) return 1;
  if (t < pull) return 0.22;
  if (t < peak) return 1;
  if (t < peak + 1.4) return 0.04;
  return 0.22;
}

function easeOut(x) {
  return 1 - (1 - x) * (1 - x);
}

function curve(duration, fn) {
  const n = Math.max(2, Math.ceil(duration * SAMPLE_RATE));
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) out[i] = fn((i / (n - 1)) * duration);
  return out;
}

// One-pole smoothing so throttle changes don't click
function smooth(arr, amount) {
  let v = arr[0];
  for (let i = 0; i < arr.length; i++) {
    v += (arr[i] - v) * amount;
    arr[i] = v;
  }
  return arr;
}

function noiseBuffer(ctx, seconds) {
  const buf = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * seconds), ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return buf;
}

function driveCurve(amount) {
  const n = 1024;
  const c = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const x = (i / (n - 1)) * 2 - 1;
    c[i] = Math.tanh(x * amount) / Math.tanh(amount);
  }
  return c;
}

export function createV8Sound() {
  let ctx = null;
  let noise = null;

  function context() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      noise = noiseBuffer(ctx, 2);
    }
    if (ctx.state === 'suspended' && ctx.resume) ctx.resume().catch(() => {});
    return ctx;
  }

  function play() {
    const ac = context();
    if (!ac) return false;

    const t0 = ac.currentTime + 0.03;
    const dur = V8_TIMING.end;

    // ── Output: compressor keeps peaks civil, master fades at the end ──
    const comp = ac.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.ratio.value = 4;
    const master = ac.createGain();
    master.gain.setValueAtTime(0.0001, t0);
    master.gain.exponentialRampToValueAtTime(0.55, t0 + 0.05);
    master.gain.setValueAtTime(0.55, t0 + dur - 0.7);
    master.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    comp.connect(master).connect(ac.destination);

    // ── Automation curves ──
    const throttle = smooth(curve(dur, throttleAt), 0.12);
    const firing = curve(dur, (t) => Math.max(20, (rpmAt(t) / 60) * 4)); // 4 firings per rev
    const half = firing.map((f) => f / 2);
    const double = firing.map((f) => f * 2);
    const cutoff = curve(dur, (t) => 300 + rpmAt(t) * 0.75).map((v, i) => v * (0.55 + 0.45 * throttle[i]));
    const bodyGain = throttle.map((th, i) => (firing[i] > 21 ? 0.18 + 0.62 * th : 0));
    const intakeFreq = curve(dur, (t) => 700 + rpmAt(t) * 0.32);
    const intakeGain = throttle.map((th, i) => (firing[i] > 21 ? 0.02 + 0.16 * th * th : 0));

    // ── Engine body: firing order + half order (burble) + double (scream) ──
    const shaper = ac.createWaveShaper();
    shaper.curve = driveCurve(2.6);
    shaper.oversample = '2x';
    const lowpass = ac.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.Q.value = 1.4;
    const body = ac.createGain();
    body.gain.value = 0;
    shaper.connect(lowpass).connect(body).connect(comp);

    const voices = [
      ['sawtooth', firing, 0.5],
      ['square', half, 0.22],
      ['sawtooth', double, 0.16],
    ];
    const oscs = voices.map(([type, freq, level]) => {
      const o = ac.createOscillator();
      o.type = type;
      o.frequency.setValueCurveAtTime(freq, t0, dur);
      const g = ac.createGain();
      g.gain.value = level;
      o.connect(g).connect(shaper);
      o.start(t0);
      o.stop(t0 + dur + 0.05);
      return o;
    });
    // Slight detune between voices makes the note rough, like real combustion
    oscs[1].detune.value = -7;
    oscs[2].detune.value = 5;

    lowpass.frequency.setValueCurveAtTime(cutoff, t0, dur);
    body.gain.setValueCurveAtTime(bodyGain, t0, dur);

    // ── Intake and exhaust rush: band-passed noise following rpm ──
    const rush = ac.createBufferSource();
    rush.buffer = noise;
    rush.loop = true;
    const band = ac.createBiquadFilter();
    band.type = 'bandpass';
    band.Q.value = 0.9;
    band.frequency.setValueCurveAtTime(intakeFreq, t0, dur);
    const rushGain = ac.createGain();
    rushGain.gain.value = 0;
    rushGain.gain.setValueCurveAtTime(intakeGain, t0, dur);
    rush.connect(band).connect(rushGain).connect(comp);
    rush.start(t0);
    rush.stop(t0 + dur + 0.05);

    // ── Starter motor whirr before the engine catches ──
    const starter = ac.createOscillator();
    starter.type = 'sawtooth';
    starter.frequency.setValueAtTime(70, t0);
    starter.frequency.linearRampToValueAtTime(130, t0 + V8_TIMING.catch);
    const starterTone = ac.createBiquadFilter();
    starterTone.type = 'lowpass';
    starterTone.frequency.value = 900;
    const starterGain = ac.createGain();
    starterGain.gain.setValueAtTime(0.0001, t0);
    starterGain.gain.exponentialRampToValueAtTime(0.22, t0 + 0.06);
    starterGain.gain.setValueAtTime(0.22, t0 + V8_TIMING.catch - 0.05);
    starterGain.gain.exponentialRampToValueAtTime(0.0001, t0 + V8_TIMING.catch + 0.08);
    const chug = ac.createOscillator(); // compression strokes pulsing the starter
    chug.frequency.value = 9;
    const chugDepth = ac.createGain();
    chugDepth.gain.value = 0.12;
    chug.connect(chugDepth).connect(starterGain.gain);
    starter.connect(starterTone).connect(starterGain).connect(comp);
    starter.start(t0);
    chug.start(t0);
    starter.stop(t0 + V8_TIMING.catch + 0.1);
    chug.stop(t0 + V8_TIMING.catch + 0.1);

    // ── Overrun pops and crackles after lifting off ──
    const popAt = (time, level) => {
      const src = ac.createBufferSource();
      src.buffer = noise;
      const hp = ac.createBiquadFilter();
      hp.type = 'bandpass';
      hp.frequency.value = 500 + Math.random() * 900;
      hp.Q.value = 0.7;
      const g = ac.createGain();
      g.gain.setValueAtTime(0.0001, time);
      g.gain.exponentialRampToValueAtTime(level, time + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, time + 0.05 + Math.random() * 0.05);
      src.connect(hp).connect(g).connect(comp);
      src.start(time, Math.random() * 1.5, 0.12);
    };
    const popStart = t0 + V8_TIMING.peak + 0.12;
    for (let i = 0; i < 9; i++) {
      popAt(popStart + Math.random() * 1.1, 0.35 + Math.random() * 0.45);
    }

    return true;
  }

  return { play };
}
