import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { bakeSurfaceCoords, withSurface } from './surface.js';

/**
 * Photorealistic Automotive PBR Formulations
 * Matches the natural outdoor daylight reflection of real Ferrari paint.
 */
export const LIVERIES = {
  // Solid (non-metallic) base coat under a glossy clearcoat, as on real Ferrari paint.
  rosso: {
    color: '#C80006', // Rosso Corsa
    metalness: 0.0,
    roughness: 0.38,
    clearcoat: 1.0,
    clearcoatRoughness: 0.035,
    envMapIntensity: 1.5,
    flake: 0.0,
  },
  bianco: {
    color: '#ECEDEF', // Bianco Avus
    metalness: 0.0,
    roughness: 0.42,
    clearcoat: 1.0,
    clearcoatRoughness: 0.035,
    envMapIntensity: 1.3,
    flake: 0.0,
  },
  nero: {
    color: '#0B0C0F', // Nero Daytona (metallic)
    metalness: 0.55,
    roughness: 0.42,
    clearcoat: 1.0,
    clearcoatRoughness: 0.03,
    envMapIntensity: 1.6,
    flake: 0.06,
  },
  giallo: {
    color: '#E8A800', // Giallo Modena
    metalness: 0.0,
    roughness: 0.38,
    clearcoat: 1.0,
    clearcoatRoughness: 0.035,
    envMapIntensity: 1.4,
    flake: 0.0,
  },
};

/**
 * Loads and configures the production-grade photorealistic Ferrari 458 Italia 3D model.
 * Assigns bespoke realistic PBR materials to EVERY individual component.
 */
export function loadCar() {
  return new Promise((resolve, reject) => {
    const group = new THREE.Group();

    // ── Photorealistic PBR Materials ──
    // The GLB ships without textures, so each material gets procedural
    // micro-detail (see surface.js). Scales are in car-model units (≈ metres).

    // 1. Body paint: solid base coat + clearcoat with subtle orange peel
    const bodyMaterial = withSurface(
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(LIVERIES.rosso.color),
        metalness: LIVERIES.rosso.metalness,
        roughness: LIVERIES.rosso.roughness,
        clearcoat: LIVERIES.rosso.clearcoat,
        clearcoatRoughness: LIVERIES.rosso.clearcoatRoughness,
        ior: 1.5,
        envMapIntensity: LIVERIES.rosso.envMapIntensity,
      }),
      { peelScale: 28, peel: 0.0012, roughScale: 3, roughVar: 0.04, flakeScale: 260, flake: LIVERIES.rosso.flake }
    );

    // 2. Forged alloy wheels: satin machined silver
    const rimMaterial = withSurface(
      new THREE.MeshPhysicalMaterial({
        color: 0xC9CCD1,
        metalness: 1.0,
        roughness: 0.24,
        clearcoat: 0.6,
        clearcoatRoughness: 0.08,
        envMapIntensity: 1.6,
      }),
      { roughScale: 14, roughVar: 0.1 }
    );

    // 3. Tyre rubber: dark, very rough, faintly worn
    const tireMaterial = withSurface(
      new THREE.MeshStandardMaterial({
        color: 0x141416,
        metalness: 0.0,
        roughness: 0.86,
        envMapIntensity: 0.7,
      }),
      { roughScale: 18, roughVar: 0.16, bumpScale: 260, bump: 0.0004 }
    );

    // 4. Brembo calipers: gloss painted
    const caliperMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xB00008,
      metalness: 0.0,
      roughness: 0.35,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      envMapIntensity: 1.3,
    });

    // 5. Brake discs & hubs: machined cast iron
    const rotorMaterial = withSurface(
      new THREE.MeshStandardMaterial({
        color: 0x8E9196,
        metalness: 1.0,
        roughness: 0.42,
        envMapIntensity: 1.2,
      }),
      { roughScale: 30, roughVar: 0.2, bumpScale: 200, bump: 0.0003 }
    );

    // 6. Headlight lens: clear polycarbonate
    const headlightGlassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xFFFFFF,
      metalness: 0.0,
      roughness: 0.03,
      transmission: 1.0,
      thickness: 0.05,
      ior: 1.58,
      envMapIntensity: 1.6,
    });

    // 7. LED DRLs
    const ledMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      emissive: 0xF2F6FF,
      emissiveIntensity: 2.2,
      roughness: 0.2,
    });

    // 8. Taillight lens: deep ruby
    const taillightGlassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xB4000A,
      emissive: 0x3A0000,
      emissiveIntensity: 0.8,
      metalness: 0.0,
      roughness: 0.05,
      transmission: 0.6,
      thickness: 0.1,
      ior: 1.49,
      envMapIntensity: 1.5,
    });

    // 9. Tinted automotive glass
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x2A2F35,
      metalness: 0.0,
      roughness: 0.02,
      transmission: 0.75,
      thickness: 0.01,
      ior: 1.52,
      envMapIntensity: 1.6,
    });

    // 10. Scudetto yellow badges & centre caps
    const ferrariYellowMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xF2C200,
      metalness: 0.0,
      roughness: 0.35,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      envMapIntensity: 1.2,
    });

    // 11. Chrome badges, lettering & exhaust tips
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xF4F5F7,
      metalness: 1.0,
      roughness: 0.06,
      envMapIntensity: 1.8,
    });

    // 12. Carbon fibre under lacquer
    const carbonMaterial = withSurface(
      new THREE.MeshPhysicalMaterial({
        color: 0x111215,
        metalness: 0.3,
        roughness: 0.45,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        envMapIntensity: 1.2,
      }),
      { roughScale: 120, roughVar: 0.35 }
    );

    // 13. Grilles: textured black plastic
    const grillMaterial = withSurface(
      new THREE.MeshStandardMaterial({
        color: 0x0E0E10,
        metalness: 0.0,
        roughness: 0.75,
        envMapIntensity: 0.8,
      }),
      { bumpScale: 300, bump: 0.0003 }
    );

    // 14. Nappa leather (seats, wheel rim)
    const leatherMaterial = withSurface(
      new THREE.MeshPhysicalMaterial({
        color: 0x1C1A19,
        metalness: 0.0,
        roughness: 0.62,
        sheen: 0.4,
        sheenRoughness: 0.6,
        sheenColor: new THREE.Color(0x3A3634),
        envMapIntensity: 0.9,
      }),
      { roughScale: 40, roughVar: 0.18, bumpScale: 380, bump: 0.0004 }
    );

    // 15. Dark interior trim & carpet
    const interiorMaterial = withSurface(
      new THREE.MeshStandardMaterial({
        color: 0x121315,
        metalness: 0.0,
        roughness: 0.88,
        envMapIntensity: 0.6,
      }),
      { bumpScale: 400, bump: 0.0003 }
    );

    // 16. Satin black exterior trim & wipers
    const trimMaterial = new THREE.MeshStandardMaterial({
      color: 0x151618,
      metalness: 0.0,
      roughness: 0.55,
      envMapIntensity: 1.0,
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
        const carModel = gltf.scene;

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
          else if (n.startsWith('rim_') || n === 'wheel') {
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

        // Object-space coordinates for the procedural surface detail
        bakeSurfaceCoords(carModel);

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
          bodyMaterial.userData.surface.uFlake.value = config.flake;
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
