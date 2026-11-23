import * as THREE from 'three';
import { loadCar } from './car.js';
import { loadV8Engine } from './engine.js';
import { createSpeedStreaks, createExhaustBurst } from './particles.js';

/**
 * Dark photo-studio environment ("atelier after dark").
 * A near-black room with long overhead strip softboxes and a low red bounce,
 * so the paint shows crisp, elongated highlights against black — the classic
 * night-studio car photography look.
 */
function createDarkStudioEnvironment(renderer) {
  const env = new THREE.Scene();
  env.add(
    new THREE.Mesh(
      new THREE.SphereGeometry(30, 32, 16),
      new THREE.MeshBasicMaterial({ color: 0x030304, side: THREE.BackSide })
    )
  );

  const softbox = (w, h, intensity, color, pos, lookAt = [0, 0, 0]) => {
    const m = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
    m.color.multiplyScalar(intensity);
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m);
    mesh.position.set(...pos);
    mesh.lookAt(...lookAt);
    env.add(mesh);
  };

  // Three long overhead strips: the signature lines running along the body
  softbox(18, 0.9, 9.0, 0xfff6ec, [0, 9, -2.5]);
  softbox(18, 1.2, 12.0, 0xffffff, [0, 10, 0.5]);
  softbox(18, 0.9, 9.0, 0xfff6ec, [0, 9, 3.5]);
  // Tall side strips for the flanks
  softbox(1.2, 10, 5.0, 0xffffff, [-9, 2, 2]);
  softbox(1.2, 10, 4.0, 0xffeee0, [9, 2, -2]);
  // Low oxblood bounce from the floor behind
  softbox(20, 4, 1.4, 0xd0000a, [0, -3, -10]);

  const pmrem = new THREE.PMREMGenerator(renderer);
  const tex = pmrem.fromScene(env, 0.015).texture;
  pmrem.dispose();
  return tex;
}

