import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { bakeSurfaceCoords, withSurface } from './surface.js';

/**
 * Loads the V8 engine model (`v8_engine.glb`).
 *
 * Model: "V8 engine (AUDI R8)" by Dorin.Stoica, CC BY 4.0
 * https://sketchfab.com/3d-models/v8-engine-audi-r8-a65a75c5f60e46498a504e2600137ea7
 * A naturally aspirated, dry-sump mid-engine V8 — the closest free match to the
 * 458's F136. Its intake covers are repainted in Rosso Corsa wrinkle finish
 * (which also removes the manufacturer logos baked into the texture), and every
 * part gets the shared wet-surface layer.
 */

// Mesh indices (traversal order) of parts that get their own material.
// Identified by colouring each part in the browser; stable for this GLB.
const PARTS = {
  redCovers: new Set([67, 10, 11]), // intake plenum cover (carries the logo) + both cam covers
  exhaust: new Set([0, 8, 9]), // exhaust manifolds and pipes
};

export async function loadV8Engine(renderer) {
  // Neutral photo-studio lighting for bare metal (the car uses the outdoor HDR)
  let studioEnv = null;
  if (renderer) {
    const pmrem = new THREE.PMREMGenerator(renderer);
    studioEnv = pmrem.fromScene(new RoomEnvironment(), 0.03).texture;
    pmrem.dispose();
  }

  // Shared wetness: beads on top faces, runs down the sides, darker soaked castings.
  // Scale is in raw model units (the engine is ~1.7 units across).
  const WET = { dropScale: 34, drops: 0.16, film: 0.5 };

  const wrinkleRed = withSurface(
    new THREE.MeshPhysicalMaterial({
      color: 0x8E0008,
      metalness: 0.0,
      roughness: 0.6,
      clearcoat: 0.3,
      clearcoatRoughness: 0.4,
      side: THREE.DoubleSide,
    }),
    { ...WET, bumpScale: 140, bump: 0.0016, roughScale: 70, roughVar: 0.22, darken: 0.8 }
  );

  // Heat-tinted stainless headers (thin-film oxide colours)
  const exhaust = withSurface(
    new THREE.MeshPhysicalMaterial({
      color: 0x9A8B78,
      metalness: 1.0,
      roughness: 0.34,
      iridescence: 0.35,
      iridescenceIOR: 1.5,
      iridescenceThicknessRange: [120, 320],
      side: THREE.DoubleSide,
    }),
    { ...WET, roughScale: 25, roughVar: 0.18 }
  );

  const base = import.meta.env.BASE_URL;
  const gltf = await new GLTFLoader().loadAsync(`${base}models/v8_engine.glb`);
  const engineModel = gltf.scene;

  let textured = null;
  const covers = [];
  let meshIndex = 0;

  engineModel.traverse((child) => {
    if (!child.isMesh) return;
    const index = meshIndex++;
    child.castShadow = true;
    child.receiveShadow = true;

    if (!textured) {
      // The model has one atlas-textured material. Rebuild it as an opaque
      // physical material so it can carry the wet layer.
      const src = child.material;
      textured = withSurface(
        new THREE.MeshPhysicalMaterial({
          map: src.map,
          // The atlas is painted near-white; tone it down to bare cast aluminium
          // so it doesn't glow against the dark stage.
          color: 0x8f9194,
          normalMap: src.normalMap,
          roughnessMap: src.roughnessMap,
          metalnessMap: src.metalnessMap,
          roughness: 1,
          metalness: 1,
          side: THREE.DoubleSide,
        }),
        { ...WET, darken: 0.75 }
      );
      src.dispose();
    }

    if (PARTS.redCovers.has(index)) {
      child.material = wrinkleRed;
      if (index === 67) covers.push(child);
    } else if (PARTS.exhaust.has(index)) {
      child.material = exhaust;
    } else {
      child.material = textured;
    }
  });

  const materials = [textured, wrinkleRed, exhaust];
  for (const mat of materials) {
    if (studioEnv) mat.envMap = studioEnv;
    mat.envMapIntensity = 0.55;
  }

  // Procedural/wet coordinates in raw model space
  bakeSurfaceCoords(engineModel);
  for (const mat of materials) mat.userData.surface.uRootMatrix.value = engineModel.matrixWorld;

  // Scale first, then centre using the scaled bounds
  const rawSize = new THREE.Box3().setFromObject(engineModel).getSize(new THREE.Vector3());
  const maxDim = Math.max(rawSize.x, rawSize.y, rawSize.z);
  if (maxDim > 0) engineModel.scale.multiplyScalar(2.7 / maxDim);
  engineModel.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(engineModel);
  const center = box.getCenter(new THREE.Vector3());
  engineModel.position.sub(center);
  engineModel.updateMatrixWorld(true);
  box.translate(center.clone().negate());

  // Technical hotspots, placed relative to the engine's bounds
  const size = box.getSize(new THREE.Vector3());
  const at = (fx, fy, fz) =>
    new THREE.Vector3(box.min.x + size.x * fx, box.min.y + size.y * fy, box.min.z + size.z * fz);
  const coverCenter = covers.length
    ? new THREE.Box3().setFromObject(covers[0]).getCenter(new THREE.Vector3()).add(new THREE.Vector3(0, 0.08, 0))
    : at(0.5, 1.0, 0.5);
  const hotspots = [coverCenter, at(0.5, 0.25, 1.02), at(1.02, 0.55, 0.5), at(-0.02, 0.55, 0.5)];

  const group = new THREE.Group();
  const markerGroup = new THREE.Group();
  hotspots.forEach((pos) => {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.045, 16, 16), new THREE.MeshBasicMaterial({ color: 0xD40006 }));
    dot.position.copy(pos);
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.07, 0.09, 32),
      new THREE.MeshBasicMaterial({ color: 0xD40006, side: THREE.DoubleSide, transparent: true, opacity: 0.75 })
    );
    ring.position.copy(pos);
    markerGroup.add(dot, ring);
  });

  group.add(engineModel);
  group.add(markerGroup);

  return {
    group,
    engineModel,
    covers,
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
  };
}
