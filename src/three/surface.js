import * as THREE from 'three';

/**
 * Procedural surface micro-detail for untextured models.
 *
 * Neither GLB ships with textures, so every material would otherwise read as
 * flat CAD plastic. These helpers add object-space noise (stable while the model
 * rotates) to roughness, normals and the clearcoat normal: casting grain,
 * wrinkle paint, clearcoat orange peel, rubber texture and paint flakes.
 */

/**
 * Bakes a position attribute (`aSurfPos`) expressed in `root`'s local space into
 * every mesh, so noise has one consistent scale across all parts — regardless of
 * per-node scale or KHR_mesh_quantization.
 */
export function bakeSurfaceCoords(root) {
  root.updateMatrixWorld(true);
  const rootInv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const rel = new THREE.Matrix4();
  const v = new THREE.Vector3();
  const seen = new Set();

  root.traverse((child) => {
    if (!child.isMesh) return;
    if (seen.has(child.geometry)) child.geometry = child.geometry.clone();
    seen.add(child.geometry);

    const pos = child.geometry.attributes.position;
    const out = new Float32Array(pos.count * 3);
    rel.multiplyMatrices(rootInv, child.matrixWorld);
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(rel);
      out[i * 3] = v.x;
      out[i * 3 + 1] = v.y;
      out[i * 3 + 2] = v.z;
    }
    child.geometry.setAttribute('aSurfPos', new THREE.BufferAttribute(out, 3));
  });
}

const NOISE_GLSL = /* glsl */ `
varying vec3 vSurfPos;
uniform float uRoughScale;
uniform float uRoughVar;
uniform float uBumpScale;
uniform float uBump;
uniform float uPeelScale;
uniform float uPeel;
uniform float uFlakeScale;
uniform float uFlake;

float sHash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float sNoise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(sHash(i), sHash(i + vec3(1, 0, 0)), f.x),
        mix(sHash(i + vec3(0, 1, 0)), sHash(i + vec3(1, 1, 0)), f.x), f.y),
    mix(mix(sHash(i + vec3(0, 0, 1)), sHash(i + vec3(1, 0, 1)), f.x),
        mix(sHash(i + vec3(0, 1, 1)), sHash(i + vec3(1, 1, 1)), f.x), f.y),
    f.z);
}
float sFbm(vec3 p) {
  float a = 0.5;
  float s = 0.0;
  for (int i = 0; i < 4; i++) {
    s += a * sNoise(p);
    p = p * 2.03 + 17.1;
    a *= 0.5;
  }
  return s;
}
// Screen-space derivative bump (same maths as three's perturbNormalArb).
vec3 sBump(vec3 n, float h, float amp) {
  vec3 dpx = dFdx(-vViewPosition);
  vec3 dpy = dFdy(-vViewPosition);
  float dhx = dFdx(h) * amp;
  float dhy = dFdy(h) * amp;
  vec3 r1 = cross(dpy, n);
  vec3 r2 = cross(n, dpx);
  float det = dot(dpx, r1);
  vec3 grad = sign(det) * (dhx * r1 + dhy * r2);
  return normalize(abs(det) * n - grad);
}
`;

const DEFAULTS = {
  roughScale: 4,
  roughVar: 0,
  bumpScale: 40,
  bump: 0,
  peelScale: 60,
  peel: 0,
  flakeScale: 900,
  flake: 0,
};

/**
 * Adds procedural micro-detail to a MeshStandard/PhysicalMaterial.
 * Scales are in the baked root space (see bakeSurfaceCoords).
 * Returns the material; its live uniforms are on `material.userData.surface`.
 */
export function withSurface(material, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const uniforms = {
    uRoughScale: { value: o.roughScale },
    uRoughVar: { value: o.roughVar },
    uBumpScale: { value: o.bumpScale },
    uBump: { value: o.bump },
    uPeelScale: { value: o.peelScale },
    uPeel: { value: o.peel },
    uFlakeScale: { value: o.flakeScale },
    uFlake: { value: o.flake },
  };
  material.userData.surface = uniforms;

  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);

    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec3 aSurfPos;\nvarying vec3 vSurfPos;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvSurfPos = aSurfPos;');

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${NOISE_GLSL}`)
      .replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>
        if (uRoughVar > 0.0) {
          roughnessFactor = clamp(roughnessFactor + (sFbm(vSurfPos * uRoughScale) - 0.5) * uRoughVar, 0.03, 1.0);
        }`
      )
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>
        if (uBump > 0.0) {
          normal = sBump(normal, sFbm(vSurfPos * uBumpScale), uBump);
        }
        if (uFlake > 0.0) {
          vec3 fc = floor(vSurfPos * uFlakeScale);
          vec3 fr = vec3(sHash(fc), sHash(fc + 7.13), sHash(fc + 3.71)) * 2.0 - 1.0;
          normal = normalize(normal + fr * uFlake);
        }`
      );

    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <clearcoat_normal_fragment_maps>',
      `#include <clearcoat_normal_fragment_maps>
      #ifdef USE_CLEARCOAT
        if (uPeel > 0.0) {
          clearcoatNormal = sBump(clearcoatNormal, sNoise(vSurfPos * uPeelScale), uPeel);
        }
      #endif`
    );
  };
  material.customProgramCacheKey = () => 'surface-v1';
  return material;
}
