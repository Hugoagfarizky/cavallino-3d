# Contributing to Cavallino

Thanks for wanting to help. Cavallino is a small, single-page 3D experience, so focused patches and
clear bug reports go a long way.

## Ways to contribute

- **Code** — improve the scroll choreography, the V8 engine model, particles or performance.
- **Bugs** — report rendering glitches with browser, GPU, OS and reproduction steps.
- **Design** — suggest palette, typography or layout refinements for the Atelier sections.
- **Docs** — fix typos, improve setup notes, or clarify the asset pipeline.
- **Assets** — propose optimised models or textures that keep the page lightweight.

If you are planning a large change, open an issue first so we can agree on the approach before you
spend time on it.

## Development setup

```bash
git clone https://github.com/Hugoagfarizky/cavallino-3d.git
cd cavallino-3d
npm install
npm run dev
```

Requirements: Node.js 22+ (24 recommended) and npm 10+.

## Before you open a pull request

Run the production build to catch import and asset-path problems:

```bash
npm run build
npm run preview
```

There is no automated test suite yet, so also check the page manually:

- the 3D model loads and the scroll keyframes play smoothly
- the V8 engine section and Atelier colour switch work
- the page has no console errors
- the layout holds at desktop and phone widths

## Project structure

- `index.html` — page markup and sections.
- `src/main.js` — entry point that wires the scene and animations.
- `src/three/` — Three.js scene, car model, V8 engine and particles.
- `src/animations/` — GSAP intro and scroll timelines.
- `src/style.css` — visual system and responsive rules.
- `public/` — static assets copied as-is: Draco decoders, GLB model, contact shadow and HDR map.

## Asset and path rules

- Reference `public/` assets through `import.meta.env.BASE_URL`, never with a hard-coded leading
  slash. The site is served from `/cavallino-3d/` on GitHub Pages.
- Keep the GLB and HDR files compressed; the current bundle is already close to a few megabytes.
- Do not commit credentials, analytics IDs or tracking scripts.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat: add giallo modena livery
fix: keep engine visible on narrow screens
docs: explain the HDR fallback
perf: reduce particle count on mobile
chore: bump three.js
```

Keep the subject in the imperative mood and under 72 characters. One logical change per commit.

## Branches

Branch from `main` and use a short descriptive name:

```text
feat/atelier-livery
fix/mobile-overflow
docs/asset-pipeline
```

## Pull requests

A good PR is small, focused and easy to review. Include:

- what changed and why
- the linked issue (`Closes #123`)
- how you tested it, including browser and GPU
- screenshots or a recording for visual changes

Draft PRs are welcome for early feedback.

## Accessibility and performance

- Respect `prefers-reduced-motion`; heavy motion must degrade gracefully.
- Keep text readable over the 3D canvas and preserve visible keyboard focus.
- Test on a mid-range device or with CPU throttling before adding more geometry or particles.

## Questions

Open a discussion or an issue with the `question` label. There is no such thing as a silly question
about the scene graph.
