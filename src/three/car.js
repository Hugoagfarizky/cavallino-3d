import * as THREE from 'three';

/**
 * 4 Iconic Ferrari Liveries
 */
export const LIVERIES = {
  rosso: {
    color: '#CC0000',
    metalness: 0.65,
    roughness: 0.14,
    clearcoat: 1.0,
    clearcoatRoughness: 0.03,
  },
  nero: {
    color: '#121417',
    metalness: 0.85,
    roughness: 0.12,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
  },
  giallo: {
    color: '#E5A500',
    metalness: 0.55,
    roughness: 0.16,
    clearcoat: 1.0,
    clearcoatRoughness: 0.04,
  },
  blu: {
    color: '#152B4D',
    metalness: 0.7,
    roughness: 0.15,
    clearcoat: 1.0,
    clearcoatRoughness: 0.03,
  },
};

/**
 * Procedural 3D Ferrari SF90 Stradale Model
 * Styled with high-end PBR materials, carbon fiber accents,
 * realistic glass cockpit, detailed wheels with calipers, and active spoiler.
 */
export function createCar() {
  const group = new THREE.Group();

  // ── Materials ──
  const paintMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(LIVERIES.rosso.color),
    metalness: LIVERIES.rosso.metalness,
    roughness: LIVERIES.rosso.roughness,
    clearcoat: LIVERIES.rosso.clearcoat,
    clearcoatRoughness: LIVERIES.rosso.clearcoatRoughness,
    envMapIntensity: 2.2,
  });

  const carbonMaterial = new THREE.MeshStandardMaterial({
    color: '#151515',
    metalness: 0.35,
    roughness: 0.45,
  });

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: '#080811',
    metalness: 0.1,
    roughness: 0.0,
    transmission: 0.9,
    thickness: 0.5,
    ior: 1.5,
    transparent: true,
    opacity: 0.65,
  });

  const chromeMaterial = new THREE.MeshStandardMaterial({
    color: '#dddddd',
    metalness: 0.95,
    roughness: 0.08,
  });

  const tireMaterial = new THREE.MeshStandardMaterial({
    color: '#181818',
    roughness: 0.9,
    metalness: 0.05,
  });

  const brakeMaterial = new THREE.MeshStandardMaterial({
    color: '#cc0000',
    metalness: 0.5,
    roughness: 0.3,
  });

  const headlightMaterial = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    emissive: '#ffffff',
    emissiveIntensity: 3.5,
  });

  const taillightMaterial = new THREE.MeshStandardMaterial({
    color: '#ff0000',
    emissive: '#ff0000',
    emissiveIntensity: 3.0,
  });

  // ── 1. Main Sculpted Body ──
  // Lower aerodynamic chassis
  const chassisGeo = new THREE.BoxGeometry(4.8, 0.5, 1.9);
  chassisGeo.translate(0, 0.38, 0);
  const chassis = new THREE.Mesh(chassisGeo, paintMaterial);
  chassis.castShadow = true;
  group.add(chassis);

  // Front wedge bonnet (sloped nose)
  const bonnetGeo = new THREE.BoxGeometry(1.2, 0.28, 1.82);
  bonnetGeo.translate(-2.0, 0.3, 0);
  const bonnet = new THREE.Mesh(bonnetGeo, paintMaterial);
  bonnet.castShadow = true;
  group.add(bonnet);

  // Rear sculpted muscular deck
  const rearDeckGeo = new THREE.BoxGeometry(1.4, 0.45, 1.88);
  rearDeckGeo.translate(1.7, 0.42, 0);
  const rearDeck = new THREE.Mesh(rearDeckGeo, paintMaterial);
  rearDeck.castShadow = true;
  group.add(rearDeck);

  // ── 2. Cockpit / Greenhouse ──
  const cabinGeo = new THREE.BoxGeometry(1.7, 0.46, 1.55);
  cabinGeo.translate(0.05, 0.88, 0);
  const cabin = new THREE.Mesh(cabinGeo, paintMaterial);
  cabin.castShadow = true;
  group.add(cabin);

  // Windshield (sleek rake)
  const windshieldGeo = new THREE.BoxGeometry(0.8, 0.52, 1.5);
  const windshield = new THREE.Mesh(windshieldGeo, glassMaterial);
  windshield.position.set(-0.72, 0.82, 0);
  windshield.rotation.z = 0.38;
  group.add(windshield);

  // Rear engine glass canopy
  const rearGlassGeo = new THREE.BoxGeometry(0.65, 0.44, 1.48);
  const rearGlass = new THREE.Mesh(rearGlassGeo, glassMaterial);
  rearGlass.position.set(0.95, 0.8, 0);
  rearGlass.rotation.z = -0.38;
  group.add(rearGlass);

  // Side cabin glass
  for (const side of [1, -1]) {
    const sideGlassGeo = new THREE.BoxGeometry(1.25, 0.3, 0.05);
    const sideGlass = new THREE.Mesh(sideGlassGeo, glassMaterial);
    sideGlass.position.set(0.05, 0.88, side * 0.8);
    group.add(sideGlass);
  }

  // ── 3. Aerodynamics & Carbon Fiber Package ──
  // Front splitter with aggressive winglets
  const splitterGeo = new THREE.BoxGeometry(1.6, 0.06, 2.05);
  splitterGeo.translate(-1.75, 0.14, 0);
  const splitter = new THREE.Mesh(splitterGeo, carbonMaterial);
  group.add(splitter);

  // Side skirts
  for (const side of [1, -1]) {
    const skirtGeo = new THREE.BoxGeometry(3.9, 0.06, 0.08);
    const skirt = new THREE.Mesh(skirtGeo, carbonMaterial);
    skirt.position.set(0, 0.14, side * 0.98);
    group.add(skirt);
  }

  // Rear carbon diffuser
  const diffuserGeo = new THREE.BoxGeometry(0.7, 0.35, 1.95);
  diffuserGeo.translate(2.25, 0.22, 0);
  const diffuser = new THREE.Mesh(diffuserGeo, carbonMaterial);
  group.add(diffuser);

  // Active rear spoiler (pivots up on ignition)
  const spoilerPivot = new THREE.Group();
  spoilerPivot.position.set(2.2, 0.72, 0);

  const spoilerWingGeo = new THREE.BoxGeometry(0.12, 0.035, 1.7);
  const spoilerWing = new THREE.Mesh(spoilerWingGeo, carbonMaterial);
  spoilerPivot.add(spoilerWing);

  for (const z of [0.55, -0.55]) {
    const pillarGeo = new THREE.BoxGeometry(0.04, 0.2, 0.04);
    const pillar = new THREE.Mesh(pillarGeo, carbonMaterial);
    pillar.position.set(0, -0.08, z);
    spoilerPivot.add(pillar);
  }
  group.add(spoilerPivot);

  // ── 4. Lights ──
  // Front LED blade headlights
  for (const side of [0.58, -0.58]) {
    const hlGeo = new THREE.BoxGeometry(0.08, 0.08, 0.36);
    const hl = new THREE.Mesh(hlGeo, headlightMaterial);
    hl.position.set(-2.42, 0.38, side);
    group.add(hl);
  }

  // Rear full-width LED horizontal lightbar
  const tailbarGeo = new THREE.BoxGeometry(0.06, 0.07, 1.6);
  const tailbar = new THREE.Mesh(tailbarGeo, taillightMaterial);
  tailbar.position.set(2.43, 0.5, 0);
  group.add(tailbar);

  // ── 5. Dual Twin-Exhaust Tips ──
  const exhaustTips = [];
  for (const z of [0.32, -0.32]) {
    const pipeGeo = new THREE.CylinderGeometry(0.06, 0.07, 0.16, 16);
    const pipe = new THREE.Mesh(pipeGeo, chromeMaterial);
    pipe.rotation.z = Math.PI / 2;
    pipe.position.set(2.46, 0.26, z);
    group.add(pipe);
    exhaustTips.push(pipe);
  }

  // ── 6. 4 Forged Wheels with Disc & Brake Caliper ──
  const wheels = [];
  const wheelPositions = [
    [-1.45, 0.08, 1.02],
    [-1.45, 0.08, -1.02],
    [1.45, 0.08, 1.02],
    [1.45, 0.08, -1.02],
  ];

  for (const pos of wheelPositions) {
    const wheelGroup = new THREE.Group();
    wheelGroup.position.set(...pos);

    // Tire
    const tireGeo = new THREE.TorusGeometry(0.32, 0.12, 16, 32);
    const tire = new THREE.Mesh(tireGeo, tireMaterial);
    tire.rotation.x = Math.PI / 2;
    wheelGroup.add(tire);

    // Rim
    const rimGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.18, 24);
    const rim = new THREE.Mesh(rimGeo, chromeMaterial);
    rim.rotation.x = Math.PI / 2;
    wheelGroup.add(rim);

    // Spokes
    for (let i = 0; i < 5; i++) {
      const spokeGeo = new THREE.BoxGeometry(0.03, 0.19, 0.2);
      const spoke = new THREE.Mesh(spokeGeo, chromeMaterial);
      spoke.rotation.z = (Math.PI * 2 * i) / 5;
      wheelGroup.add(spoke);
    }

    // Brake Disc
    const discGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.03, 20);
    const disc = new THREE.Mesh(discGeo, chromeMaterial);
    disc.rotation.x = Math.PI / 2;
    wheelGroup.add(disc);

    // Brembo Caliper
    const calGeo = new THREE.BoxGeometry(0.11, 0.08, 0.05);
    const cal = new THREE.Mesh(calGeo, brakeMaterial);
    cal.position.set(0, -0.09, pos[2] > 0 ? 0.14 : -0.14);
    wheelGroup.add(cal);

    group.add(wheelGroup);
    wheels.push(wheelGroup);
  }

  // ── Livery Switcher ──
  function setLivery(name) {
    const config = LIVERIES[name] || LIVERIES.rosso;
    paintMaterial.color.set(config.color);
    paintMaterial.metalness = config.metalness;
    paintMaterial.roughness = config.roughness;
    paintMaterial.clearcoat = config.clearcoat;
    paintMaterial.clearcoatRoughness = config.clearcoatRoughness;
  }

  return {
    group,
    paintMaterial,
    spoilerPivot,
    exhaustTips,
    wheels,
    setLivery,
    update(dt) {
      // Wheel rolling animation on speed
      for (const w of wheels) {
        w.rotation.x += dt * 4;
      }
    },
  };
}
