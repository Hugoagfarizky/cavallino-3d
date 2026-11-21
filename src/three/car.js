import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

/**
 * Photorealistic Automotive PBR Formulations
 * Matches the natural outdoor daylight reflection of real Ferrari paint.
 */
export const LIVERIES = {
  rosso: {
    color: '#D40006', // True Rosso Corsa (Pantone 185 C)
    metalness: 0.15,
    roughness: 0.18,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    envMapIntensity: 2.0,
  },
  bianco: {
    color: '#F2F3F6', // Bianco Avus
    metalness: 0.12,
    roughness: 0.22,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    envMapIntensity: 1.8,
  },
  nero: {
    color: '#111215', // Nero Daytona
    metalness: 0.25,
    roughness: 0.14,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    envMapIntensity: 2.2,
  },
  giallo: {
    color: '#EBA800', // Giallo Modena
    metalness: 0.15,
    roughness: 0.2,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    envMapIntensity: 2.0,
  },
};

/**
 * Loads and configures the production-grade photorealistic Ferrari 458 Italia 3D model.
 */
export function loadCar() {
  return new Promise((resolve, reject) => {
    const group = new THREE.Group();

    // ── High-End Photorealistic PBR Materials ──
    // 1. Exterior Clearcoat Body Paint (Dielectric base coat with mirror-gloss lacquer)
    const bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(LIVERIES.rosso.color),
      metalness: LIVERIES.rosso.metalness,
      roughness: LIVERIES.rosso.roughness,
      clearcoat: LIVERIES.rosso.clearcoat,
      clearcoatRoughness: LIVERIES.rosso.clearcoatRoughness,
      ior: 1.52,
      reflectivity: 1.0,
      envMapIntensity: LIVERIES.rosso.envMapIntensity,
    });

    // 2. Star 5-Spoke Forged Alloy Wheels (Brushed Satin Silver as seen in reference)
    const rimMaterial = new THREE.MeshStandardMaterial({
      color: 0xE2E4E8,
      metalness: 0.92,
      roughness: 0.18,
      envMapIntensity: 2.4,
    });

    // 3. Carbon Fiber & Aerodynamic Composite Trim
    const trimMaterial = new THREE.MeshStandardMaterial({
      color: 0x1A1B1E,
      metalness: 0.35,
      roughness: 0.45,
      envMapIntensity: 1.5,
    });

    // 4. Automotive Tinted Glass with Interior Refraction
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x14161A,
      metalness: 0.1,
      roughness: 0.01,
      transmission: 0.92,
      thickness: 0.45,
      ior: 1.52,
      transparent: true,
      opacity: 0.88,
      envMapIntensity: 2.2,
    });

    // Setup Draco Loader
    const base = import.meta.env.BASE_URL;
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(`${base}draco/gltf/`);

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      `${base}models/ferrari.glb`,
      (gltf) => {
        const carModel = gltf.scene.children[0];

        // Apply specialized PBR materials to mesh parts
        const bodyMesh = carModel.getObjectByName('body');
        if (bodyMesh) {
          bodyMesh.material = bodyMaterial;
          bodyMesh.castShadow = true;
          bodyMesh.receiveShadow = true;
        }

        const rimFL = carModel.getObjectByName('rim_fl');
        const rimFR = carModel.getObjectByName('rim_fr');
        const rimRR = carModel.getObjectByName('rim_rr');
        const rimRL = carModel.getObjectByName('rim_rl');
        const trimMesh = carModel.getObjectByName('trim');

        if (rimFL) rimFL.material = rimMaterial;
        if (rimFR) rimFR.material = rimMaterial;
        if (rimRR) rimRR.material = rimMaterial;
        if (rimRL) rimRL.material = rimMaterial;
        if (trimMesh) trimMesh.material = trimMaterial;

        const glassMesh = carModel.getObjectByName('glass');
        if (glassMesh) glassMesh.material = glassMaterial;

        // Traverse all meshes to enable shadow casting
        carModel.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // Collect wheels for continuous rotation
        const wheels = [];
        const wFL = carModel.getObjectByName('wheel_fl');
        const wFR = carModel.getObjectByName('wheel_fr');
        const wRL = carModel.getObjectByName('wheel_rl');
        const wRR = carModel.getObjectByName('wheel_rr');
        if (wFL) wheels.push(wFL);
        if (wFR) wheels.push(wFR);
        if (wRL) wheels.push(wRL);
        if (wRR) wheels.push(wRR);

        // Ambient occlusion contact shadow (crisp asphalt contact)
        const shadowTex = new THREE.TextureLoader().load(`${base}models/ferrari_ao.png`);
        shadowTex.colorSpace = THREE.SRGBColorSpace;
        const shadowMesh = new THREE.Mesh(
          new THREE.PlaneGeometry(0.655 * 4.3, 1.3 * 4.3),
          new THREE.MeshBasicMaterial({
            map: shadowTex,
            blending: THREE.MultiplyBlending,
            toneMapped: false,
            transparent: true,
            opacity: 0.9,
            depthWrite: false,
          })
        );
        shadowMesh.rotation.x = -Math.PI / 2;
        shadowMesh.position.y = 0.005;
        shadowMesh.renderOrder = 2;
        carModel.add(shadowMesh);

        // Center rear triple exhaust emitter anchor
        const exhaustAnchor = new THREE.Object3D();
        exhaustAnchor.position.set(0, 0.42, 2.15);
        carModel.add(exhaustAnchor);

        group.add(carModel);

        function setLivery(name) {
          const config = LIVERIES[name] || LIVERIES.rosso;
          bodyMaterial.color.set(config.color);
          bodyMaterial.metalness = config.metalness;
          bodyMaterial.roughness = config.roughness;
          bodyMaterial.clearcoat = config.clearcoat;
          bodyMaterial.clearcoatRoughness = config.clearcoatRoughness;
          bodyMaterial.envMapIntensity = config.envMapIntensity;
        }

        resolve({
          group,
          carModel,
          bodyMaterial,
          rimMaterial,
          trimMaterial,
          glassMaterial,
          exhaustAnchor,
          wheels,
          setLivery,
          update(dt) {
            for (const wheel of wheels) {
              wheel.rotation.x += dt * 8;
            }
          },
        });
      },
      undefined,
      (err) => {
        console.error('Error loading realistic Ferrari model:', err);
        reject(err);
      }
    );
  });
}
