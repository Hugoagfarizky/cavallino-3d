import gsap from 'gsap';

function splitChars(el) {
  const text = el.textContent;
  el.textContent = '';
  for (const ch of text) {
    const span = document.createElement('span');
    span.className = 'char';
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    span.setAttribute('aria-hidden', 'true');
    el.appendChild(span);
  }
}

export function playIntro(world, { reducedMotion = false } = {}) {
  document.querySelectorAll('[data-split]').forEach(splitChars);

  if (reducedMotion) return gsap.timeline();

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

  // Ferrari drops into the white atelier with elastic rebound
  gsap.set(world.intro, { y: 8, spin: -Math.PI * 2.5, scale: 0.65 });
  tl.to(world.intro, { y: 0, duration: 1.8, ease: 'elastic.out(1, 0.55)' }, 0)
    .to(world.intro, { spin: 0, duration: 2.2, ease: 'power4.out' }, 0)
    .to(world.intro, { scale: 1, duration: 1.6, ease: 'back.out(1.5)' }, 0.1);

  tl.from(
    '.hero__line .char',
    { yPercent: 110, rotate: 6, duration: 1.2, stagger: 0.035 },
    0.25
  );
  tl.from('.nav, .hero__meta, .hero__eyebrow', { opacity: 0, y: -16, duration: 1, stagger: 0.1 }, 0.85);

  return tl;
}