export async function createScene(canvas, { reducedMotion = false } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  // Neutral (Khronos PBR) tone mapping keeps Rosso Corsa saturated instead of
  // shifting it toward orange the way ACES does.
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();

  scene.environment = createDarkStudioEnvironment(renderer);
  scene.environmentIntensity = 1.0;

  const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 11);

  // ── Night-studio lighting ──
  // `stage.light` (0..1) dims every light together; the intro animates it from
  // darkness to full so the car is unveiled by the studio coming on.
  const stage = { light: 1 };

  // 1. Key: a soft spotlight from above-front, the only source of shadows
  const keyLight = new THREE.SpotLight(0xfff4ea, 260, 40, Math.PI / 6, 0.75, 1.6);
  keyLight.position.set(2.5, 11, 6);
  keyLight.target.position.set(0, 0, 0);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(2048, 2048);
  keyLight.shadow.bias = -0.0002;
  keyLight.shadow.normalBias = 0.02;
  keyLight.shadow.radius = 5;
  scene.add(keyLight, keyLight.target);

  // 2. Red rim from behind, tracing the silhouette against the black
  const rimLight = new THREE.DirectionalLight(0xff2a1f, 2.6);
  rimLight.position.set(-5, 3.5, -8);
  scene.add(rimLight);

  // 3. Cool, faint kicker from the opposite side for separation
  const kickLight = new THREE.DirectionalLight(0xc9d6ff, 0.7);
  kickLight.position.set(7, 2, -5);
  scene.add(kickLight);

  const ambient = new THREE.AmbientLight(0xffffff, 0.12);
  scene.add(ambient);

  const lights = [
    [keyLight, keyLight.intensity],
    [rimLight, rimLight.intensity],
    [kickLight, kickLight.intensity],
    [ambient, ambient.intensity],
  ];
  const baseEnvIntensity = scene.environmentIntensity;
  function applyStageLight() {
    for (const [light, base] of lights) light.intensity = base * stage.light;
    scene.environmentIntensity = baseEnvIntensity * (0.08 + 0.92 * stage.light);
  }

  // ── Car Rig Hierarchy: scrollRig → floatRig → spinRig → car
  const scrollRig = new THREE.Group();
  const floatRig = new THREE.Group();
  const spinRig = new THREE.Group();
  floatRig.add(spinRig);
  scrollRig.add(floatRig);
  scene.add(scrollRig);

  let car = null;
  try {
    car = await loadCar();
    spinRig.add(car.group);
    console.log('✓ Ferrari 458 Italia 3D model loaded successfully');
  } catch (err) {
    console.error('Failed to load Ferrari 458 model:', err);
  }

  // ── High-Precision Mechanical V8 Engine Rig ──
  const engineRig = new THREE.Group();
  engineRig.position.set(20, 0, 0); // Initially offscreen
  engineRig.scale.setScalar(0.001);
  scene.add(engineRig);

  let engine = null;
  try {
    engine = await loadV8Engine(renderer);
    engineRig.add(engine.group);
    console.log('✓ V8 Engine 3D model loaded successfully');
  } catch (err) {
    console.error('Failed to load V8 Engine model:', err);
  }

  // Aerodynamic speed lines & exhaust burst
  const streaks = createSpeedStreaks(reducedMotion ? 0 : 180);
  scene.add(streaks.points);

  const burst = createExhaustBurst();
  scene.add(burst.points);

  // Values driven by GSAP
  const carState = { x: 0, y: 0, rotY: 0, rotZ: 0, scale: 1, spin: 0 };
  const engineState = { x: 1.5, y: 0, rotY: -0.4, scale: 0, spin: 0 };
  const intro = { y: 0, spin: 0, scale: 1 };
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

  function viewSize() {
    const h = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    return { w: h * camera.aspect, h };
  }

  function baseScale() {
    const { w } = viewSize();
    return Math.min(1.2, w / 5.2);
  }

  window.addEventListener('pointermove', (e) => {
    pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
  });

  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', resize);

  const clock = new THREE.Clock();
  let autoSpin = 0;

  function tick() {
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;
    const { w, h } = viewSize();

    pointer.x += (pointer.tx - pointer.x) * 0.06;
    pointer.y += (pointer.ty - pointer.y) * 0.06;

    // ── Update Car Rig ──
    scrollRig.position.set((carState.x * w) / 2, (carState.y * h) / 2 + intro.y, 0);
    scrollRig.rotation.set(0, carState.rotY, carState.rotZ);
    scrollRig.scale.setScalar(carState.scale * intro.scale * baseScale());

    if (!reducedMotion) {
      autoSpin += dt * 0.22;
      floatRig.position.y = Math.sin(t * 1.3) * 0.05;
      floatRig.rotation.x = pointer.y * 0.16 + Math.sin(t * 0.9) * 0.02;
      floatRig.rotation.z = -pointer.x * 0.1;
    }
    spinRig.rotation.y = autoSpin + carState.spin + intro.spin + pointer.x * 0.28;

    // ── Update Engine Rig ──
    engineRig.position.set((engineState.x * w) / 2, (engineState.y * h) / 2, 0);
    engineRig.rotation.set(0.12, engineState.rotY + pointer.x * 0.4 + t * 0.15, -0.05);
    engineRig.scale.setScalar(engineState.scale * baseScale() * 1.25);

    if (car && car.update) {
      car.update(reducedMotion ? 0 : dt);
    }
    if (engine && engine.update) {
      engine.update(dt, t);
    }
    streaks.update(dt, t);
    burst.update(dt);

    applyStageLight();
    renderer.render(scene, camera);
  }

  function start() {
    clock.getDelta();
    renderer.setAnimationLoop(tick);
  }
  function stop() {
    renderer.setAnimationLoop(null);
  }
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

  function exhaustWorldPosition() {
    const v = new THREE.Vector3();
    if (car && car.exhaustAnchor) {
      car.exhaustAnchor.getWorldPosition(v);
    }
    return v;
  }

  // Ensure safe fallback interface for car if null
  const carInterface = car || {
    group: new THREE.Group(),
    setLivery: () => {},
    update: () => {},
    exhaustAnchor: null,
  };

  return {
    renderer,
    scene,
    camera,
    car: carInterface,
    engine,
    streaks,
    burst,
    carState,
    engineState,
    intro,
    stage,
    start,
    exhaustWorldPosition,
  };
}
