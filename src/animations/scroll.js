import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Poses per section: x / y are fractions of half the viewport (-1 … 1).
const POSES = {
  desktop: {
    hero: { x: 0, y: -0.2, rotY: Math.PI * 0.78, rotZ: 0.02, scale: 1.05 },
    aero: { x: -0.42, y: -0.04, rotY: Math.PI * 0.38, rotZ: -0.12, scale: 1.05 },
    engine: { x: -1.8, y: -0.2, rotY: Math.PI * 0.2, rotZ: 0, scale: 0 },
    atelier: { x: 0.44, y: 0, rotY: Math.PI * 1.8, rotZ: 0.08, scale: 1.1 },
    heritage: { x: 0.58, y: -0.04, rotY: Math.PI * 2.78, rotZ: 0.16, scale: 0.88 },
    launch: { x: 0.42, y: -0.02, rotY: Math.PI * 3.15, rotZ: -0.06, scale: 1.25 },
  },
  mobile: {
    hero: { x: 0, y: -0.22, rotY: Math.PI * 0.78, rotZ: 0.04, scale: 1.0 },
    aero: { x: 0, y: 0.4, rotY: Math.PI * 0.38, rotZ: -0.12, scale: 0.85 },
    engine: { x: 0, y: -1.6, rotY: Math.PI * 0.2, rotZ: 0, scale: 0 },
    atelier: { x: 0, y: 0.38, rotY: Math.PI * 1.8, rotZ: 0.08, scale: 0.9 },
    heritage: { x: 0.6, y: 0.66, rotY: Math.PI * 2.78, rotZ: 0.16, scale: 0.5 },
    launch: { x: 0, y: 0.42, rotY: Math.PI * 3.15, rotZ: -0.06, scale: 0.95 },
  },
};

// 3D V8 Engine Poses
const ENGINE_POSES = {
  desktop: {
    hidden: { x: 1.6, y: 0, rotY: -0.4, scale: 0 },
    visible: { x: 0.42, y: 0.05, rotY: 0.5, scale: 1.08 },
  },
  mobile: {
    hidden: { x: 0, y: 1.6, rotY: -0.4, scale: 0 },
    visible: { x: 0, y: 0.38, rotY: 0.5, scale: 0.82 },
  },
};

const LIVERY_ORDER = ['rosso', 'bianco', 'nero', 'giallo'];

function setBg(color) {
  gsap.to(document.body, { backgroundColor: color, duration: 0.8, ease: 'power2.out', overwrite: 'auto' });
}

