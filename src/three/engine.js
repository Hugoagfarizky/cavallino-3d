import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { bakeSurfaceCoords, withSurface } from './surface.js';

/**
 * Loads the 223-part mechanical engine model (`engine.glb`, EXT_meshopt_compression)
 * and gives every part a physically plausible material.
 */
export async function loadV8Engine(renderer) {
  // Ensure MeshoptDecoder WebAssembly module is ready before loading
  await MeshoptDecoder.ready;

  // ── Metallurgical PBR materials ──
  // engine.glb has no materials, UVs or textures, so surface character comes
  // from procedural noise in engine-model space (the block is ~0.45 units wide).
  const std = (params, surface) => withSurface(new THREE.MeshStandardMaterial(params), surface);
  const phys = (params, surface) => withSurface(new THREE.MeshPhysicalMaterial(params), surface);

  const M = {
    // Rosso Corsa wrinkle-finish cam cover and plenum
    wrinkleRed: phys(
      { color: 0x8E0008, metalness: 0.0, roughness: 0.62, clearcoat: 0.25, clearcoatRoughness: 0.45 },
      { bumpScale: 220, bump: 0.0016, roughScale: 120, roughVar: 0.22 }
    ),
    // Sand-cast aluminium: block, sump, covers
    castAlu: std(
      { color: 0x8C8E91, metalness: 1.0, roughness: 0.58 },
      { bumpScale: 320, bump: 0.0005, roughScale: 60, roughVar: 0.26 }
    ),
    // Slightly darker, aged casting for the head and housings
    castAluDark: std(
      { color: 0x7A7C7F, metalness: 1.0, roughness: 0.55 },
      { bumpScale: 320, bump: 0.00045, roughScale: 60, roughVar: 0.24 }
    ),
    // Machined aluminium: cam caps, throttle body, pulleys
    machinedAlu: std({ color: 0xD2D4D7, metalness: 1.0, roughness: 0.22 }, { roughScale: 200, roughVar: 0.08 }),
    // Ground and polished forged steel: crank, cams, pins, tappets
    polishedSteel: std({ color: 0xD8DADD, metalness: 1.0, roughness: 0.12 }, { roughScale: 150, roughVar: 0.06 }),
    // Forged titanium connecting rods
    titanium: std({ color: 0x9C9A95, metalness: 1.0, roughness: 0.3 }, { roughScale: 90, roughVar: 0.12 }),
    // Pistons: Al-Si alloy
    piston: std({ color: 0xC4C6C8, metalness: 1.0, roughness: 0.3 }, { roughScale: 120, roughVar: 0.1 }),
    // Valves
    valve: std({ color: 0xC9C5BD, metalness: 1.0, roughness: 0.18 }, { roughScale: 200, roughVar: 0.06 }),
    // Springs, rings, chain: oiled spring steel
    springSteel: std({ color: 0x6F7277, metalness: 1.0, roughness: 0.28 }),
    // Heat-tinted stainless exhaust headers (thin-film oxide colours)
    exhaust: phys(
      {
        color: 0x9A8B78,
        metalness: 1.0,
        roughness: 0.36,
        iridescence: 0.3,
        iridescenceIOR: 1.5,
        iridescenceThicknessRange: [120, 320],
      },
      { roughScale: 40, roughVar: 0.18 }
    ),
    // Brushed stainless catalytic converter
    stainless: std({ color: 0xB9BBBE, metalness: 1.0, roughness: 0.3 }, { roughScale: 400, roughVar: 0.12 }),
    // Black phosphate / e-coat steel: flywheel, starter, sprockets
    darkSteel: std({ color: 0x232427, metalness: 0.85, roughness: 0.42 }, { roughScale: 80, roughVar: 0.12 }),
    // Zinc-plated fasteners
    zincBolts: std({ color: 0xA9ADB2, metalness: 1.0, roughness: 0.32 }),
    // Black plastics: coils, injectors, seals
    blackPlastic: std({ color: 0x111113, metalness: 0.0, roughness: 0.55 }, { bumpScale: 500, bump: 0.0002 }),
    // Accessory belt
    rubber: std({ color: 0x141415, metalness: 0.0, roughness: 0.9 }, { roughScale: 200, roughVar: 0.1 }),
    // Spark plug insulators
    ceramic: phys({ color: 0xF2F0EA, metalness: 0.0, roughness: 0.2, clearcoat: 1.0, clearcoatRoughness: 0.1 }),
    // Bearing shells and sensor bodies
    copper: std({ color: 0xC27B4E, metalness: 1.0, roughness: 0.3 }),
    brass: std({ color: 0xC8A464, metalness: 1.0, roughness: 0.32 }),
    // Multi-layer steel head gasket
    gasket: std({ color: 0x3C3D40, metalness: 0.4, roughness: 0.6 }),
    // Red-anodised fuel rail
    anodizedRed: std({ color: 0x8A0A10, metalness: 0.9, roughness: 0.3 }),
    // Painted oil filter canister
    paintedYellow: phys({ color: 0xE0B000, metalness: 0.0, roughness: 0.35, clearcoat: 0.8, clearcoatRoughness: 0.1 }),
  };

  // Ordered rules: first match wins. Names come from engine.glb nodes.
  const RULES = [
    [/bolt|drain_plug/, M.zincBolts],
    [/gasket/, M.gasket],
    [/brg/, M.copper],
    [/^valve_cover|^oil_cap|^intake_manifold/, M.wrinkleRed],
    [/^fuel_rail/, M.anodizedRed],
    [/^injector/, M.blackPlastic],
    [/^valve_/, M.valve],
    [/^spring_|^chain$|^chain_guide|^tensioner/, M.springSteel],
    [/^retainer_|^tappet_/, M.polishedSteel],
    [/^cam_cap/, M.machinedAlu],
    [/^cam_sprocket|^crank_sprocket/, M.darkSteel],
    [/^cam_(in|ex)$|^crank$|^pin_/, M.polishedSteel],
    [/^rod_cap|^rod_\d/, M.titanium],
    [/ring/, M.springSteel],
    [/^piston/, M.piston],
    [/^plug_\d_c/, M.ceramic],
    [/^plug_\d_m/, M.zincBolts],
    [/^coil/, M.blackPlastic],
    [/^exhaust_manifold/, M.exhaust],
    [/^cat$/, M.stainless],
    [/sensor|^o2_|^oil_switch|^thermostat$/, M.brass],
    [/^oil_filter$/, M.paintedYellow],
    [/^belt$/, M.rubber],
    [/^flywheel|^starter|^alt_back|^alt_stator|^ac_clutch/, M.darkSteel],
    [/pulley|^throttle|^idler|^belt_tensioner/, M.machinedAlu],
    [/^head$|^thermostat_housing|^timing_cover|^oil_pump/, M.castAluDark],
    [/^dipstick_handle|^front_seal/, M.blackPlastic],
  ];
  const materialFor = (name) => {
    for (const [re, mat] of RULES) if (re.test(name)) return mat;
    return M.castAlu;
  };

  // The engine is lit by a neutral photo-studio environment instead of the
  // outdoor sunset HDR the car uses, so bare metal reads as machined metal.
  if (renderer) {
    const pmrem = new THREE.PMREMGenerator(renderer);
    const studioEnv = pmrem.fromScene(new RoomEnvironment(), 0.03).texture;
    pmrem.dispose();
    for (const mat of Object.values(M)) {
      mat.envMap = studioEnv;
      mat.envMapIntensity = 0.9;
    }
  }

  return new Promise((resolve, reject) => {
    const group = new THREE.Group();

    const base = import.meta.env.BASE_URL;
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);

    // Also attach Draco decoder for safety
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(`${base}draco/gltf/`);
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      `${base}models/engine.glb`,
      (gltf) => {
        const engineModel = gltf.scene;

        engineModel.traverse((child) => {
          if (!child.isMesh) return;
          child.castShadow = true;
          child.receiveShadow = true;
          child.material = materialFor(child.name.toLowerCase());
        });

        // Procedural detail coordinates in unscaled engine space
        bakeSurfaceCoords(engineModel);

        // Scale first, then centre using the scaled bounds
        const rawBox = new THREE.Box3().setFromObject(engineModel);
        const size = new THREE.Vector3();
        rawBox.getSize(size);
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) engineModel.scale.setScalar(2.7 / maxDim);
        engineModel.updateMatrixWorld(true);
        const center = new THREE.Box3().setFromObject(engineModel).getCenter(new THREE.Vector3());
        engineModel.position.sub(center);
        engineModel.updateMatrixWorld(true);

        // Technical hotspots anchored to the real parts
        const partCenter = (name, offset = [0, 0, 0]) => {
          const obj = engineModel.getObjectByName(name);
          const v = new THREE.Vector3();
          if (obj) new THREE.Box3().setFromObject(obj).getCenter(v);
          return v.add(new THREE.Vector3(...offset));
        };
        const hotspots = [
          { title: 'Flat-Plane Crankshaft', pos: partCenter('crank_pulley') },
          { title: 'Rosso Corsa Cam Cover', pos: partCenter('valve_cover', [0, 0.1, 0]) },
          { title: 'Intake Plenum', pos: partCenter('intake_manifold', [0, 0, 0.15]) },
          { title: 'Exhaust Headers', pos: partCenter('exhaust_manifold', [0, 0, -0.15]) },
        ];

        const markerGroup = new THREE.Group();
        hotspots.forEach((hs) => {
          const dot = new THREE.Mesh(
            new THREE.SphereGeometry(0.045, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0xD40006 })
          );
          dot.position.copy(hs.pos);

          const ring = new THREE.Mesh(
            new THREE.RingGeometry(0.07, 0.09, 32),
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
