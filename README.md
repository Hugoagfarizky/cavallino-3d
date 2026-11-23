# 🏎️ Cavallino 458 Italia — Maranello Atelier

A luxury motion-driven 3D web experience celebrating the **Ferrari 458 Italia** and its legendary naturally aspirated 4.5L V8 engine. Designed with a clean **White & Rosso Corsa** architectural gallery theme, continuous scroll-choreographed 3D keyframes, an interactive 3D mechanical V8 engine breakdown, and horizontal Atelier livery customization.

![Three.js](https://img.shields.io/badge/Three.js-r172-black?logo=three.js)
![GSAP](https://img.shields.io/badge/GSAP-3.12-green?logo=greensock)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![Draco](https://img.shields.io/badge/Draco_Compression-1.6_MB-blue)

**🔗 Live demo: [hugoagfarizky.github.io/cavallino-3d](https://hugoagfarizky.github.io/cavallino-3d/)**

---

## 🎨 Design & Visual Concept

- **White & Red Luxury Atelier Palette**: Modern Maranello gallery aesthetic alternating between crisp architectural whites (`#FFFFFF`, `#FBFBFD`) and iconic *Rosso Corsa* (`#B80006`).
- **Interactive 3D V8 Engine**: Custom procedural 3D V8 engine with dual Rosso Corsa wrinkle intake plenums, 8 chrome runners, 180° flat-plane crankshaft, and hydroformed equal-length headers.
- **Photorealistic Ferrari 458 3D Model**: High-detail mesh with Draco compression (1.6 MB), real PBR clearcoat paint, chrome forged wheels, Brembo calipers, and ambient occlusion contact shadow (`ferrari_ao.png`).
- **Pinned Horizontal Atelier Track**:
  - `01 / Rosso Corsa` (`#B80006`)
  - `02 / Bianco Avus` (`#FFFFFF`)
  - `03 / Nero Daytona` (`#111216`)
  - `04 / Giallo Modena` (`#CCA000`)
- **Launch Control Ignition**: Interactive tachometer trigger that shoots realistic exhaust flame bursts from the center triple exhaust and vibrates the chassis with 9,000 RPM acoustics.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Bundler / Runtime** | Vite 6 |
| **3D Engine** | Three.js (r172, WebGL, PBR MeshPhysicalMaterial, PMREM) |
| **3D Asset Pipeline** | GLTF Draco Loader (Wasm decoders) |
| **Animation Engine** | GSAP 3 + ScrollTrigger |
| **Typography** | Google Fonts (Anton, Inter, Playfair Display) |

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
