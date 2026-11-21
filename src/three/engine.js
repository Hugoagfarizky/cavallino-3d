import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

/**
 * Loads the authentic 223-part high-precision mechanical 3D engine model (`engine.glb`)
 * Decodes EXT_meshopt_compression using MeshoptDecoder and applies photorealistic metallurgy.
 */
export async function loadV8Engine() {
  // Ensure MeshoptDecoder WebAssembly module is ready before loading
  await MeshoptDecoder.ready;

  return new Promise((resolve, reject) => {
    const group = new THREE.Group();

    // ── High-End Metallurgical PBR Materials ──
    // 1. Ferrari Rosso Corsa wrinkle finish for cylinder head covers & plenum
    const headRedMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#C40000'),
      metalness: 0.35,
      roughness: 0.42,
      clearcoat: 0.75,
      clearcoatRoughness: 0.12,
      envMapIntensity: 2.2,
    });

    // 2. Sand-cast aluminum alloy block & timing covers
    const blockAluminumMaterial = new THREE.MeshStandardMaterial({
      color: 0xC8CACF,
      metalness: 0.86,
      roughness: 0.32,
      envMapIntensity: 2.2,
    });

    // 3. Mirror-polished forged steel crankshaft, journals & camshaft lobes
    const polishedSteelMaterial = new THREE.MeshStandardMaterial({
      color: 0xF0F2F5,
      metalness: 0.98,
      roughness: 0.08,
      envMapIntensity: 3.0,
    });

    // 4. Forged titanium connecting rods
    const titaniumRodMaterial = new THREE.MeshStandardMaterial({
      color: 0xD0D3D8,
      metalness: 0.92,
      roughness: 0.18,
      envMapIntensity: 2.2,
    });

    // 5. Aluminum-silicon alloy pistons & rings
    const pistonAlloyMaterial = new THREE.MeshStandardMaterial({
      color: 0xDEE2E6,
      metalness: 0.9,
      roughness: 0.22,
      envMapIntensity: 2.0,
    });

    // 6. Chrome intake and sodium-filled exhaust valves
    const valveChromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      metalness: 1.0,
      roughness: 0.03,
      envMapIntensity: 3.2,
    });

    // 7. Hydroformed stainless steel / Inconel exhaust headers
    const exhaustHeadersMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4C4A8,
      metalness: 0.88,
      roughness: 0.26,
      envMapIntensity: 2.4,
    });

    // 8. High-tensile spring steel & timing chains
    const springChainMaterial = new THREE.MeshStandardMaterial({
      color: 0x90949C,
      metalness: 0.9,
      roughness: 0.2,
      envMapIntensity: 2.0,
    });

    // 9. Anodized high-pressure fuel rail & ignition coils
    const fuelAnodizedMaterial = new THREE.MeshStandardMaterial({
      color: 0xB87333,
      metalness: 0.82,
      roughness: 0.28,
      envMapIntensity: 2.0,
    });

    // 10. Dark matte forged iron flywheel, pulleys, belts & bolts
    const darkSteelMaterial = new THREE.MeshStandardMaterial({
      color: 0x202126,
      metalness: 0.85,
      roughness: 0.35,
      envMapIntensity: 1.6,
    });

    // 11. Copper composite head gaskets & crush washers
    const copperGasketMaterial = new THREE.MeshStandardMaterial({
      color: 0xB87333,
      metalness: 0.8,
      roughness: 0.35,
    });

    const base = import.meta.env.BASE_URL;
    const loader = new GLTFLoader();

    // Enable meshopt decompression
    loader.setMeshoptDecoder(MeshoptDecoder);

    // Also attach Draco decoder for safety
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(`${base}draco/gltf/`);
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      `${base}models/engine.glb`,
      (gltf) => {
        const engineModel = gltf.scene;

        // Traverse all 223 real mechanical parts and assign metallurgical materials
        engineModel.traverse((child) => {
          if (!child.isMesh) return;

          child.castShadow = true;
          child.receiveShadow = true;

          const n = child.name.toLowerCase();

          if (n.includes('head') && !n.includes('gasket') && !n.includes('bolt')) {
            child.material = headRedMaterial;
          } else if (n.includes('crank') || n.includes('cam')) {
            child.material = polishedSteelMaterial;
          } else if (n.includes('rod')) {
            child.material = titaniumRodMaterial;
          } else if (n.includes('piston') || n.includes('pin') || n.includes('ring')) {
            child.material = pistonAlloyMaterial;
          } else if (n.includes('valve')) {
            child.material = valveChromeMaterial;
          } else if (n.includes('exhaust') || n.includes('cat') || n.includes('header')) {
            child.material = exhaustHeadersMaterial;
          } else if (n.includes('spring') || n.includes('chain') || n.includes('tensioner')) {
            child.material = springChainMaterial;
          } else if (n.includes('fuel') || n.includes('injector') || n.includes('spark') || n.includes('o2')) {
            child.material = fuelAnodizedMaterial;
          } else if (n.includes('flywheel') || n.includes('pulley') || n.includes('bolt') || n.includes('cap') || n.includes('belt') || n.includes('starter') || n.includes('alt')) {
            child.material = darkSteelMaterial;
          } else if (n.includes('gasket') || n.includes('brg')) {
            child.material = copperGasketMaterial;
          } else {
            child.material = blockAluminumMaterial;
          }
        });

        // Compute exact bounding box and center the mechanical assembly
        const box = new THREE.Box3().setFromObject(engineModel);
        const center = new THREE.Vector3();
        box.getCenter(center);
        engineModel.position.sub(center);

        const size = new THREE.Vector3();
        box.getSize(size);
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
          const targetScale = 3.6 / maxDim;
          engineModel.scale.setScalar(targetScale);
        }

        // Add 3D technical hotspots positioned on engine components
        const markerGroup = new THREE.Group();
        const hotspots = [
          { title: '180° Flat-Plane Crankshaft', pos: new THREE.Vector3(0, -0.6, 0.25) },
          { title: 'Rosso Corsa Cylinder Head', pos: new THREE.Vector3(0.65, 0.75, -0.15) },
          { title: 'Forged Pistons & Slipper Skirts', pos: new THREE.Vector3(-0.5, 0.25, 0.35) },
          { title: 'High-Flow Titanium Valves', pos: new THREE.Vector3(0, 0.65, -0.6) },
        ];

        hotspots.forEach((hs, i) => {
          const dot = new THREE.Mesh(
            new THREE.SphereGeometry(0.065, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0xD40006 })
          );
          dot.position.copy(hs.pos);

          const ring = new THREE.Mesh(
            new THREE.RingGeometry(0.09, 0.12, 24),
            new THREE.MeshBasicMaterial({ color: 0xD40006, side: THREE.DoubleSide, transparent: true, opacity: 0.75 })
          );
          ring.position.copy(hs.pos);
          markerGroup.add(dot);
          markerGroup.add(ring);
        });

        group.add(engineModel);
        group.add(markerGroup);

        resolve({
          group,
          engineModel,
          update(dt, time) {
            // Gentle mechanical hover
            group.position.y = -0.05 + Math.sin(time * 1.5) * 0.025;
            // Pulsate hotspot rings
            markerGroup.children.forEach((child, i) => {
              if (child.geometry && child.geometry.type === 'RingGeometry') {
                const s = 1 + Math.sin(time * 3 + i) * 0.22;
                child.scale.set(s, s, s);
              }
            });
          },
        });
      },
      undefined,
      (err) => {
        console.error('Error loading realistic engine model:', err);
        reject(err);
      }
    );
  });
}
