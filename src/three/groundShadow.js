import * as THREE from 'three';

/** Soft oval contact shadow under the Ferrari */
export function createShadow() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Multi-stop radial gradient for soft falloff
  const g = ctx.createRadialGradient(256, 256, 40, 256, 256, 240);
  g.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
  g.addColorStop(0.35, 'rgba(0, 0, 0, 0.7)');
  g.addColorStop(0.7, 'rgba(0, 0, 0, 0.25)');
  g.addColorStop(1, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(256, 256, 240, 0, Math.PI * 2);
  ctx.fill();

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;

  const geo = new THREE.PlaneGeometry(5.4, 2.6);
  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(0, -0.05, 0);
  return mesh;
}
