import gsap from 'gsap';
import { createScene } from './three/scene.js';
import { playIntro } from './animations/intro.js';
import { initScroll } from './animations/scroll.js';
import { createV8Sound, V8_TIMING } from './audio/v8.js';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

async function waitForFonts() {
  if (!document.fonts) return;
  const load = Promise.all([
    document.fonts.load('500 56px Cormorant'),
    document.fonts.load('400 16px Montserrat'),
  ]);
  await Promise.race([load, new Promise((r) => setTimeout(r, 2000))]);
}

function initIgniteButton(world) {
  const btn = document.getElementById('popBtn');
  if (!btn) return;
  const label = btn.querySelector('span');
  const v8 = createV8Sound();
  const { catch: catchAt, pull, peak, end } = V8_TIMING;
  let running = false;

  btn.addEventListener('click', () => {
    if (running) return;
    running = true;
    btn.setAttribute('aria-busy', 'true');
    label.textContent = 'Cranking…';

    // Sound: starter → catch → rev to the limiter → overrun pops → idle
    v8.play();

    const fire = () => world.burst.fire(world.exhaustWorldPosition());
    const tl = gsap.timeline({
      onComplete: () => {
        running = false;
        btn.removeAttribute('aria-busy');
        label.textContent = 'Start again';
      },
    });

    // Starter motor: a small shudder
    tl.to(world.intro, { y: 0.04, duration: 0.05, repeat: 7, yoyo: true, ease: 'none' }, 0.02);

    // Engine catches: label, flame and a kick
    tl.call(() => (label.textContent = 'V8 awake'), null, catchAt)
      .call(fire, null, catchAt + 0.05)
      .to(world.intro, { y: 0.22, duration: 0.12, ease: 'power2.out' }, catchAt)
      .to(world.intro, { y: 0, duration: 0.7, ease: 'bounce.out' }, catchAt + 0.12);

    // Full throttle: the car squats and the streaks race up to speed
    tl.to(world.intro, { y: -0.08, duration: peak - pull, ease: 'power1.in' }, pull)
      .fromTo(world.streaks.state, { speed: 1 }, { speed: 9, duration: peak - pull, ease: 'power2.in' }, pull);

    // Lift off at the limiter: flames with the overrun pops, then settle
    tl.call(fire, null, peak + 0.1)
      .call(fire, null, peak + 0.55)
      .to(world.intro, { y: 0, duration: 1, ease: 'elastic.out(1, 0.5)' }, peak)
      .to(world.streaks.state, { speed: 1, duration: 2, ease: 'power2.out' }, peak)
      .to({}, { duration: end - peak - 2 }, peak + 2);
  });
}

// Pool of studio light on the back wall that drifts toward the pointer
function initSpotlight() {
  const spot = document.querySelector('.spotlight');
  if (!spot || reducedMotion) return;
  const pos = { x: 50, y: 52 };
  const setX = gsap.quickTo(pos, 'x', { duration: 1.2, ease: 'power3.out' });
  const setY = gsap.quickTo(pos, 'y', { duration: 1.2, ease: 'power3.out' });
  window.addEventListener('pointermove', (e) => {
    setX(35 + (e.clientX / window.innerWidth) * 30);
    setY(40 + (e.clientY / window.innerHeight) * 24);
  });
  gsap.ticker.add(() => {
    spot.style.setProperty('--spot-x', `${pos.x}%`);
    spot.style.setProperty('--spot-y', `${pos.y}%`);
  });
}

// Build version in the footer (commit hash + build date), to tell which
// deployment the browser is showing
function showVersion() {
  const el = document.getElementById('appVersion');
  if (el) el.textContent = `v ${__APP_VERSION__} · ${__BUILD_DATE__}`;
}

async function init() {
  showVersion();
  document.body.classList.add('is-loading');
  await waitForFonts();

  try {
    const world = await createScene(document.getElementById('webgl'), { reducedMotion });
    world.start();

    initScroll(world, { reducedMotion });
    initIgniteButton(world);
    initSpotlight();

    document.querySelector('.loader').classList.add('is-done');
    document.body.classList.remove('is-loading');

    playIntro(world, { reducedMotion });
  } catch (err) {
    console.error('Initialization failed:', err);
    document.querySelector('.loader').classList.add('is-done');
    document.body.classList.remove('is-loading');
  }
}

init();