export function initScroll(world, { reducedMotion = false } = {}) {
  const { carState, engineState, streaks, car } = world;
  const scrub = reducedMotion ? true : 1.2;
  const isMobile = () => window.innerWidth <= 760;

  // ---------- Hero headline drifts away ----------
  gsap.to('.hero__title', {
    yPercent: -25,
    opacity: 0.15,
    ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
  });

  // ---------- Atelier: pinned horizontal scroll track ----------
  const track = document.querySelector('.flavors__track');
  const distance = () => track.scrollWidth - window.innerWidth;
  const panels = gsap.utils.toArray('.flavor');
  let activeIndex = 0;

  const applyLivery = (i) => {
    activeIndex = i;
    car.setLivery(LIVERY_ORDER[i]);
    setBg(panels[i].dataset.bg);

    const nav = document.querySelector('.nav');
    if (panels[i].dataset.livery === 'bianco') {
      nav.classList.remove('is-light');
    } else {
      nav.classList.add('is-light');
    }

    if (!reducedMotion) {
      gsap.fromTo(
        world.intro,
        { scale: 0.9 },
        { scale: 1, duration: 0.85, ease: 'elastic.out(1, 0.5)', overwrite: true }
      );
    }
  };

  // Text rises into place as each livery panel slides in. Driven by the pin's
  // own progress: separate triggers inside a pinned section resolve to the
  // wrong scroll positions. Defined before the pin is created, because the pin
  // fires onUpdate immediately when the page loads already scrolled past it.
  const panelText = panels.map((panel) => panel.querySelectorAll('.flavor__name, .lead'));
  function revealPanels(progress) {
    const pos = progress * (panels.length - 1);
    panelText.forEach((els, i) => {
      if (i === 0 || reducedMotion) return;
      const t = gsap.utils.clamp(0, 1, (pos - (i - 0.6)) / 0.5);
      gsap.to(els, { opacity: t, y: (1 - t) * 60, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
    });
  }
  revealPanels(0);

  gsap.to(track, {
    x: () => -distance(),
    ease: 'none',
    scrollTrigger: {
      trigger: '#atelier',
      start: 'top top',
      end: () => '+=' + distance(),
      pin: true,
      scrub,
      invalidateOnRefresh: true,
      onToggle: (self) => {
        if (self.isActive) applyLivery(Math.round(self.progress * (panels.length - 1)));
      },
      onUpdate: (self) => {
        const i = Math.round(self.progress * (panels.length - 1));
        if (self.isActive && i !== activeIndex) applyLivery(i);
        revealPanels(self.progress);
      },
      onLeaveBack: () => car.setLivery('rosso'),
    },
  });

  // Revert to Rosso Corsa when entering Heritage section
  ScrollTrigger.create({
    trigger: '#heritage',
    start: 'top 60%',
    end: 'bottom bottom',
    onToggle: (self) => {
      if (self.isActive) {
        car.setLivery('rosso');
        setBg(document.getElementById('heritage').dataset.bg);
        document.querySelector('.nav').classList.remove('is-light');
      }
    },
    onLeaveBack: () => car.setLivery(LIVERY_ORDER[activeIndex]),
  });

  // ---------- Background colour & Nav adaptive contrast ----------
  document.querySelectorAll('section[data-bg]').forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 55%',
      end: 'bottom 55%',
      onToggle: (self) => {
        if (self.isActive) {
          setBg(section.dataset.bg);
          const nav = document.querySelector('.nav');
          if (section.id === 'aero') {
            nav.classList.add('is-light');
          } else {
            nav.classList.remove('is-light');
          }
        }
      },
    });
  });

  // ---------- 3D Car & Engine Keyframe Transitions ----------
  const pose = (name) => (isMobile() ? POSES.mobile : POSES.desktop)[name];
  const ePose = (name) => (isMobile() ? ENGINE_POSES.mobile : ENGINE_POSES.desktop)[name];
  const base = () => ({ ...pose('hero'), spin: 0, streaks: 0.6 });

  const transitions = [
    // 1. Move to Aero pose
    { trigger: '#aero', start: 'top bottom', end: 'top 20%', to: () => pose('aero') },
    // 2. Move into Engine section: Car fades/tucks aside
    { trigger: '#engine', start: 'top bottom', end: 'top 30%', to: () => pose('engine') },
    // 3. Move into Atelier: Car reappears on right
    { trigger: '#atelier', start: 'top bottom', end: 'top top', to: () => pose('atelier') },
    // 4. Spin during horizontal scroll
    {
      trigger: '#atelier',
      start: 'top top',
      end: () => '+=' + distance(),
      linear: true,
      to: () => ({ spin: Math.PI * 2 * (panels.length - 1) }),
    },
    // 5. Move to Heritage pose
    { trigger: '#heritage', start: 'top bottom', end: 'top 25%', to: () => pose('heritage') },
    { trigger: '#heritage', start: 'top 70%', end: 'top 30%', to: () => ({ streaks: 0 }) },
    // 6. Move to Launch Control pose
    { trigger: '#launch', start: 'top bottom', end: 'top 15%', to: () => pose('launch') },
    { trigger: '#launch', start: 'top 70%', end: 'top 15%', to: () => ({ streaks: 0.85 }) },
  ];

  const triggers = transitions.map((tr) =>
    ScrollTrigger.create({ trigger: tr.trigger, start: tr.start, end: tr.end, invalidateOnRefresh: true })
  );

  // Engine visibility trigger
  const engineTriggerIn = ScrollTrigger.create({
    trigger: '#engine',
    start: 'top 80%',
    end: 'bottom 20%',
  });

  const smoothstep = (t) => t * t * (3 - 2 * t);
  const target = {};

  function computeTarget() {
    const ends = base();
    Object.assign(target, ends);
    transitions.forEach((tr, i) => {
      const to = tr.to();
      const raw = triggers[i].progress;
      const p = tr.linear ? raw : smoothstep(raw);
      for (const k in to) {
        if (raw > 0) target[k] = ends[k] + (to[k] - ends[k]) * p;
        ends[k] = to[k];
      }
    });
  }

  let first = true;
  gsap.ticker.add((time, deltaMs) => {
    computeTarget();
    const k = first || reducedMotion ? 1 : 1 - Math.pow(0.9, deltaMs / 16.67 || 1);
    first = false;

    // Smoothly interpolate Car State
    for (const key of ['x', 'y', 'rotY', 'rotZ', 'scale', 'spin']) {
      carState[key] += (target[key] - carState[key]) * k;
    }

    // Smoothly interpolate 3D Engine State
    const engineTarget = engineTriggerIn.isActive ? ePose('visible') : ePose('hidden');
    for (const key of ['x', 'y', 'rotY', 'scale']) {
      engineState[key] += (engineTarget[key] - engineState[key]) * k;
    }

    if (streaks && streaks.material) {
      streaks.material.opacity += (target.streaks - streaks.material.opacity) * k;
    }
  });

  if (reducedMotion) {
    document.querySelectorAll('[data-count]').forEach((el) => (el.textContent = el.dataset.count));
    return;
  }

  // ---------- Text batch reveals ----------
  gsap.set('.reveal', { opacity: 0, y: 50 });
  ScrollTrigger.batch('.reveal', {
    start: 'top 88%',
    once: true,
    onEnter: (els) =>
      gsap.to(els, { opacity: 1, y: 0, duration: 1.1, stagger: 0.12, ease: 'expo.out' }),
  });

  // ---------- Stat counters ----------
  document.querySelectorAll('[data-count]').forEach((el) => {
    const targetVal = Number(el.dataset.count);
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: targetVal,
          duration: 1.6,
          ease: 'power3.out',
          onUpdate: () => (el.textContent = Math.round(obj.v)),
        }),
    });
  });

  // ---------- Timeline reveals & parallax ----------
  gsap.utils.toArray('.timeline__item').forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      x: -60,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: { trigger: item, start: 'top 85%', once: true },
    });
    gsap.fromTo(
      item.querySelector('.timeline__year'),
      { yPercent: 40 },
      {
        yPercent: -40,
        ease: 'none',
        scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: true },
      }
    );
  });
}
