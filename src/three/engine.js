import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Loads the 223-part high-precision mechanical 3D engine model (`engine.glb`)
 * and assigns authentic PBR metallurgy and Ferrari Rosso Corsa finish.
 */
export function loadV8Engine() {
  return new Promise((resolve, reject) => {
    const group = new THREE.Group();

    // ── High-End Metallurgical PBR Materials ──
    const headRedMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#C40000'), // Ferrari Rosso Corsa wrinkle finish
      metalness: 0.35,
      roughness: 0.45,
      clearcoat: 0.7,
      clearcoatRoughness: 0.15,
      envMapIntensity: 2.0,
    });

    const blockAluminumMaterial = new THREE.MeshStandardMaterial({
      color: 0xD0D2D6, // Cast aluminum alloy block
      metalness: 0.88,
      roughness: 0.28,
      envMapIntensity: 2.2,
    });

    const polishedSteelMaterial = new THREE.MeshStandardMaterial({
      color: 0xEEEEF0, // Forged polished crankshaft & journals
      metalness: 0.98,
      roughness: 0.08,
      envMapIntensity: 2.8,
    });

    const titaniumRodMaterial = new THREE.MeshStandardMaterial({
      color: 0xCCCCCC, // Connecting rods
      metalness: 0.92,
      roughness: 0.2,
      envMapIntensity: 2.0,
    });

    const pistonAlloyMaterial = new THREE.MeshStandardMaterial({
      color: 0xDCE0E4, // Pistons & rings
      metalness: 0.9,
      roughness: 0.22,
      envMapIntensity: 2.0,
    });

    const valveChromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF, // Chrome intake/exhaust valves
      metalness: 1.0,
      roughness: 0.04,
      envMapIntensity: 3.0,
    });

    const darkSteelMaterial = new THREE.MeshStandardMaterial({
      color: 0x222328, // Pulleys, flywheel & bolts
      metalness: 0.85,
      roughness: 0.3,
      envMapIntensity: 1.8,
    });

    const copperGasketMaterial = new THREE.MeshStandardMaterial({
      color: 0xB87333, // Copper head gasket rings
      metalness: 0.8,
      roughness: 0.35,
    });

    const base = import.meta.env.BASE_URL;
    const loader = new GLTFLoader();
    loader.load(
      `${base}models/engine.glb`,
      (gltf) => {
        const engineModel = gltf.scene;

        // Traverse all 223 real mechanical parts and assign materials based on part name
        engineModel.traverse((child) => {
          if (!child.isMesh) return;

          child.castShadow = true;
          child.receiveShadow = true;

          const n = child.name.toLowerCase();

          if (n.includes('head') && !n.includes('gasket') && !n.includes('bolt')) {
            child.material = headRedMaterial;
          } else if (n.includes('crank') && !n.includes('pulley')) {
            child.material = polishedSteelMaterial;
          } else if (n.includes('rod')) {
            child.material = titaniumRodMaterial;
          } else if (n.includes('piston') || n.includes('pin') || n.includes('ring')) {
            child.material = pistonAlloyMaterial;
          } else if (n.includes('valve')) {
            child.material = valveChromeMaterial;
          } else if (n.includes('flywheel') || n.includes('pulley') || n.includes('bolt') || n.includes('cap')) {
            child.material = darkSteelMaterial;
          } else if (n.includes('gasket')) {
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

        // Add 3D technical hotspots
        const markerGroup = new THREE.Group();
        const hotspots = [
          { title: '180° Flat-Plane Crankshaft', pos: new THREE.Vector3(0, -0.6, 0.2) },
          { title: 'Rosso Corsa Cylinder Head', pos: new THREE.Vector3(0.5, 0.8, -0.1) },
          { title: 'Forged Pistons & Slipper Skirts', pos: new THREE.Vector3(-0.4, 0.2, 0.3) },
          { title: 'High-Flow Titanium Valves', pos: new THREE.Vector3(0, 0.5, -0.5) },
        ];

        hotspots.forEach((hs, i) => {
          const dot = new THREE.Mesh(
            new THREE.SphereGeometry(0.06, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0xC40000 })
          );
          dot.position.copy(hs.pos);

          const ring = new THREE.Mesh(
            new THREE.RingGeometry(0.08, 0.11, 24),
            new THREE.MeshBasicMaterial({ color: 0xC40000, side: THREE.DoubleSide, transparent: true, opacity: 0.6 })
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
              if (child.geometry.type === 'RingGeometry') {
                const s = 1 + Math.sin(time * 3 + i) * 0.25;
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
