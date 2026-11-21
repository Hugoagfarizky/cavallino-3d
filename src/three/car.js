import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

/**
 * Authentic Ferrari Atelier Liveries (PBR Formulations)
 */
export const LIVERIES = {
  rosso: {
    color: '#D40000',
    metalness: 0.9,
    roughness: 0.32,
    clearcoat: 1.0,
    clearcoatRoughness: 0.03,
  },
  bianco: {
    color: '#F4F5F8',
    metalness: 0.85,
    roughness: 0.28,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
  },
  nero: {
    color: '#121316',
    metalness: 0.95,
    roughness: 0.22,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
  },
  giallo: {
    color: '#F0B000',
    metalness: 0.85,
    roughness: 0.35,
    clearcoat: 1.0,
    clearcoatRoughness: 0.03,
  },
};

/**
 * Loads and configures the production-grade photorealistic Ferrari 458 Italia 3D model.
 */
export function loadCar() {
  return new Promise((resolve, reject) => {
    const group = new THREE.Group();

    // ── PBR Automotive Materials ──
    const bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(LIVERIES.rosso.color),
      metalness: LIVERIES.rosso.metalness,
      roughness: LIVERIES.rosso.roughness,
      clearcoat: LIVERIES.rosso.clearcoat,
      clearcoatRoughness: LIVERIES.rosso.clearcoatRoughness,
      envMapIntensity: 2.2,
    });

    const detailsMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.92,
      roughness: 0.28,
      envMapIntensity: 2.0,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.2,
      roughness: 0.02,
      transmission: 0.96,
      thickness: 0.5,
      ior: 1.52,
      transparent: true,
      opacity: 0.85,
    });

    // Setup Draco Loader
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/gltf/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      '/models/ferrari.glb',
      (gltf) => {
        const carModel = gltf.scene.children[0];

        // Apply specialized PBR materials to mesh parts
        const bodyMesh = carModel.getObjectByName('body');
        if (bodyMesh) bodyMesh.material = bodyMaterial;

        const rimFL = carModel.getObjectByName('rim_fl');
        const rimFR = carModel.getObjectByName('rim_fr');
        const rimRR = carModel.getObjectByName('rim_rr');
        const rimRL = carModel.getObjectByName('rim_rl');
        const trimMesh = carModel.getObjectByName('trim');

        if (rimFL) rimFL.material = detailsMaterial;
        if (rimFR) rimFR.material = detailsMaterial;
        if (rimRR) rimRR.material = detailsMaterial;
        if (rimRL) rimRL.material = detailsMaterial;
        if (trimMesh) trimMesh.material = detailsMaterial;

        const glassMesh = carModel.getObjectByName('glass');
        if (glassMesh) glassMesh.material = glassMaterial;

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

        // Ambient occlusion contact shadow
        const shadowTex = new THREE.TextureLoader().load('/models/ferrari_ao.png');
        shadowTex.colorSpace = THREE.SRGBColorSpace;
        const shadowMesh = new THREE.Mesh(
          new THREE.PlaneGeometry(0.655 * 4.2, 1.3 * 4.2),
          new THREE.MeshBasicMaterial({
            map: shadowTex,
            blending: THREE.MultiplyBlending,
            toneMapped: false,
            transparent: true,
            opacity: 0.85,
          })
        );
        shadowMesh.rotation.x = -Math.PI / 2;
        shadowMesh.position.y = -0.01;
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
        }

        resolve({
          group,
          carModel,
          bodyMaterial,
          detailsMaterial,
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
