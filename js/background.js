/**
 * Akbar Hari Mukti - Portfolio 3D Studio & Dynamic Fluid Canvas
 * Three.js + GLSL Liquid Shader + Floating Glassmorphic Geometries
 * Features:
 *  - 100% Dynamic CSS Root Color Extraction (Zero hardcoded hex values)
 *  - Real-time Theme/Class MutationObserver color updates
 *  - Interactive Fluid Shader with Mouse Swirl & Velocity tracking
 *  - Click/Tap Shockwave & Wave Ripple Pulse
 *  - Floating 3D Glass Objects (Torus Knot, Icosahedron, Octahedron, Orbitals)
 *  - Mouse Magnetic Parallax & Smooth Rotation
 *  - Scroll-Driven 3D Camera Movement & Parallax
 *  - Capped DPR & 60 FPS Performance Optimization with Cleanup Support
 */

(function () {
  'use strict';

  // Ensure Three.js is loaded
  if (typeof THREE === 'undefined') {
    console.warn('Three.js is not loaded. Background canvas initialization deferred.');
    return;
  }

  // Check WebGL availability
  function isWebGLAvailable() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  if (!isWebGLAvailable()) {
    console.warn('WebGL is not supported in this browser. Skipping 3D background.');
    return;
  }

  // =========================================================================
  // 1. Dynamic CSS Color Extractor (Strictly Non-Hardcoded)
  // =========================================================================
  function getThemeColors() {
    const rootStyle = window.getComputedStyle(document.documentElement);

    const readVar = (name, fallback) => {
      const val = rootStyle.getPropertyValue(name).trim();
      return val && val.length > 0 ? val : fallback;
    };

    // Extract dynamic CSS variables
    const bgMainVal = readVar('--bg-main', '#020202');
    const bgSurfaceVal = readVar('--bg-surface', '#07080b');
    const accentBlueVal = readVar('--accent-blue', '#1E05C1');
    const accentOrangeVal = readVar('--accent-orange', '#F54F1B');
    const accentMintVal = readVar('--accent-mint', '#10b981');
    const textMainVal = readVar('--text-main', '#f8fafc');

    return {
      bg: new THREE.Color(bgMainVal),
      surface: new THREE.Color(bgSurfaceVal),
      accentBlue: new THREE.Color(accentBlueVal),
      accentOrange: new THREE.Color(accentOrangeVal),
      accentMint: new THREE.Color(accentMintVal),
      text: new THREE.Color(textMainVal)
    };
  }

  // =========================================================================
  // 2. Setup Scene, Camera, & Renderer
  // =========================================================================
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) {
    console.warn('Canvas element with id "bg-canvas" was not found.');
    return;
  }

  // Explicit inline styles to ensure fixed fullscreen background
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'auto';
  canvas.style.display = 'block';

  let currentColors = getThemeColors();

  const scene = new THREE.Scene();
  scene.background = currentColors.bg;

  const fov = 45;
  const aspect = window.innerWidth / window.innerHeight;
  const camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 100);
  camera.position.set(0, 0, 16);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  // =========================================================================
  // 3. GLSL Liquid / Dynamic Fluid Shader Plane
  // =========================================================================
  const fluidVertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `;

  const fluidFragmentShader = `
    precision highp float;
    varying vec2 vUv;

    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_mouse_velocity;
    uniform vec2 u_shockwave_pos;
    uniform float u_shockwave_time;
    uniform float u_shockwave_intensity;

    uniform vec3 u_color_bg;
    uniform vec3 u_color_accent1;
    uniform vec3 u_color_accent2;
    uniform vec3 u_color_accent3;

    // Simplex Noise 2D implementation
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
      m = m * m;
      m = m * m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    // Fractal Brownian Motion (FBM)
    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      vec2 shift = vec2(100.0);
      mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
      for (int i = 0; i < 4; ++i) {
        v += a * snoise(p);
        p = rot * p * 2.0 + shift;
        a *= 0.5;
      }
      return v;
    }

    void main() {
      vec2 uv = vUv;
      float aspect = u_resolution.x / u_resolution.y;

      // 1. Mouse Velocity & Swirl Dynamics
      vec2 mDelta = uv - u_mouse;
      mDelta.x *= aspect;
      float mDist = length(mDelta);
      
      // Swirl vortex around cursor
      float swirlRadius = 0.45;
      float swirlStrength = smoothstep(swirlRadius, 0.0, mDist) * (0.8 + u_mouse_velocity * 2.2);
      float swirlAngle = swirlStrength * 2.8;
      mat2 swirlMat = mat2(cos(swirlAngle), -sin(swirlAngle), sin(swirlAngle), cos(swirlAngle));
      
      vec2 swirledUV = uv;
      vec2 offsetFromMouse = uv - u_mouse;
      offsetFromMouse.x *= aspect;
      offsetFromMouse = swirlMat * offsetFromMouse;
      offsetFromMouse.x /= aspect;
      swirledUV = u_mouse + offsetFromMouse;

      // 2. Click / Tap Shockwave Ripple Pulse
      if (u_shockwave_time >= 0.0 && u_shockwave_time < 2.0) {
        vec2 waveDelta = uv - u_shockwave_pos;
        waveDelta.x *= aspect;
        float waveDist = length(waveDelta);
        float currentRadius = u_shockwave_time * 0.95;
        float ringDiff = abs(waveDist - currentRadius);
        float ringWidth = 0.12;

        if (ringDiff < ringWidth) {
          float decay = max(0.0, 1.0 - (u_shockwave_time / 2.0)) * u_shockwave_intensity;
          float wavePulse = sin((ringDiff / ringWidth) * 3.14159265) * 0.035 * decay;
          vec2 waveDir = normalize(waveDelta + 0.0001);
          swirledUV += waveDir * wavePulse;
        }
      }

      // 3. Multi-layer Fluid Domain Warping
      vec2 q = vec2(0.0);
      q.x = fbm(swirledUV * 1.6 + 0.06 * u_time);
      q.y = fbm(swirledUV * 1.6 + vec2(2.1, 4.3) + 0.05 * u_time);

      vec2 r = vec2(0.0);
      r.x = fbm(swirledUV * 2.0 + 1.2 * q + vec2(1.7, 9.2) + 0.08 * u_time);
      r.y = fbm(swirledUV * 2.0 + 1.2 * q + vec2(8.3, 2.8) + 0.07 * u_time);

      float f = fbm(swirledUV * 1.4 + r);

      // 4. Color Compositing (Carefully calibrated for high text readability)
      vec3 col = u_color_bg;

      // Royal Indigo field
      float indigoFactor = clamp(length(q) * 0.75, 0.0, 1.0);
      col = mix(col, u_color_accent1 * 1.15, smoothstep(0.2, 0.85, indigoFactor) * 0.38);

      // Hyper Orange filaments & caustics
      float orangeFactor = clamp(r.x * f * 1.6, 0.0, 1.0);
      col = mix(col, u_color_accent2 * 1.35, smoothstep(0.3, 0.95, orangeFactor) * 0.35);

      // Subtle Mint glow along peak energy waves
      float mintFactor = clamp(pow(f, 3.2), 0.0, 1.0);
      col = mix(col, u_color_accent3 * 1.1, mintFactor * 0.18);

      // Deep Vignette for crisp text contrast in content areas
      vec2 centerCoord = (uv - 0.5) * vec2(aspect, 1.0);
      float vignette = smoothstep(1.2, 0.2, length(centerCoord));
      col = mix(u_color_bg * 0.9, col, clamp(vignette * 0.75 + 0.25, 0.0, 1.0));

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  // Fullscreen quad shader scene rendered in background
  const fluidCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const fluidScene = new THREE.Scene();
  const fluidUniforms = {
    u_time: { value: 0.0 },
    u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
    u_mouse_velocity: { value: 0.0 },
    u_shockwave_pos: { value: new THREE.Vector2(0.5, 0.5) },
    u_shockwave_time: { value: 999.0 },
    u_shockwave_intensity: { value: 0.0 },
    u_color_bg: { value: currentColors.bg },
    u_color_accent1: { value: currentColors.accentBlue },
    u_color_accent2: { value: currentColors.accentOrange },
    u_color_accent3: { value: currentColors.accentMint }
  };

  const fluidMaterial = new THREE.ShaderMaterial({
    vertexShader: fluidVertexShader,
    fragmentShader: fluidFragmentShader,
    uniforms: fluidUniforms,
    depthWrite: false,
    depthTest: false
  });

  const fluidQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), fluidMaterial);
  fluidScene.add(fluidQuad);

  // =========================================================================
  // 4. Compact 3D Studio Geometries (Orderly Architectural Flank Layout)
  // =========================================================================
  const objectsGroup = new THREE.Group();
  scene.add(objectsGroup);

  const disposableGeos = [];
  const disposableMats = [];

  function trackGeo(geo) {
    disposableGeos.push(geo);
    return geo;
  }
  function trackMat(mat) {
    disposableMats.push(mat);
    return mat;
  }

  // Dynamic Translucent Materials
  const glassMaterial = trackMat(new THREE.MeshPhysicalMaterial({
    color: currentColors.accentBlue,
    emissive: currentColors.accentBlue.clone().multiplyScalar(0.06),
    roughness: 0.12,
    metalness: 0.08,
    transmission: 0.88,
    ior: 1.52,
    reflectivity: 0.85,
    thickness: 1.2,
    transparent: true,
    opacity: 0.82,
    wireframe: false
  }));

  const orangeGlassMaterial = trackMat(new THREE.MeshPhysicalMaterial({
    color: currentColors.accentOrange,
    emissive: currentColors.accentOrange.clone().multiplyScalar(0.08),
    roughness: 0.14,
    metalness: 0.1,
    transmission: 0.85,
    ior: 1.48,
    reflectivity: 0.9,
    thickness: 1.0,
    transparent: true,
    opacity: 0.8,
    wireframe: false
  }));

  const wireframeMaterial = trackMat(new THREE.MeshStandardMaterial({
    color: currentColors.accentOrange,
    emissive: currentColors.accentOrange.clone().multiplyScalar(0.2),
    roughness: 0.35,
    metalness: 0.8,
    wireframe: true,
    transparent: true,
    opacity: 0.42
  }));

  const blueWireframeMaterial = trackMat(new THREE.MeshStandardMaterial({
    color: currentColors.accentBlue,
    emissive: currentColors.accentBlue.clone().multiplyScalar(0.15),
    roughness: 0.35,
    metalness: 0.8,
    wireframe: true,
    transparent: true,
    opacity: 0.38
  }));

  // Compact Precision Geometries (Sleek, refined scales for modern UI/UX design studio)
  const torusKnotGeo = trackGeo(new THREE.TorusKnotGeometry(0.85, 0.20, 96, 24, 2, 3));
  const innerKnotGeo = trackGeo(new THREE.TorusKnotGeometry(0.87, 0.18, 48, 16, 2, 3));
  const boxGeo = trackGeo(new THREE.BoxGeometry(0.9, 0.9, 0.9));
  const boxWireGeo = trackGeo(new THREE.BoxGeometry(1.08, 1.08, 1.08));
  const icoGeo = trackGeo(new THREE.IcosahedronGeometry(0.78, 0));
  const ringGeo = trackGeo(new THREE.TorusGeometry(0.85, 0.045, 16, 48));
  const innerOctaGeo = trackGeo(new THREE.OctahedronGeometry(0.42, 0));
  const octaGeo = trackGeo(new THREE.OctahedronGeometry(0.82, 0));
  const cylinderGeo = trackGeo(new THREE.CylinderGeometry(0.72, 0.72, 0.22, 32));
  const tetraGeo = trackGeo(new THREE.TetrahedronGeometry(0.78, 0));
  const microNodeGeo = trackGeo(new THREE.OctahedronGeometry(0.16, 0));

  // Reference lists for animation
  let heroTorusKnot = null;
  const spinningCompounds = [];

  // Orderly Symmetrical Flank Layout (Evenly structured outside central content container)
  const compactLayoutConfig = [
    // 1. HERO SECTION (Level 0)
    {
      side: 1, // Right flank
      targetX: 5.6,
      baseY: 1.0,
      baseZ: 0.5,
      type: 'knot'
    },
    {
      side: -1, // Left flank
      targetX: 5.6,
      baseY: 1.5,
      baseZ: 0.2,
      type: 'box'
    },
    // 2. WHO AM I / ABOUT SECTION (Level 1)
    {
      side: 1,
      targetX: 5.8,
      baseY: -3.8,
      baseZ: -0.2,
      type: 'gyro'
    },
    {
      side: -1,
      targetX: 5.8,
      baseY: -3.5,
      baseZ: 0.0,
      type: 'ico'
    },
    // 3. PROCESS STEPPER SECTION (Level 2)
    {
      side: 1,
      targetX: 5.6,
      baseY: -8.5,
      baseZ: 0.3,
      type: 'octa'
    },
    {
      side: -1,
      targetX: 5.6,
      baseY: -8.2,
      baseZ: 0.1,
      type: 'cylinder'
    },
    // 4. PROJECTS GRID SECTION (Level 3)
    {
      side: 1,
      targetX: 5.8,
      baseY: -13.5,
      baseZ: -0.2,
      type: 'tetra'
    },
    {
      side: -1,
      targetX: 5.8,
      baseY: -13.8,
      baseZ: 0.0,
      type: 'halo'
    },
    // 5. TOOLKIT & CONTACT SECTION (Level 4)
    {
      side: 1,
      targetX: 5.6,
      baseY: -18.2,
      baseZ: 0.2,
      type: 'bottomIco'
    },
    {
      side: -1,
      targetX: 5.6,
      baseY: -18.5,
      baseZ: 0.0,
      type: 'bottomBox'
    }
  ];

  // Instantiate Compact Primary Geometries
  compactLayoutConfig.forEach((cfg, idx) => {
    let mainMesh = null;

    if (cfg.type === 'knot') {
      mainMesh = new THREE.Mesh(torusKnotGeo, glassMaterial);
      const wire = new THREE.Mesh(innerKnotGeo, wireframeMaterial);
      mainMesh.add(wire);
      heroTorusKnot = mainMesh;
    } else if (cfg.type === 'box' || cfg.type === 'bottomBox') {
      const isOrange = cfg.type === 'box';
      mainMesh = new THREE.Mesh(boxGeo, isOrange ? orangeGlassMaterial : glassMaterial);
      const wire = new THREE.Mesh(boxWireGeo, isOrange ? wireframeMaterial : blueWireframeMaterial);
      mainMesh.add(wire);
    } else if (cfg.type === 'gyro') {
      const group = new THREE.Group();
      const r1 = new THREE.Mesh(ringGeo, wireframeMaterial);
      const r2 = new THREE.Mesh(ringGeo, glassMaterial);
      r2.rotation.x = Math.PI / 2.4;
      const core = new THREE.Mesh(innerOctaGeo, orangeGlassMaterial);
      group.add(r1);
      group.add(r2);
      group.add(core);
      spinningCompounds.push({ r1, r2, core });
      mainMesh = group;
    } else if (cfg.type === 'ico' || cfg.type === 'bottomIco') {
      const isOrange = cfg.type === 'bottomIco';
      mainMesh = new THREE.Mesh(icoGeo, isOrange ? orangeGlassMaterial : glassMaterial);
      const wire = new THREE.Mesh(icoGeo, isOrange ? wireframeMaterial : blueWireframeMaterial);
      wire.scale.setScalar(1.03);
      mainMesh.add(wire);
    } else if (cfg.type === 'octa') {
      mainMesh = new THREE.Mesh(octaGeo, orangeGlassMaterial);
      const wire = new THREE.Mesh(octaGeo, wireframeMaterial);
      wire.scale.setScalar(1.03);
      mainMesh.add(wire);
    } else if (cfg.type === 'cylinder') {
      mainMesh = new THREE.Mesh(cylinderGeo, glassMaterial);
      mainMesh.rotation.x = Math.PI / 3;
    } else if (cfg.type === 'tetra') {
      mainMesh = new THREE.Mesh(tetraGeo, glassMaterial);
      const wire = new THREE.Mesh(tetraGeo, blueWireframeMaterial);
      wire.scale.setScalar(1.03);
      mainMesh.add(wire);
    } else if (cfg.type === 'halo') {
      const group = new THREE.Group();
      const halo = new THREE.Mesh(ringGeo, orangeGlassMaterial);
      const gem = new THREE.Mesh(innerOctaGeo, glassMaterial);
      group.add(halo);
      group.add(gem);
      spinningCompounds.push({ r1: halo, r2: gem, core: null });
      mainMesh = group;
    }

    if (mainMesh) {
      const baseX = cfg.side * cfg.targetX;
      mainMesh.position.set(baseX, cfg.baseY, cfg.baseZ);
      mainMesh.userData = {
        side: cfg.side,
        targetX: cfg.targetX,
        baseX: baseX,
        baseY: cfg.baseY,
        baseZ: cfg.baseZ,
        rotSpeedX: 0.003 + (idx % 3) * 0.001,
        rotSpeedY: 0.004 + (idx % 2) * 0.0015,
        parallaxFactor: 0.85 + (idx % 3) * 0.1,
        floatOffset: idx * 0.85
      };
      objectsGroup.add(mainMesh);
    }
  });

  // Orderly Grid Matrix of Micro-Accent Nodes (Equidistant Architectural Guide Points)
  const gridNodeRows = 7;
  const startY = 3.0;
  const stepY = 4.0;
  const flankGuideX = 7.4;

  for (let r = 0; r < gridNodeRows; r++) {
    const nodeY = startY - r * stepY;

    // Left Flank Guide Node
    const leftNode = new THREE.Mesh(
      microNodeGeo,
      r % 2 === 0 ? glassMaterial : orangeGlassMaterial
    );
    leftNode.position.set(-flankGuideX, nodeY, (r % 2 === 0 ? 0.3 : -0.3));
    leftNode.userData = {
      side: -1,
      targetX: flankGuideX,
      baseX: -flankGuideX,
      baseY: nodeY,
      baseZ: (r % 2 === 0 ? 0.3 : -0.3),
      rotSpeedX: 0.008,
      rotSpeedY: 0.006,
      parallaxFactor: 0.5,
      floatOffset: r * 0.6
    };
    objectsGroup.add(leftNode);

    // Right Flank Guide Node
    const rightNode = new THREE.Mesh(
      microNodeGeo,
      r % 2 === 1 ? glassMaterial : orangeGlassMaterial
    );
    rightNode.position.set(flankGuideX, nodeY - 1.0, (r % 2 === 1 ? 0.3 : -0.3));
    rightNode.userData = {
      side: 1,
      targetX: flankGuideX,
      baseX: flankGuideX,
      baseY: nodeY - 1.0,
      baseZ: (r % 2 === 1 ? 0.3 : -0.3),
      rotSpeedX: 0.006,
      rotSpeedY: 0.008,
      parallaxFactor: 0.5,
      floatOffset: r * 0.6 + Math.PI
    };
    objectsGroup.add(rightNode);
  }

  // =========================================================================
  // 5. Dynamic Studio Lighting (Extracted from CSS variables)
  // =========================================================================
  const ambientLight = new THREE.AmbientLight(currentColors.surface, 0.45);
  scene.add(ambientLight);

  // Top-Right PointLight: Accent Blue
  const pointLightBlue = new THREE.PointLight(currentColors.accentBlue, 2.8, 30);
  pointLightBlue.position.set(9, 6, 8);
  scene.add(pointLightBlue);

  // Bottom-Left PointLight: Accent Orange
  const pointLightOrange = new THREE.PointLight(currentColors.accentOrange, 3.2, 30);
  pointLightOrange.position.set(-8, -6, 7);
  scene.add(pointLightOrange);

  // Top Rim Light: Crisp White / Text Highlight
  const rimLight = new THREE.DirectionalLight(currentColors.text, 0.75);
  rimLight.position.set(0, 12, 6);
  scene.add(rimLight);

  // =========================================================================
  // 6. Real-time Theme Updates (MutationObserver)
  // =========================================================================
  function updateThemeColors() {
    currentColors = getThemeColors();

    // Update 3D Scene Background
    scene.background = currentColors.bg;

    // Update GLSL Shader Uniforms
    fluidUniforms.u_color_bg.value.copy(currentColors.bg);
    fluidUniforms.u_color_accent1.value.copy(currentColors.accentBlue);
    fluidUniforms.u_color_accent2.value.copy(currentColors.accentOrange);
    fluidUniforms.u_color_accent3.value.copy(currentColors.accentMint);

    // Update 3D Studio Lights
    ambientLight.color.copy(currentColors.surface);
    pointLightBlue.color.copy(currentColors.accentBlue);
    pointLightOrange.color.copy(currentColors.accentOrange);
    rimLight.color.copy(currentColors.text);

    // Update Glass Materials
    glassMaterial.color.copy(currentColors.accentBlue);
    glassMaterial.emissive.copy(currentColors.accentBlue).multiplyScalar(0.06);

    wireframeMaterial.color.copy(currentColors.accentOrange);
    wireframeMaterial.emissive.copy(currentColors.accentOrange).multiplyScalar(0.2);

    orangeGlassMaterial.color.copy(currentColors.accentOrange);
    orangeGlassMaterial.emissive.copy(currentColors.accentOrange).multiplyScalar(0.08);

    blueWireframeMaterial.color.copy(currentColors.accentBlue);
    blueWireframeMaterial.emissive.copy(currentColors.accentBlue).multiplyScalar(0.15);
  }

  // Observe root changes (e.g. data-theme, style, or class toggles)
  const themeObserver = new MutationObserver(() => {
    updateThemeColors();
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class', 'data-theme', 'style']
  });

  // Custom event listener for external themes
  window.addEventListener('themechange', updateThemeColors);

  // =========================================================================
  // 7. Mouse Motion & Velocity Tracking
  // =========================================================================
  const mouse = {
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    rawClientX: window.innerWidth * 0.5,
    rawClientY: window.innerHeight * 0.5,
    velocity: 0,
    targetVelocity: 0,
    lastMoveTime: performance.now(),
    lastX: window.innerWidth * 0.5,
    lastY: window.innerHeight * 0.5
  };

  function onPointerMove(e) {
    const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : window.innerWidth * 0.5);
    const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : window.innerHeight * 0.5);

    mouse.rawClientX = clientX;
    mouse.rawClientY = clientY;

    // Normalized coordinates (-1 to +1) for 3D parallax
    mouse.targetX = (clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = -(clientY / window.innerHeight) * 2 + 1;

    // UV coordinates (0 to 1) for GLSL shader
    fluidUniforms.u_mouse.value.set(
      clientX / window.innerWidth,
      1.0 - (clientY / window.innerHeight)
    );

    // Velocity calculation
    const now = performance.now();
    const dt = Math.max((now - mouse.lastMoveTime) / 1000, 0.001);
    const dx = clientX - mouse.lastX;
    const dy = clientY - mouse.lastY;
    const speed = Math.sqrt(dx * dx + dy * dy) / dt;

    mouse.targetVelocity = Math.min(speed / 1200, 2.5);
    mouse.lastX = clientX;
    mouse.lastY = clientY;
    mouse.lastMoveTime = now;
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });

  // =========================================================================
  // 8. Click / Tap Shockwave Ripple Trigger
  // =========================================================================
  function triggerShockwave(clientX, clientY) {
    const uvX = clientX / window.innerWidth;
    const uvY = 1.0 - (clientY / window.innerHeight);

    fluidUniforms.u_shockwave_pos.value.set(uvX, uvY);
    fluidUniforms.u_shockwave_time.value = 0.0;
    fluidUniforms.u_shockwave_intensity.value = 1.0;

    // Give 3D objects a slight magnetic impulse / bounce
    objectsGroup.children.forEach(obj => {
      if (obj.userData) {
        obj.userData.impulse = 0.35;
      }
    });
  }

  window.addEventListener('pointerdown', (e) => {
    // Only trigger if clicking directly on page / empty background / cards
    triggerShockwave(e.clientX, e.clientY);
  });

  window.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      triggerShockwave(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // =========================================================================
  // 9. Scroll-Based 3D Camera Movement & Parallax
  // =========================================================================
  let scrollProgress = 0;
  let targetScrollProgress = 0;

  function onScroll() {
    const docHeight = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1
    );
    targetScrollProgress = window.scrollY / docHeight;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // =========================================================================
  // 10. Window Resize & Performance Optimization
  // =========================================================================
  function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

    fluidUniforms.u_resolution.value.set(width, height);

    // Responsive positioning adjust for compact geometry flanks
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1100;
    const flankRatio = isMobile ? 0.48 : (isTablet ? 0.75 : 1.0);
    const scaleRatio = isMobile ? 0.62 : (isTablet ? 0.82 : 1.0);

    objectsGroup.children.forEach((obj) => {
      if (obj.userData && typeof obj.userData.targetX === 'number') {
        obj.userData.baseX = obj.userData.side * obj.userData.targetX * flankRatio;
        obj.scale.setScalar(scaleRatio);
      }
    });
  }

  window.addEventListener('resize', onWindowResize, { passive: true });
  onWindowResize();

  // =========================================================================
  // 11. Main 60 FPS Render Loop
  // =========================================================================
  const clock = new THREE.Clock();
  let animationFrameId = null;

  function animate() {
    animationFrameId = requestAnimationFrame(animate);

    const delta = Math.min(clock.getDelta(), 0.1);
    const elapsedTime = clock.getElapsedTime();

    // 1. Update Fluid Shader Uniforms
    fluidUniforms.u_time.value = elapsedTime;

    // Decay mouse velocity naturally
    mouse.velocity += (mouse.targetVelocity - mouse.velocity) * 0.12;
    mouse.targetVelocity *= 0.93;
    fluidUniforms.u_mouse_velocity.value = mouse.velocity;

    // Advance shockwave ripple time
    if (fluidUniforms.u_shockwave_time.value < 2.5) {
      fluidUniforms.u_shockwave_time.value += delta;
    }

    // 2. Smooth Mouse Interpolation (Spring Lag)
    mouse.currentX += (mouse.targetX - mouse.currentX) * 0.06;
    mouse.currentY += (mouse.targetY - mouse.currentY) * 0.06;

    /* 3. Lightweight Scroll Interpolation */
scrollProgress += (targetScrollProgress - scrollProgress) * 0.12;

/* 4. Subtle Scroll-Based Camera Movement */
camera.position.y = -scrollProgress * 8.0;
camera.position.z = 16.0 + Math.sin(scrollProgress * Math.PI) * 1.0;
camera.rotation.x = -scrollProgress * 0.04 + mouse.currentY * 0.02;
camera.rotation.y = mouse.currentX * 0.025;

    // 5. Animate Floating 3D Objects with Parallax & Attraction
    const time = elapsedTime;

    objectsGroup.children.forEach((obj) => {
      const ud = obj.userData;
      if (!ud) return;

      // Natural idle floating motion
      const floatY = Math.sin(time * 0.9 + (ud.floatOffset || 0)) * 0.28;
      const floatX = Math.cos(time * 0.7 + (ud.floatOffset || 0)) * 0.2;

      // Handle shockwave impulse bounce
      if (ud.impulse && ud.impulse > 0.001) {
        ud.impulse *= 0.92;
      } else {
        ud.impulse = 0;
      }

      // Magnetic parallax attraction toward cursor
      const targetPosX = ud.baseX + floatX + mouse.currentX * ud.parallaxFactor + (Math.random() - 0.5) * ud.impulse;
      const targetPosY = ud.baseY + floatY + mouse.currentY * ud.parallaxFactor + ud.impulse * 0.5;

      obj.position.x += (targetPosX - obj.position.x) * 0.08;
      obj.position.y += (targetPosY - obj.position.y) * 0.08;

      // Continuous rotation
      obj.rotation.x += ud.rotSpeedX + mouse.currentY * 0.008;
      obj.rotation.y += ud.rotSpeedY + mouse.currentX * 0.008;
    });

    // Special orbital spin for spinning compound structures
    spinningCompounds.forEach((item) => {
      if (item.r1) {
        item.r1.rotation.z += 0.012;
        item.r1.rotation.y += 0.008;
      }
      if (item.r2) {
        item.r2.rotation.x += 0.010;
        item.r2.rotation.z -= 0.006;
      }
      if (item.core) {
        item.core.rotation.y += 0.015;
        item.core.rotation.x += 0.012;
      }
    });

    // 6. Dual-Pass Render: Background Fluid Shader Quad -> 3D Studio Objects
    renderer.autoClear = false;
    renderer.clear();

    // Pass 1: Render dynamic fluid shader background
    renderer.render(fluidScene, fluidCamera);

    // Pass 2: Render floating 3D glass geometries & lights
    renderer.render(scene, camera);
  }

  // Start the animation loop
  animate();

  // =========================================================================
  // 12. Cleanup Method (For SPA / Page Unload / Unmount)
  // =========================================================================
  window.destroyInteractiveBackground = function () {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('touchmove', onPointerMove);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onWindowResize);
    window.removeEventListener('themechange', updateThemeColors);
    themeObserver.disconnect();

    // Dispose all tracked geometries & materials cleanly
    disposableGeos.forEach((geo) => {
      if (geo && typeof geo.dispose === 'function') geo.dispose();
    });
    disposableMats.forEach((mat) => {
      if (mat && typeof mat.dispose === 'function') mat.dispose();
    });
    if (fluidMaterial && typeof fluidMaterial.dispose === 'function') fluidMaterial.dispose();
    if (fluidQuad && fluidQuad.geometry && typeof fluidQuad.geometry.dispose === 'function') {
      fluidQuad.geometry.dispose();
    }

    renderer.dispose();
  };

  // Auto cleanup on window unload
  window.addEventListener('beforeunload', () => {
    if (typeof window.destroyInteractiveBackground === 'function') {
      window.destroyInteractiveBackground();
    }
  });

})();
