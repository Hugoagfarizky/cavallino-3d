import * as THREE from 'three';

/**
 * Procedural surface micro-detail and wetness for untextured models.
 *
 * Neither GLB ships with textures, so every material would otherwise read as
 * flat CAD plastic. These helpers add object-space noise (stable while the model
 * rotates) to roughness, normals and the clearcoat normal — casting grain,
 * wrinkle paint, clearcoat orange peel, rubber texture, paint flakes — plus a
 * wet layer: beaded droplets that stretch into runs on vertical faces, a water
 * film that darkens porous surfaces and makes them glossy.
 */

/** Global wetness (0 = dry, 1 = soaked). Shared by every material. */
export const WETNESS = { value: 0 };

/**
 * Bakes `aSurfPos` / `aSurfNrm` (position and normal in `root`'s local space)
 * into every mesh, so noise has one consistent scale and gravity direction
 * across all parts — regardless of per-node transforms or mesh quantization.
 */
export function bakeSurfaceCoords(root) {
  root.updateMatrixWorld(true);
  const rootInv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const rel = new THREE.Matrix4();
  const nrm = new THREE.Matrix3();
  const v = new THREE.Vector3();
  const seen = new Set();

  root.traverse((child) => {
    if (!child.isMesh) return;
    if (seen.has(child.geometry)) child.geometry = child.geometry.clone();
    seen.add(child.geometry);

    const g = child.geometry;
    if (!g.attributes.normal) g.computeVertexNormals();
    const pos = g.attributes.position;
    const nor = g.attributes.normal;
    const outP = new Float32Array(pos.count * 3);
    const outN = new Float32Array(pos.count * 3);
    rel.multiplyMatrices(rootInv, child.matrixWorld);
    nrm.getNormalMatrix(rel);
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(rel);
      outP[i * 3] = v.x;
      outP[i * 3 + 1] = v.y;
      outP[i * 3 + 2] = v.z;
      v.fromBufferAttribute(nor, i).applyMatrix3(nrm).normalize();
      outN[i * 3] = v.x;
      outN[i * 3 + 1] = v.y;
      outN[i * 3 + 2] = v.z;
    }
    g.setAttribute('aSurfPos', new THREE.BufferAttribute(outP, 3));
    g.setAttribute('aSurfNrm', new THREE.BufferAttribute(outN, 3));
  });
}

