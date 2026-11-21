import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { loadCar } from './car.js';
import { createV8Engine } from './engine.js';
import { createSpeedStreaks, createExhaustBurst } from './particles.js';

/**
 * Photorealistic Studio & Natural Lighting Environment
 * Combines an HDR environment map for natural sky/horizon reflections
 * with directional key and rim lighting matching real automotive photography.
 */
function createFallbackStudioEnvironment(renderer) {
  const env = new THREE.Scene();
  env.add(
    new THREE.Mesh(
      new THREE.SphereGeometry(30, 32, 16),
      new THREE.MeshBasicMaterial({ color: 0x111116, side: THREE.BackSide })
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

  softbox(3.0, 16, 8.0, 0xffffff, [-7, 4, 4]); // Main sun highlight, left
  softbox(2.0, 16, 6.0, 0xffefe4, [7, 3, 3]); // Fill highlight, right
  softbox(14, 6, 3.5, 0xffffff, [0, 10, 1]); // Sky dome
  softbox(10, 10, 1.5, 0xd40006, [0, -1, -9]); // Warm crimson rear bounce
  softbox(16, 8, 1.0, 0xd0e8ff, [0, -2, 11]); // Cool blue sky fill

  const pmrem = new THREE.PMREMGenerator(renderer);
  const tex = pmrem.fromScene(env, 0.02).texture;
  pmrem.dispose();
  return tex;
}

export async function createScene(canvas, { reducedMotion = false } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();

  // Try loading real HDR environment map for photorealism, with fallback
  try {
    const rgbeLoader = new RGBELoader();
    const envTexture = await rgbeLoader.loadAsync('/textures/venice_sunset_1k.hdr');
    envTexture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = envTexture;
  } catch (e) {
    console.warn('Falling back to procedural studio environment:', e);
    scene.environment = createFallbackStudioEnvironment(renderer);
  }

  const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 11);

  // ── Sunlight & Studio Illuminators (Natural Lighting as seen in reference) ──
  // 1. Direct Sun Key Light (creates the bright specular gleam on the front hood & roof)
  const sunLight = new THREE.DirectionalLight(0xFFF8EE, 2.0);
  sunLight.position.set(6, 8, 5);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.bias = -0.0001;
  scene.add(sunLight);

  // 2. Sky Blue Diffuse Fill Light (mimics daylight sky bounce)
  const skyFill = new THREE.DirectionalLight(0xCCE2FF, 0.9);
  skyFill.position.set(-6, 5, -4);
  scene.add(skyFill);

  // 3. Ground / Warm Asphalt Bounce
  const groundBounce = new THREE.DirectionalLight(0xFFE8D6, 0.6);
  groundBounce.position.set(0, -4, 2);
  scene.add(groundBounce);

  scene.add(new THREE.AmbientLight(0xFFFFFF, 0.4));

  // ── Car Rig Hierarchy: scrollRig → floatRig → spinRig → car
  const car = await loadCar();
  const scrollRig = new THREE.Group();
  const floatRig = new THREE.Group();
  const spinRig = new THREE.Group();
  spinRig.add(car.group);
  floatRig.add(spinRig);
  scrollRig.add(floatRig);
  scene.add(scrollRig);

  // ── V8 Engine Rig (Dedicated Showcase) ──
  const engine = createV8Engine();
  const engineRig = new THREE.Group();
  engineRig.add(engine.group);
  engineRig.position.set(20, 0, 0); // Initially offscreen
  engineRig.scale.setScalar(0.001);
  scene.add(engineRig);

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
    engineRig.scale.setScalar(engineState.scale * baseScale() * 1.35);

    car.update(reducedMotion ? 0 : dt);
    engine.update(dt, t);
    streaks.update(dt, t);
    burst.update(dt);

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
    if (car.exhaustAnchor) {
      car.exhaustAnchor.getWorldPosition(v);
    }
    return v;
  }

  return {
    renderer,
    scene,
    camera,
    car,
    engine,
    streaks,
    burst,
    carState,
    engineState,
    intro,
    start,
    exhaustWorldPosition,
  };
}
