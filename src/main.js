import gsap from 'gsap';
import { createScene } from './three/scene.js';
import { playIntro } from './animations/intro.js';
import { initScroll } from './animations/scroll.js';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

async function waitForFonts() {
  if (!document.fonts) return;
  const load = Promise.all([
    document.fonts.load('56px Anton'),
    document.fonts.load('600 30px Inter'),
  ]);
  await Promise.race([load, new Promise((r) => setTimeout(r, 2000))]);
}

function initIgniteButton(world) {
  const btn = document.getElementById('popBtn');
  if (!btn) return;
  const label = btn.querySelector('span');
  let ignited = false;

  btn.addEventListener('click', () => {
    const tl = gsap.timeline();
    if (!ignited) {
      ignited = true;
      label.textContent = '1,000 CV Unleashed!';
    }

    // Shoot dual exhaust flame burst from actual Ferrari exhaust
    tl.call(() => world.burst.fire(world.exhaustWorldPosition()), null, 0.12);

    // Car recoil and vibration
    tl.to(world.intro, { y: 0.35, duration: 0.18, ease: 'power2.out' }, 0.08)
      .to(world.intro, { y: 0, duration: 0.9, ease: 'bounce.out' });

    // Speed particles flare up to warp speed
    gsap.fromTo(world.streaks.state, { speed: 8 }, { speed: 1, duration: 2.5, ease: 'power2.out' });
  });
}

async function init() {
  document.body.classList.add('is-loading');
  await waitForFonts();

  try {
    const world = await createScene(document.getElementById('webgl'), { reducedMotion });
    world.start();

    initScroll(world, { reducedMotion });
    initIgniteButton(world);

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