const NOISE_GLSL = /* glsl */ `
varying vec3 vSurfPos;
varying vec3 vSurfNrm;
uniform float uRoughScale;
uniform float uRoughVar;
uniform float uBumpScale;
uniform float uBump;
uniform float uPeelScale;
uniform float uPeel;
uniform float uFlakeScale;
uniform float uFlake;
uniform float uWet;
uniform float uDropScale;
uniform float uDrops;
uniform float uFilm;
uniform float uDarken;
uniform mat4 uRootMatrix;

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

// One layer of water beads. Cells are squashed along gravity on vertical faces
// so drops become runs. Returns xyz = tangential slope (root space), w = coverage.
vec4 sDropLayer(vec3 p, vec3 n, float density) {
  float vertical = 1.0 - abs(n.y);
  vec3 stretch = vec3(1.0, mix(1.0, 0.3, vertical), 1.0);
  vec3 q = p * stretch;
  vec3 ip = floor(q);
  vec3 fp = fract(q);
  vec4 best = vec4(0.0);
  float bestH = 0.0;
  for (int z = -1; z <= 1; z++)
  for (int y = -1; y <= 1; y++)
  for (int x = -1; x <= 1; x++) {
    vec3 g = vec3(float(x), float(y), float(z));
    vec3 cell = ip + g;
    if (sHash(cell + 31.7) > density) continue;
    vec3 o = vec3(sHash(cell + 1.7), sHash(cell + 9.2), sHash(cell + 4.4));
    float r = mix(0.16, 0.42, sHash(cell + 13.1));
    vec3 d = (g + o - fp) / r;
    d -= n * dot(d, n);              // distance across the surface only
    float dist2 = dot(d, d);
    if (dist2 < 1.0) {
      float h = sqrt(1.0 - dist2);
      if (h > bestH) {
        bestH = h;
        // slope of a spherical cap points away from the drop centre
        best = vec4(-d / max(h, 0.18), 1.0);
      }
    }
  }
  return best;
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
  // wetness
  dropScale: 40, // drop cells per root unit
  drops: 0, // drop density 0..1
  film: 0, // water film strength 0..1
  darken: 1, // albedo multiplier when soaked (porous surfaces < 1)
};

/**
 * Adds procedural micro-detail (and optionally wetness) to a
 * MeshStandard/PhysicalMaterial. Scales are in the baked root space.
 * Pass `root` (the object bakeSurfaceCoords ran on) when using drops.
 */
export function withSurface(material, opts = {}, root = null) {
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
    uWet: WETNESS,
    uDropScale: { value: o.dropScale },
    uDrops: { value: o.drops },
    uFilm: { value: o.film },
    uDarken: { value: o.darken },
    uRootMatrix: { value: root ? root.matrixWorld : new THREE.Matrix4() },
  };
  material.userData.surface = uniforms;

  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        '#include <common>\nattribute vec3 aSurfPos;\nattribute vec3 aSurfNrm;\nvarying vec3 vSurfPos;\nvarying vec3 vSurfNrm;'
      )
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvSurfPos = aSurfPos;\nvSurfNrm = aSurfNrm;');

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${NOISE_GLSL}`)
      // Wetness state, computed once per fragment
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        vec3 wN = normalize(vSurfNrm);
        float wFilm = 0.0;
        vec4 wDrop = vec4(0.0);
        if (uWet > 0.0) {
          float facingUp = smoothstep(-0.3, 0.7, wN.y);
          float patches = smoothstep(0.32, 0.62, sFbm(vSurfPos * 3.0));
          wFilm = uFilm * uWet * mix(0.55, 1.0, facingUp) * mix(0.6, 1.0, patches);
          if (uDrops > 0.0) {
            float dens = uDrops * uWet * mix(0.3, 1.0, facingUp);
            wDrop = sDropLayer(vSurfPos * uDropScale, wN, dens);
            if (wDrop.w < 0.5) wDrop = sDropLayer(vSurfPos * uDropScale * 2.2 + 5.3, wN, dens * 0.45);
          }
          // Soaked porous surfaces get darker (light is trapped in the water layer)
          diffuseColor.rgb *= mix(1.0, uDarken, max(wFilm, wDrop.w * 0.6));
        }`
      )
      .replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>
        if (uRoughVar > 0.0) {
          roughnessFactor = clamp(roughnessFactor + (sFbm(vSurfPos * uRoughScale) - 0.5) * uRoughVar, 0.03, 1.0);
        }
        roughnessFactor = mix(roughnessFactor, 0.12, wFilm * 0.85);
        roughnessFactor = mix(roughnessFactor, 0.03, wDrop.w);`
      )
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>
        if (uBump > 0.0) {
          // water fills the micro-texture, so it flattens as the surface gets wet
          normal = sBump(normal, sFbm(vSurfPos * uBumpScale), uBump * (1.0 - 0.7 * wFilm));
        }
        if (uFlake > 0.0) {
          vec3 fc = floor(vSurfPos * uFlakeScale);
          vec3 fr = vec3(sHash(fc), sHash(fc + 7.13), sHash(fc + 3.71)) * 2.0 - 1.0;
          normal = normalize(normal + fr * uFlake);
        }
        vec3 wDropView = vec3(0.0);
        if (wDrop.w > 0.5) {
          // root matrix may carry scale (scroll rigs), so keep only its rotation
          vec3 dv = (viewMatrix * uRootMatrix * vec4(wDrop.xyz, 0.0)).xyz;
          wDropView = length(dv) > 1e-5 ? normalize(dv) * length(wDrop.xyz) : vec3(0.0);
          normal = normalize(normal + wDropView * 0.7);
        }`
      );

    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <clearcoat_normal_fragment_maps>',
      `#include <clearcoat_normal_fragment_maps>
      #ifdef USE_CLEARCOAT
        if (uPeel > 0.0) {
          clearcoatNormal = sBump(clearcoatNormal, sNoise(vSurfPos * uPeelScale), uPeel);
        }
        if (wDrop.w > 0.5) {
          clearcoatNormal = normalize(clearcoatNormal + wDropView * 0.7);
        }
      #endif`
    );
  };
  material.customProgramCacheKey = () => 'surface-v2';
  return material;
}
