import * as THREE from 'three';
import { loadCar } from './car.js';
import { createV8Engine } from './engine.js';
import { createSpeedStreaks, createExhaustBurst } from './particles.js';

/**
 * Photorealistic Automotive Studio Environment
 * Softbox light strips reflect crisp vertical highlights across the sculpted body.
 */
function createStudioEnvironment(renderer) {
  const env = new THREE.Scene();
  env.add(
    new THREE.Mesh(
      new THREE.SphereGeometry(30, 32, 16),
      new THREE.MeshBasicMaterial({ color: 0x0a0a0d, side: THREE.BackSide })
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

  softbox(2.2, 16, 9.5, 0xffffff, [-7, 0, 4]); // Key light strip, left
  softbox(1.4, 16, 7.0, 0xffefe4, [7, 0, 3]); // Rim light strip, right
  softbox(12, 5, 3.2, 0xffffff, [0, 10, 1]); // Overhead ceiling
  softbox(9, 9, 1.4, 0xff2200, [0, -1, -9]); // Warm crimson rear bounce
  softbox(14, 7, 0.9, 0xd0e8ff, [0, -2, 11]); // Cool front studio fill

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
  renderer.toneMappingExposure = 1.15;

  const scene = new THREE.Scene();
  scene.environment = createStudioEnvironment(renderer);

  const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 11);

  // Directional Studio Lights
  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(5, 7, 6);
  scene.add(key);

  const rim = new THREE.DirectionalLight(0xff3322, 2.6);
  rim.position.set(-7, 3, -5);
  scene.add(rim);

  scene.add(new THREE.AmbientLight(0xffffff, 0.35));

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
  const carState = { x: 0, y: 0, rotY: 0, rotZ: 0, scale: 1, spin: 0, opacity: 1 };
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
      floatRig.position.y = Math.sin(t * 1.3) * 0.06;
      floatRig.rotation.x = pointer.y * 0.18 + Math.sin(t * 0.9) * 0.025;
      floatRig.rotation.z = -pointer.x * 0.12;
    }
    spinRig.rotation.y = autoSpin + carState.spin + intro.spin + pointer.x * 0.3;

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
