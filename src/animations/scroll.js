import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Car poses per section: x / y are fractions of half the viewport (-1 … 1).
const POSES = {
  desktop: {
    hero: { x: 0, y: 0, rotY: 0, rotZ: 0, scale: 1 },
    cold: { x: -0.42, y: -0.02, rotY: Math.PI * 0.9, rotZ: -0.15, scale: 0.95 },
    flavors: { x: 0.44, y: 0, rotY: Math.PI * 2, rotZ: 0.1, scale: 1.05 },
    story: { x: 0.58, y: -0.04, rotY: Math.PI * 2.9, rotZ: 0.22, scale: 0.82 },
    share: { x: 0.42, y: 0, rotY: Math.PI * 3.8, rotZ: -0.08, scale: 1.15 },
  },
  mobile: {
    hero: { x: 0, y: -0.2, rotY: 0, rotZ: 0, scale: 1 },
    cold: { x: 0, y: 0.4, rotY: Math.PI * 0.9, rotZ: -0.15, scale: 0.8 },
    flavors: { x: 0, y: 0.38, rotY: Math.PI * 2, rotZ: 0.08, scale: 0.85 },
    story: { x: 0.6, y: 0.65, rotY: Math.PI * 2.9, rotZ: 0.22, scale: 0.45 },
    share: { x: 0, y: 0.42, rotY: Math.PI * 3.8, rotZ: -0.08, scale: 0.9 },
  },
};

const LIVERY_ORDER = ['rosso', 'nero', 'giallo', 'blu'];

function setBg(color) {
  gsap.to(document.body, { backgroundColor: color, duration: 0.8, ease: 'power2.out', overwrite: 'auto' });
}

export function initScroll(world, { reducedMotion = false } = {}) {
  const { carState, streaks, car } = world;
  const scrub = reducedMotion ? true : 1.2;

  // ---------- Hero headline drifts away ----------
  gsap.to('.hero__title', {
    yPercent: -25,
    opacity: 0.15,
    ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
  });

  // ---------- Liveries: pinned horizontal scroll track ----------
  const track = document.querySelector('.flavors__track');
  const distance = () => track.scrollWidth - window.innerWidth;
  const panels = gsap.utils.toArray('.flavor');
  let activeIndex = 0;

  const applyLivery = (i) => {
    activeIndex = i;
    car.setLivery(LIVERY_ORDER[i]);
    setBg(panels[i].dataset.bg);
    if (!reducedMotion) {
      gsap.fromTo(
        world.intro,
        { scale: 0.88 },
        { scale: 1, duration: 0.9, ease: 'elastic.out(1, 0.5)', overwrite: true }
      );
    }
  };

  gsap.to(track, {
    x: () => -distance(),
    ease: 'none',
    scrollTrigger: {
      trigger: '#liveries',
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
      },
      onLeaveBack: () => car.setLivery('rosso'),
    },
  });

  // Text slides in as livery panels arrive
  panels.forEach((panel, i) => {
    if (i === 0 || reducedMotion) return;
    gsap.from(panel.querySelectorAll('.eyebrow, .flavor__name, .lead'), {
      y: 80,
      opacity: 0,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#liveries',
        start: () => `top+=${distance() * ((i - 0.6) / (panels.length - 1))} top`,
        end: () => `top+=${distance() * ((i - 0.1) / (panels.length - 1))} top`,
        scrub,
        invalidateOnRefresh: true,
      },
    });
  });

  // Revert to Rosso Corsa when entering Story section
  ScrollTrigger.create({
    trigger: '#story',
    start: 'top 60%',
    end: 'bottom bottom',
    onToggle: (self) => {
      if (self.isActive) {
        car.setLivery('rosso');
        setBg(document.getElementById('story').dataset.bg);
      }
    },
    onLeaveBack: () => car.setLivery(LIVERY_ORDER[activeIndex]),
  });

  // ---------- Background colour per section ----------
  document.querySelectorAll('section[data-bg]').forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 55%',
      end: 'bottom 55%',
      onToggle: (self) => self.isActive && setBg(section.dataset.bg),
    });
  });

  // Nav switches to dark text over light Story section
  ScrollTrigger.create({
    trigger: '#story',
    start: 'top 40px',
    end: 'bottom 40px',
    toggleClass: { targets: '.nav', className: 'is-dark' },
  });

  // ---------- 3D Keyframe Transitions ----------
  const isMobile = () => window.innerWidth <= 760;
  const pose = (name) => (isMobile() ? POSES.mobile : POSES.desktop)[name];
  const base = () => ({ ...pose('hero'), spin: 0, streaks: 0.7 });

  const transitions = [
    { trigger: '#aero', start: 'top bottom', end: 'top 20%', to: () => pose('cold') },
    { trigger: '#liveries', start: 'top bottom', end: 'top top', to: () => pose('flavors') },
    {
      trigger: '#liveries',
      start: 'top top',
      end: () => '+=' + distance(),
      linear: true,
      to: () => ({ spin: Math.PI * 2 * (panels.length - 1) }),
    },
    { trigger: '#story', start: 'top bottom', end: 'top 25%', to: () => pose('story') },
    { trigger: '#story', start: 'top 70%', end: 'top 30%', to: () => ({ streaks: 0 }) },
    { trigger: '#ignite', start: 'top bottom', end: 'top 15%', to: () => pose('share') },
    { trigger: '#ignite', start: 'top 70%', end: 'top 15%', to: () => ({ streaks: 0.9 }) },
  ];

  const triggers = transitions.map((tr) =>
    ScrollTrigger.create({ trigger: tr.trigger, start: tr.start, end: tr.end, invalidateOnRefresh: true })
  );

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
    for (const key of ['x', 'y', 'rotY', 'rotZ', 'scale', 'spin']) {
      carState[key] += (target[key] - carState[key]) * k;
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
