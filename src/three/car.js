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
    metalness: 0.12,
    roughness: 0.16,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    envMapIntensity: 2.2,
  },
  bianco: {
    color: '#F4F5F8', // Bianco Avus
    metalness: 0.1,
    roughness: 0.2,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    envMapIntensity: 1.9,
  },
  nero: {
    color: '#111215', // Nero Daytona
    metalness: 0.22,
    roughness: 0.14,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    envMapIntensity: 2.3,
  },
  giallo: {
    color: '#F0B000', // Giallo Modena
    metalness: 0.12,
    roughness: 0.18,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    envMapIntensity: 2.1,
  },
};

/**
 * Loads and configures the production-grade photorealistic Ferrari 458 Italia 3D model.
 * Assigns bespoke realistic PBR materials to EVERY individual component.
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

    // 2. Star 5-Spoke Forged Alloy Wheels (Brushed Satin Silver as seen in reference photo)
    const rimMaterial = new THREE.MeshStandardMaterial({
      color: 0xE2E4E8,
      metalness: 0.94,
      roughness: 0.15,
      envMapIntensity: 2.5,
    });

    // 3. Vulcanized Tread Rubber Tires
    const tireMaterial = new THREE.MeshStandardMaterial({
      color: 0x18181A,
      metalness: 0.04,
      roughness: 0.92,
      envMapIntensity: 0.8,
    });

    // 4. Brembo Brake Calipers (Rosso Corsa Racing Gloss)
    const caliperMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xC40000,
      metalness: 0.65,
      roughness: 0.22,
      clearcoat: 0.9,
      clearcoatRoughness: 0.05,
      envMapIntensity: 2.0,
    });

    // 5. Cross-Drilled Ventilated Carbon-Ceramic Brake Rotors
    const rotorMaterial = new THREE.MeshStandardMaterial({
      color: 0xA8ABB0,
      metalness: 0.95,
      roughness: 0.28,
      envMapIntensity: 2.0,
    });

    // 6. Crystal Clear Headlight Projector Glass
    const headlightGlassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xFFFFFF,
      metalness: 0.1,
      roughness: 0.02,
      transmission: 0.98,
      thickness: 0.35,
      ior: 1.52,
      transparent: true,
      opacity: 0.92,
      envMapIntensity: 2.6,
    });

    // 7. LED Daytime Running Lights (DRLs)
    const ledMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      emissive: 0xFFFFFF,
      emissiveIntensity: 3.5,
      roughness: 0.1,
    });

    // 8. Ruby Red Circular Taillight Glass
    const taillightGlassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xFF0000,
      emissive: 0x660000,
      emissiveIntensity: 0.6,
      metalness: 0.2,
      roughness: 0.05,
      transmission: 0.88,
      ior: 1.5,
      transparent: true,
      opacity: 0.9,
      envMapIntensity: 2.2,
    });

    // 9. Automotive Tinted Glass with Interior Refraction
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

    // 10. Official Ferrari Scuderia Yellow Shield & Hub Caps (Cavallino)
    const ferrariYellowMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xF5C400,
      metalness: 0.15,
      roughness: 0.32,
      clearcoat: 0.7,
      clearcoatRoughness: 0.05,
      envMapIntensity: 1.8,
    });

    // 11. Mirror Chrome Badges, Lettering & Triple Exhaust Tips
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      metalness: 1.0,
      roughness: 0.02,
      envMapIntensity: 3.2,
    });

    // 12. Carbon Fiber Aerodynamic Aeroelastic Winglets & Diffuser
    const carbonMaterial = new THREE.MeshStandardMaterial({
      color: 0x16161A,
      metalness: 0.35,
      roughness: 0.42,
      envMapIntensity: 1.6,
    });

    // 13. Black Diamond Intake & Radiator Grilles
    const grillMaterial = new THREE.MeshStandardMaterial({
      color: 0x111114,
      metalness: 0.2,
      roughness: 0.9,
    });

    // 14. Italian Handcrafted Nero Leather Cockpit & Steering Wheel
    const leatherMaterial = new THREE.MeshStandardMaterial({
      color: 0x1E1C1B,
      metalness: 0.05,
      roughness: 0.75,
      envMapIntensity: 1.2,
    });

    // 15. Dark Upholstery & Charcoal Interior Trim
    const interiorMaterial = new THREE.MeshStandardMaterial({
      color: 0x141517,
      metalness: 0.1,
      roughness: 0.85,
    });

    // 16. Matte Windshield Wipers & Exterior Trim
    const trimMaterial = new THREE.MeshStandardMaterial({
      color: 0x1A1B1E,
      metalness: 0.25,
      roughness: 0.5,
      envMapIntensity: 1.5,
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

        // ── Map Materials to Mesh Nodes by Name ──
        carModel.traverse((child) => {
          if (!child.isMesh) return;

          child.castShadow = true;
          child.receiveShadow = true;

          const n = child.name.toLowerCase();

          // Body
          if (n === 'body') {
            child.material = bodyMaterial;
          }
          // Rims
          else if (n.startsWith('rim_')) {
            child.material = rimMaterial;
          }
          // Tires
          else if (n === 'tire') {
            child.material = tireMaterial;
          }
          // Brake Calipers
          else if (n === 'brakes') {
            child.material = caliperMaterial;
          }
          // Brake Discs & Metal Hubs
          else if (n === 'brake' || n === 'metal' || n === 'nuts') {
            child.material = rotorMaterial;
          }
          // Ferrari Yellow Badges & Wheel Center Caps
          else if (n === 'centre' || n === 'yellow_trim' || n === 'steering_centre') {
            child.material = ferrariYellowMaterial;
          }
          // Headlights Projector Glass
          else if (n === 'lights') {
            child.material = headlightGlassMaterial;
          }
          // LED DRLs & Steering Red Lights
          else if (n === 'leds' || n === 'steering_red_lights') {
            child.material = ledMaterial;
          }
          // Taillights
          else if (n === 'lights_red') {
            child.material = taillightGlassMaterial;
          }
          // Tinted Windows & Windshield
          else if (n === 'glass') {
            child.material = glassMaterial;
          }
          // Chrome Ferrari Cavallino & Exhaust Pipes
          else if (n === 'chrome' || n === 'steering_metal') {
            child.material = chromeMaterial;
          }
          // Carbon Fiber Parts
          else if (n.includes('carbon')) {
            child.material = carbonMaterial;
          }
          // Grilles
          else if (n === 'grills') {
            child.material = grillMaterial;
          }
          // Leather Interior
          else if (n.includes('leather')) {
            child.material = leatherMaterial;
          }
          // Interior Dark / Carpet
          else if (n.includes('interior') || n === 'carpet' || n === 'plastic_gray' || n === 'steering_column') {
            child.material = interiorMaterial;
          }
          // Trim & Wipers
          else if (n === 'trim' || n === 'wipers' || n === 'steering_trim') {
            child.material = trimMaterial;
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

        // Ambient occlusion contact shadow (crisp asphalt contact beneath wheels)
        const shadowTex = new THREE.TextureLoader().load(`${base}models/ferrari_ao.png`);
        shadowTex.colorSpace = THREE.SRGBColorSpace;
        const shadowMesh = new THREE.Mesh(
          new THREE.PlaneGeometry(0.655 * 4.3, 1.3 * 4.3),
          new THREE.MeshBasicMaterial({
            map: shadowTex,
            blending: THREE.MultiplyBlending,
            toneMapped: false,
            transparent: true,
            opacity: 0.92,
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
