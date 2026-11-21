import * as THREE from 'three';

/** Circular glowing spark texture */
function sparkSprite() {
  const size = 64;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255, 255, 255, 1)');
  g.addColorStop(0.2, 'rgba(255, 180, 80, 0.9)');
  g.addColorStop(0.6, 'rgba(255, 60, 20, 0.4)');
  g.addColorStop(1, 'rgba(255, 0, 0, 0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Ambient speed sparks / aerodynamic air streaks */
export function createSpeedStreaks(count = 200) {
  const positions = new Float32Array(count * 3);
  const speeds = new Float32Array(count);
  const bounds = { x: 12, y: 7, zMin: -7, zMax: 4 };

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() * 2 - 1) * bounds.x;
    positions[i * 3 + 1] = (Math.random() * 2 - 1) * bounds.y;
    positions[i * 3 + 2] = bounds.zMin + Math.random() * (bounds.zMax - bounds.zMin);
    speeds[i] = 1.2 + Math.random() * 3.5;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.16,
    map: sparkSprite(),
    transparent: true,
    depthWrite: false,
    opacity: 0.65,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(geo, mat);
  const state = { speed: 1 };

  function update(dt, time) {
    const pos = geo.attributes.position.array;
    for (let i = 0; i < count; i++) {
      // Speed streaks travel horizontally from front to back
      pos[i * 3] += speeds[i] * dt * state.speed * 2.5;
      pos[i * 3 + 1] += Math.sin(time * 2 + i) * dt * 0.1;
      if (pos[i * 3] > bounds.x) {
        pos[i * 3] = -bounds.x;
        pos[i * 3 + 1] = (Math.random() * 2 - 1) * bounds.y;
      }
    }
    geo.attributes.position.needsUpdate = true;
  }

  return { points, material: mat, state, update };
}

/** One-shot flame burst from Ferrari twin exhaust pipes on engine rev */
export function createExhaustBurst(count = 140) {
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);
  const life = new Float32Array(count).fill(-1);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.22,
    map: sparkSprite(),
    transparent: true,
    depthWrite: false,
    opacity: 0,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(geo, mat);

  function fire(origin) {
    mat.opacity = 1;
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      // Emit from exhaust origin
      positions[idx] = origin.x + (Math.random() - 0.5) * 0.1;
      positions[idx + 1] = origin.y + (Math.random() - 0.5) * 0.1;
      positions[idx + 2] = origin.z + (Math.random() - 0.5) * 0.6;

      // Cone shooting backward (+X direction)
      const angle = (Math.random() - 0.5) * 0.8;
      const speed = 4 + Math.random() * 7;
      velocities[idx] = Math.cos(angle) * speed;
      velocities[idx + 1] = Math.sin(angle) * 1.5 + (Math.random() - 0.5) * 1.5;
      velocities[idx + 2] = (Math.random() - 0.5) * 2;
      life[i] = 1;
    }
    geo.attributes.position.needsUpdate = true;
  }

  function update(dt) {
    let alive = 0;
    const pos = geo.attributes.position.array;
    for (let i = 0; i < count; i++) {
      if (life[i] <= 0) continue;
      alive++;
      life[i] -= dt * 2.8;
      const idx = i * 3;
      pos[idx] += velocities[idx] * dt;
      pos[idx + 1] += velocities[idx + 1] * dt;
      pos[idx + 2] += velocities[idx + 2] * dt;
    }
    if (alive > 0) {
      geo.attributes.position.needsUpdate = true;
    } else {
      mat.opacity = 0;
    }
  }

  return { points, material: mat, fire, update };
}
