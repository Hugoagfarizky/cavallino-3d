import * as THREE from 'three';

/**
 * Procedural 3D Ferrari 4.5L V8 Engine Object
 * Features:
 * - 90° V8 engine block in cast aluminum
 * - Dual iconic Rosso Corsa wrinkle-finish intake plenums with chrome runners
 * - Equal-length tubular exhaust headers
 * - Front serpentine belt pulleys
 * - Carbon fiber air filter housing
 * - Floating technical inspection hotspots
 */
export function createV8Engine() {
  const group = new THREE.Group();

  // ── Materials ──
  const redWrinkleMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#C40000'),
    metalness: 0.3,
    roughness: 0.7,
    clearcoat: 0.3,
    clearcoatRoughness: 0.5,
  });

  const aluminumMaterial = new THREE.MeshStandardMaterial({
    color: '#D8D8DC',
    metalness: 0.85,
    roughness: 0.25,
  });

  const darkMetalMaterial = new THREE.MeshStandardMaterial({
    color: '#28282E',
    metalness: 0.8,
    roughness: 0.35,
  });

  const chromeMaterial = new THREE.MeshStandardMaterial({
    color: '#EEEEEE',
    metalness: 0.95,
    roughness: 0.08,
  });

  const carbonMaterial = new THREE.MeshStandardMaterial({
    color: '#1A1A1A',
    metalness: 0.4,
    roughness: 0.4,
  });

  const goldHeatWrapMaterial = new THREE.MeshStandardMaterial({
    color: '#C8963E',
    metalness: 0.8,
    roughness: 0.3,
  });

  // ── 1. Engine Block (90° V-Angle) ──
  const crankcaseGeo = new THREE.BoxGeometry(1.4, 0.7, 1.8);
  const crankcase = new THREE.Mesh(crankcaseGeo, aluminumMaterial);
  crankcase.position.set(0, 0, 0);
  group.add(crankcase);

  // Left & Right V Cylinder Banks (angled at 45° from vertical)
  for (const side of [1, -1]) {
    const bankGeo = new THREE.BoxGeometry(0.55, 0.6, 1.7);
    const bank = new THREE.Mesh(bankGeo, aluminumMaterial);
    bank.position.set(side * 0.42, 0.42, 0);
    bank.rotation.z = side * -0.38;
    group.add(bank);

    // Cylinder Head Cam Covers (Red Wrinkle Finish)
    const coverGeo = new THREE.BoxGeometry(0.48, 0.18, 1.68);
    const cover = new THREE.Mesh(coverGeo, redWrinkleMaterial);
    cover.position.set(side * 0.56, 0.66, 0);
    cover.rotation.z = side * -0.38;
    group.add(cover);

    // Chrome Spark Plug Rail / Coil Pack
    const railGeo = new THREE.BoxGeometry(0.12, 0.06, 1.55);
    const rail = new THREE.Mesh(railGeo, chromeMaterial);
    rail.position.set(side * 0.58, 0.76, 0);
    rail.rotation.z = side * -0.38;
    group.add(rail);
  }

  // ── 2. Twin Ferrari Intake Plenums (Red Wrinkle Boxes) ──
  for (const side of [1, -1]) {
    const plenumGeo = new THREE.BoxGeometry(0.38, 0.34, 1.5);
    const plenum = new THREE.Mesh(plenumGeo, redWrinkleMaterial);
    plenum.position.set(side * 0.22, 1.05, 0);
    group.add(plenum);

    // Chrome Intake Runners (4 per side = 8 cylinders)
    for (let i = 0; i < 4; i++) {
      const zPos = -0.54 + i * 0.36;
      const runnerGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.35, 16);
      const runner = new THREE.Mesh(runnerGeo, chromeMaterial);
      runner.position.set(side * 0.34, 0.88, zPos);
      runner.rotation.z = side * -0.35;
      group.add(runner);
    }
  }

  // ── 3. Central Carbon Airbox & Throttle Bodies ──
  const airboxGeo = new THREE.BoxGeometry(0.65, 0.28, 0.8);
  const airbox = new THREE.Mesh(airboxGeo, carbonMaterial);
  airbox.position.set(0, 1.22, -0.4);
  group.add(airbox);

  // Twin Throttle Body Inlets
  for (const side of [0.18, -0.18]) {
    const tbGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.22, 20);
    const tb = new THREE.Mesh(tbGeo, aluminumMaterial);
    tb.rotation.x = Math.PI / 2;
    tb.position.set(side, 1.22, -0.9);
    group.add(tb);
  }

  // ── 4. Equal-Length Tubular Exhaust Headers ──
  for (const side of [1, -1]) {
    for (let i = 0; i < 4; i++) {
      const zPos = -0.5 + i * 0.34;
      const pipeGeo = new THREE.CylinderGeometry(0.045, 0.05, 0.65, 12);
      const pipe = new THREE.Mesh(pipeGeo, goldHeatWrapMaterial);
      pipe.position.set(side * 0.85, 0.15, zPos);
      pipe.rotation.z = side * 0.65;
      pipe.rotation.y = (i - 1.5) * 0.12;
      group.add(pipe);
    }

    // Exhaust Collector
    const collectorGeo = new THREE.CylinderGeometry(0.11, 0.13, 0.6, 16);
    const collector = new THREE.Mesh(collectorGeo, darkMetalMaterial);
    collector.position.set(side * 1.05, -0.18, 0.2);
    collector.rotation.x = 0.3;
    group.add(collector);
  }

  // ── 5. Front Pulley System & Accessory Belt ──
  const pulleyGroup = new THREE.Group();
  pulleyGroup.position.set(0, 0, 0.95);

  const pulleyPositions = [
    [0, 0, 0.2], // Crank pulley (large)
    [0.35, 0.38, 0.14], // Alternator
    [-0.35, 0.38, 0.14], // Water pump
    [0, 0.55, 0.12], // Idler
  ];

  pulleyPositions.forEach(([x, y, r]) => {
    const pGeo = new THREE.CylinderGeometry(r, r, 0.06, 24);
    const p = new THREE.Mesh(pGeo, darkMetalMaterial);
    p.rotation.x = Math.PI / 2;
    p.position.set(x, y, 0);
    pulleyGroup.add(p);
  });

  group.add(pulleyGroup);

  // ── 6. Interactive Hotspots (3D Anchor Points) ──
  const hotspots = [
    {
      id: 'crankshaft',
      title: 'Flat-Plane Crankshaft',
      desc: '180° firing order delivers instant throttle response and the legendary 9,000 RPM acoustics.',
      position: new THREE.Vector3(0, -0.1, 0),
    },
    {
      id: 'plenum',
      title: 'Resonance Intake Plenums',
      desc: 'Dual variable-geometry intake plenums maximize airflow velocity across the rev range.',
      position: new THREE.Vector3(0.3, 1.15, 0.1),
    },
    {
      id: 'exhaust',
      title: 'Hydroformed Exhaust Headers',
      desc: 'Equal-length 4-into-1 manifolds designed for optimal pulse scavenge and scavenge efficiency.',
      position: new THREE.Vector3(-0.95, 0.1, 0.1),
    },
    {
      id: 'injection',
      title: 'Direct Fuel Injection (200 bar)',
      desc: 'Precision micro-spray fuel injection optimizes combustion chamber cooling and compression ratio.',
      position: new THREE.Vector3(0, 0.85, 0.4),
    },
  ];

  // Hotspot pulsing glow markers
  const markerGroup = new THREE.Group();
  hotspots.forEach((hs) => {
    const markerGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const markerMat = new THREE.MeshBasicMaterial({
      color: 0xCC0000,
      transparent: true,
      opacity: 0.9,
    });
    const marker = new THREE.Mesh(markerGeo, markerMat);
    marker.position.copy(hs.position);

    // Outer pulsating halo ring
    const ringGeo = new THREE.RingGeometry(0.08, 0.11, 24);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xCC0000,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.copy(hs.position);
    markerGroup.add(marker);
    markerGroup.add(ring);
  });
  group.add(markerGroup);

  // Scale and center the engine assembly
  group.scale.setScalar(1.4);
  group.position.set(0, -0.1, 0);

  return {
    group,
    hotspots,
    update(dt, time) {
      // Gentle floating animation
      group.position.y = -0.1 + Math.sin(time * 1.5) * 0.03;
      // Pulse marker rings
      markerGroup.children.forEach((child, i) => {
        if (child.geometry.type === 'RingGeometry') {
          const s = 1 + Math.sin(time * 3 + i) * 0.25;
          child.scale.set(s, s, s);
        }
      });
    },
  };
}
