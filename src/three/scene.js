import * as THREE from 'three';
import { createCar } from './car.js';
import { createSpeedStreaks, createExhaustBurst } from './particles.js';
import { createShadow } from './groundShadow.js';

/**
 * Photorealistic Automotive Studio Environment
 * Long softbox light strips reflect crisp vertical highlights across the sculpted body.
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

  softbox(2.2, 16, 9.5, 0xffffff, [-7, 0, 4]); // Main key strip, left
  softbox(1.4, 16, 7.0, 0xffefe4, [7, 0, 3]); // Rim strip, right
  softbox(12, 5, 3.0, 0xffffff, [0, 10, 1]); // Overhead studio ceiling
  softbox(9, 9, 1.2, 0xff2200, [0, -1, -9]); // Warm crimson rear bounce
  softbox(14, 7, 0.8, 0xd0e8ff, [0, -2, 11]); // Cool front studio fill

  const pmrem = new THREE.PMREMGenerator(renderer);
  const tex = pmrem.fromScene(env, 0.02).texture;
  pmrem.dispose();
  return tex;
}

export function createScene(canvas, { reducedMotion = false } = {}) {
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
  const key = new THREE.DirectionalLight(0xffffff, 1.4);
  key.position.set(5, 7, 6);
  scene.add(key);

  const rim = new THREE.DirectionalLight(0xff4433, 2.5);
  rim.position.set(-7, 3, -5);
  scene.add(rim);

  scene.add(new THREE.AmbientLight(0xffffff, 0.25));

  // ── Rig Hierarchy: scrollRig → floatRig → spinRig → car
  const car = createCar();
  const scrollRig = new THREE.Group();
  const floatRig = new THREE.Group();
  const spinRig = new THREE.Group();
  spinRig.add(car.group);
  floatRig.add(spinRig);
  scrollRig.add(floatRig);
  scene.add(scrollRig);

  // Speed lines & exhaust burst
  const streaks = createSpeedStreaks(reducedMotion ? 0 : 200);
  scene.add(streaks.points);

  const burst = createExhaustBurst();
  scene.add(burst.points);

  // Ground shadow follows car position/scale
  const effectsRig = new THREE.Group();
  scene.add(effectsRig);
  const shadow = createShadow();
  effectsRig.add(shadow);

  // Values driven by GSAP
  const carState = { x: 0, y: 0, rotY: 0, rotZ: 0, scale: 1, spin: 0 };
  const intro = { y: 0, spin: 0, scale: 1, shadow: 1 };
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

  function viewSize() {
    const h = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    return { w: h * camera.aspect, h };
  }

  function baseScale() {
    const { w } = viewSize();
    return Math.min(1.2, w / 5.4);
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

    scrollRig.position.set((carState.x * w) / 2, (carState.y * h) / 2 + intro.y, 0);
    scrollRig.rotation.set(0, carState.rotY, carState.rotZ);
    scrollRig.scale.setScalar(carState.scale * intro.scale * baseScale());

    effectsRig.position.copy(scrollRig.position);
    effectsRig.scale.copy(scrollRig.scale);

    if (!reducedMotion) {
      autoSpin += dt * 0.25;
      floatRig.position.y = Math.sin(t * 1.3) * 0.08;
      floatRig.rotation.x = pointer.y * 0.2 + Math.sin(t * 0.9) * 0.03;
      floatRig.rotation.z = -pointer.x * 0.15;
    }
    spinRig.rotation.y = autoSpin + carState.spin + intro.spin + pointer.x * 0.35;

    // Shadow tightens as car dips and fades as it lifts
    const lift = floatRig.position.y + intro.y * 0.5;
    shadow.scale.set(1 - lift * 0.4, 1 - lift * 0.4, 1);
    shadow.material.opacity = THREE.MathUtils.clamp(0.85 - lift * 1.4, 0, 0.85) * intro.shadow;

    car.update(reducedMotion ? 0 : dt);
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

  // World position of exhaust pipes to aim fire burst
  function exhaustWorldPosition() {
    const v = new THREE.Vector3();
    if (car.exhaustTips.length > 0) {
      car.exhaustTips[0].getWorldPosition(v);
    }
    return v;
  }

  return {
    renderer,
    scene,
    camera,
    car,
    streaks,
    burst,
    carState,
    intro,
    start,
    exhaustWorldPosition,
  };
}
