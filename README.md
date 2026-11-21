# 🏎️ Cavallino — Ferrari Motion Experience

A high-performance, motion-driven 3D web experience celebrating the **Ferrari SF90 Stradale**. Engineered with **Three.js**, **GSAP ScrollTrigger**, and vanilla **Vite**, featuring continuous scroll-choreographed 3D vehicle states, real-time procedural PBR materials, pinned horizontal livery exploration, and interactive twin-turbo V8 ignition.

![Three.js](https://img.shields.io/badge/Three.js-r172-black?logo=three.js)
![GSAP](https://img.shields.io/badge/GSAP-3.12-green?logo=greensock)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-red)

---

## ✨ Features & Architecture

- **Fixed Fullscreen WebGL Canvas (`#webgl`)**: Sits above backgrounds to let the car dynamically overlap bold headlines across sections.
- **Scroll-Choreographed 3D Keyframes**: Continuous interpolations across sections (`#hero`, `#aero`, `#liveries`, `#story`, `#ignite`).
- **Studio Softbox Environment (PMREM)**: Tall HDR softbox strips that project crisp, authentic vertical automotive reflections across the clearcoat bodywork.
- **Pinned Horizontal Livery Track**:
  - `01 / Rosso Corsa` (`#b30006`)
  - `02 / Nero Daytona` (`#0f1115`)
  - `03 / Giallo Modena` (`#996e00`)
  - `04 / Blu Pozzi` (`#0b172a`)
  - Smooth 360° spin while the car's procedural PBR paint morphs in real time with background color shifts.
- **Dynamic Background Color Morphing**: Smooth background transitions between section themes using GSAP.
- **Interactive V8 Twin-Turbo Ignition**:
  - Active aerodynamic spoiler lifts with recoil.
  - Dual exhaust pipes fire real-time flame/spark particle bursts.
  - Car chassis vibrates with engine throttle revs.
  - Ambient aerodynamic speed streaks surge into warp velocity.
- **Editorial Typography & Heritage Timeline**: Bold `Anton` display type, live count-up performance telemetry, and smooth timeline reveals.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Runtime / Bundler** | Vite 6 |
| **3D Engine** | Three.js (WebGL, PBR MeshPhysicalMaterial, PMREMGenerator) |
| **Animation Engine** | GSAP 3 + ScrollTrigger |
| **Typography** | Google Fonts (Anton, Inter, Playfair Display) |
| **Styling** | Modern CSS3 (Variables, Clamp, Backdrop Filter, Easing) |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Hugoagfarizky/cavallino-3d.git
cd cavallino-3d

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```
├── index.html                   # Semantic markup, sections, data-bg
├── package.json                 # Three.js + GSAP + Vite
├── vite.config.js
└── src/
    ├── main.js                  # App bootstrap, font preloading, ignition event
    ├── style.css                # CSS custom properties, spotlight glows, typography
    ├── animations/
    │   ├── intro.js             # Drop-in animation & text split
    │   └── scroll.js            # Poses per section, pinned track, color transitions
    └── three/
        ├── scene.js             # Studio softbox environment, camera, rigs, ticker
        ├── car.js               # Procedural 3D Ferrari model & livery switcher
        ├── particles.js         # Aerodynamic speed streaks & dual exhaust flame burst
        └── groundShadow.js      # Dynamic contact shadow
```

---

## 📄 License

MIT License © 2024 Hugoagfarizky. A motion design concept inspired by Ferrari S.p.A. craftsmanship.
