# 🏎️ Cavallino 458 Italia — Atelier Nero

A dark, cinematic 3D web experience for the **Ferrari 458 Italia** and its naturally aspirated V8. The car is presented in a private night-time studio: near-black stage, long softbox reflections across the paint, a red rim light, and scroll-choreographed chapters for aerodynamics, the V8, the livery atelier, heritage and ignition.

![Three.js](https://img.shields.io/badge/Three.js-r172-black?logo=three.js)
![GSAP](https://img.shields.io/badge/GSAP-3.12-green?logo=greensock)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![Draco](https://img.shields.io/badge/Draco_Compression-1.6_MB-blue)

**🔗 Live demo: [hugoagfarizky.github.io/cavallino-3d](https://hugoagfarizky.github.io/cavallino-3d/)**

---

## 🎨 Design & Visual Concept

- **Atelier Nero (dark-mode OLED style)**: near-black stage (`#050505`), off-white type at 7:1+ contrast, one accent (Rosso `#D0000A`) and minimal glow. Inspired by dark automotive atelier sites on Awwwards.
- **Night-studio lighting**: a procedural dark studio environment with overhead strip softboxes, a key spotlight, a red rim light behind the car, and a pointer-following pool of light on the back wall. The intro brings the studio lights up from darkness.
- **Real V8 engine**: a two-bank V8 with Rosso Corsa wrinkle-finish covers and heat-tinted exhausts (see Third-party assets).
- **Ferrari 458 model**: Draco-compressed mesh with clearcoat paint and procedural surface micro-detail (orange peel, rubber, casting grain).
- **Pinned horizontal atelier**: Rosso Corsa, Bianco Avus, Nero Daytona and Giallo Modena, each on its own tinted dark backdrop.
- **Typography**: Cormorant (display serif), Montserrat (body), JetBrains Mono (labels and specs).
- **Ignition**: a button that fires exhaust flames and shakes the chassis.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Bundler / Runtime** | Vite 6 |
| **3D Engine** | Three.js (r172, WebGL, PBR MeshPhysicalMaterial, PMREM) |
| **3D Asset Pipeline** | GLTF Draco Loader (Wasm decoders) |
| **Animation Engine** | GSAP 3 + ScrollTrigger |
| **Typography** | Google Fonts (Cormorant, Montserrat, JetBrains Mono) |

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

## 📄 License

MIT License © 2024 Hugoagfarizky. A bespoke motion design concept celebrating Ferrari engineering.

### Third-party assets

- **V8 engine model** (`public/models/v8_engine.glb`): ["V8 engine (AUDI R8)"](https://sketchfab.com/3d-models/v8-engine-audi-r8-a65a75c5f60e46498a504e2600137ea7) by [Dorin.Stoica](https://sketchfab.com/Dorin.Stoica), licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/). Covers recoloured in the site's materials; manufacturer logos are not shown.
