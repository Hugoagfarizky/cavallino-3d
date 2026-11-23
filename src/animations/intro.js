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

  // The studio is dark; the car turns slowly into place as the lights come up
  gsap.set(world.stage, { light: 0 });
  gsap.set(world.intro, { spin: -Math.PI * 0.6, scale: 0.92 });
  tl.to(world.stage, { light: 1, duration: 2.6, ease: 'power2.inOut' }, 0.2)
    .to(world.intro, { spin: 0, duration: 3.2, ease: 'power3.out' }, 0)
    .to(world.intro, { scale: 1, duration: 3.2, ease: 'power3.out' }, 0);

  tl.from(
    '.hero__line .char',
    { yPercent: 110, duration: 1.4, stagger: 0.02 },
    0.6
  );
  tl.from('.nav, .hero__meta, .hero__specs', { opacity: 0, y: 12, duration: 1.2, stagger: 0.12 }, 1.4);

  return tl;
}
