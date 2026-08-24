"use client";

import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Html } from "@react-three/drei";
import * as THREE from "three";

const CODE_SNIPPETS = [
  "import { Canvas, useFrame } from '@react-three/fiber';",
  "import { OrbitControls, Stars } from '@react-three/drei';",
  "import * as THREE from 'three';",
  "",
  "function RealisticEarth() {",
  "  const earthRef = useRef<THREE.Mesh>(null!);",
  "  const cloudsRef = useRef<THREE.Mesh>(null!);",
  "",
  "  useFrame((state, delta) => {",
  "    earthRef.current.rotation.y += delta * 0.12;",
  "    cloudsRef.current.rotation.y += delta * 0.16;",
  "  });",
  "",
  "  return (",
  "    <group>",
  "      <mesh ref={earthRef}>",
  "        <sphereGeometry args={[1, 32, 32]} />",
  "        <meshStandardMaterial map={texture} />",
  "      </mesh>",
  "    </group>",
  "  );",
  "}",
  "",
  "// SYSTEM OVERRIDE: INITIATING HYPER-SPEED...",
  "// STATUS: STABLE 120 FPS ACTIVE",
  "// COMPILING KERNEL...",
  "const FPS = 120;",
  "const clock = new THREE.Clock();",
  "let lastFrame = performance.now();",
  "const renderLoop = () => {",
  "  const now = performance.now();",
  "  const delta = now - lastFrame;",
  "  if (delta >= 1000 / FPS) {",
  "    updatePhysics();",
  "    renderScene();",
  "    lastFrame = now;",
  "  }",
  "  requestAnimationFrame(renderLoop);",
  "};",
  "",
  "// COMPILING SUCCESSFUL //",
];

// 1. Realistic Earth Globe Component (with online NASA texture & realistic offline procedural fallback)
function RealisticEarth({ zoomVal }: { zoomVal: React.MutableRefObject<number> }) {
  const mainGroupRef = useRef<THREE.Group>(null!);
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);
  const atmosphereRef = useRef<THREE.Mesh>(null!);
  const satelliteGroupRef = useRef<THREE.Group>(null!);

  const [earthTexture, setEarthTexture] = useState<THREE.Texture | null>(null);

  // Dynamic texture loader (Online: Realistic Earth map, Offline: realistic procedural map fallback)
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg",
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.generateMipmaps = true;
        setEarthTexture(texture);
      },
      undefined,
      (err) => {
        console.warn("Failed to load online NASA texture, using local procedural fallback map", err);
      }
    );
  }, []);

  // Highly refined procedural map showing realistic continents as a fallback
  const proceduralTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Ocean deep space blue gradient
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, 256);
    oceanGrad.addColorStop(0, "#0a1931");
    oceanGrad.addColorStop(0.5, "#0f3057");
    oceanGrad.addColorStop(1, "#0a1931");
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, 512, 256);

    ctx.fillStyle = "#1e4d2b"; // Continent Forest Green

    // 1. Eurasia & Africa
    ctx.beginPath();
    ctx.moveTo(200, 40);   // Scandinavia
    ctx.lineTo(240, 30);   // North Russia
    ctx.lineTo(380, 40);   // Siberia
    ctx.lineTo(400, 120);  // East Asia
    ctx.lineTo(360, 160);  // Southeast Asia
    ctx.lineTo(320, 120);  // India
    ctx.lineTo(280, 100);  // Middle East
    ctx.lineTo(270, 180);  // South Africa
    ctx.lineTo(220, 160);  // West Africa
    ctx.lineTo(210, 100);  // Mediterranean
    ctx.closePath();
    ctx.fill();

    // 2. Americas (North & South)
    ctx.beginPath();
    ctx.moveTo(60, 40);    // Alaska
    ctx.lineTo(120, 60);   // Canada
    ctx.lineTo(110, 110);  // USA
    ctx.lineTo(125, 120);  // Mexico
    ctx.lineTo(150, 160);  // Brazil
    ctx.lineTo(140, 220);  // Argentina
    ctx.lineTo(110, 170);  // Peru
    ctx.lineTo(95, 120);   // Central America
    ctx.closePath();
    ctx.fill();

    // 3. Australia
    ctx.beginPath();
    ctx.arc(400, 190, 25, 0, Math.PI * 2);
    ctx.fill();

    // 4. Greenland (Snowy icecap)
    ctx.fillStyle = "#e5e7eb";
    ctx.beginPath();
    ctx.moveTo(140, 30);
    ctx.lineTo(170, 40);
    ctx.lineTo(150, 60);
    ctx.closePath();
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return tex;
  }, []);

  // Lightweight procedural cloud layer
  const cloudTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.clearRect(0, 0, 128, 64);
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    for (let i = 0; i < 12; i++) {
      const cx = (Math.sin(i * 47) * 0.5 + 0.5) * 128;
      const cy = (Math.cos(i * 61) * 0.4 + 0.5) * 64;
      const radius = 10 + Math.abs(Math.sin(i * 2)) * 18;

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return tex;
  }, []);

  useFrame((_, delta) => {
    const zoom = zoomVal.current;

    // Direct Group Visibility update to bypass React state re-render lag
    if (mainGroupRef.current) {
      mainGroupRef.current.visible = zoom < 0.98;
    }

    const rotationSpeedMult = 1 - zoom;

    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.12 * rotationSpeedMult;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.16 * rotationSpeedMult;
      cloudsRef.current.rotation.x = Math.sin(delta * 0.05) * 0.05 * rotationSpeedMult;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += delta * 0.08 * rotationSpeedMult;
    }
    if (satelliteGroupRef.current) {
      satelliteGroupRef.current.rotation.y += delta * 0.4 * rotationSpeedMult;
      satelliteGroupRef.current.rotation.z = Math.sin(delta * 0.2) * 0.15 * rotationSpeedMult;
      satelliteGroupRef.current.visible = zoom < 0.9;
    }

    // Dynamic Earth scale-up (dives past the camera)
    const scaleMult = 1 + zoom * 8.5;

    if (earthRef.current) {
      earthRef.current.scale.setScalar(1.55 * scaleMult);
      if (earthRef.current.material) {
        const mat = earthRef.current.material as THREE.MeshStandardMaterial;
        mat.transparent = true;
        mat.opacity = Math.max(0, 1 - zoom);
      }
    }
    if (cloudsRef.current) {
      cloudsRef.current.scale.setScalar(1.58 * scaleMult);
      if (cloudsRef.current.material) {
        const mat = cloudsRef.current.material as THREE.MeshStandardMaterial;
        mat.transparent = true;
        mat.opacity = Math.max(0, 0.55 * (1 - zoom));
      }
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.scale.setScalar(1.66 * scaleMult);
      if (atmosphereRef.current.material) {
        const mat = atmosphereRef.current.material as THREE.MeshBasicMaterial;
        mat.transparent = true;
        mat.opacity = Math.max(0, 0.18 * (1 - zoom));
      }
    }
  });

  // Assign the loaded NASA texture if ready, else use our realistic continent map
  const activeTexture = earthTexture || proceduralTexture;

  return (
    <group ref={mainGroupRef} rotation={[0.2, 0, 0.15]}>
      {/* 1. Main Solid Earth Globe */}
      <mesh ref={earthRef} scale={1.55}>
        <sphereGeometry args={[1, 36, 36]} />
        <meshStandardMaterial
          map={activeTexture || undefined}
          color={activeTexture ? "#ffffff" : "#0f3460"}
          roughness={0.45}
          metalness={0.05}
          transparent
        />
      </mesh>

      {/* 2. Realistic Dynamic Cloud Layer */}
      <mesh ref={cloudsRef} scale={1.58}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={cloudTexture || undefined}
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* 3. Outer Rayleigh Atmosphere Scattering Halo */}
      <mesh ref={atmosphereRef} scale={1.66}>
        <sphereGeometry args={[1, 28, 28]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.18}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 4. Orbiting Space Station / Satellite */}
      <group ref={satelliteGroupRef}>
        <group position={[2.6, 0.4, 0]}>
          <mesh scale={0.08}>
            <boxGeometry args={[1, 1, 1.8]} />
            <meshStandardMaterial color="#e4e4e7" metalness={0.95} roughness={0.1} />
          </mesh>

          <mesh position={[-0.3, 0, 0]} scale={[0.45, 0.02, 0.22]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#0284c7" metalness={0.8} roughness={0.2} />
          </mesh>

          <mesh position={[0.3, 0, 0]} scale={[0.45, 0.02, 0.22]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#0284c7" metalness={0.8} roughness={0.2} />
          </mesh>

          <pointLight intensity={1.5} distance={1} color="#34d399" />
        </group>
      </group>
    </group>
  );
}

// 2. Futuristic Coder Workspace inside the Earth (With customized desk coder illustration)
function CoderWorkspace({ isZoomed, zoomVal }: { isZoomed: boolean; zoomVal: React.MutableRefObject<number> }) {
  const workspaceRef = useRef<THREE.Group>(null!);
  const codeContainerRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<THREE.Points>(null!);
  const pointsMatRef = useRef<THREE.PointsMaterial>(null!);
  const htmlWrapperRef = useRef<HTMLDivElement>(null);

  const [fpsVal, setFpsVal] = useState("120.0");

  // Matrix falling particles layout
  const particleCount = 120;
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const spd = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 5.5; // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5.5; // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5.5; // Z
      spd[i] = 0.6 + Math.random() * 1.4;
    }
    return [pos, spd];
  }, []);

  // Slight FPS fluctuation simulation to mimic active high-speed frame calculation
  useEffect(() => {
    if (!isZoomed) return;
    const interval = setInterval(() => {
      const randomFps = (119.7 + Math.random() * 0.5).toFixed(1);
      setFpsVal(randomFps);
    }, 120);
    return () => clearInterval(interval);
  }, [isZoomed]);

  useFrame((_, delta) => {
    const zoom = zoomVal.current;

    // Scale, Visibility and Opacities handled directly to preserve max speed
    if (workspaceRef.current) {
      workspaceRef.current.visible = zoom > 0.05;
      const scaleVal = Math.max(0.001, Math.min(1.0, (zoom - 0.05) / 0.95));
      workspaceRef.current.scale.setScalar(scaleVal);
    }

    if (htmlWrapperRef.current) {
      const htmlOpacity = Math.max(0, Math.min(1, (zoom - 0.35) / 0.6));
      htmlWrapperRef.current.style.opacity = String(htmlOpacity);
    }

    // Scrolling source editor at 120 FPS
    if (codeContainerRef.current && isZoomed) {
      codeContainerRef.current.scrollTop += delta * 155; // 155px/s
      if (codeContainerRef.current.scrollTop >= codeContainerRef.current.scrollHeight - codeContainerRef.current.clientHeight) {
        codeContainerRef.current.scrollTop = 0;
      }
    }

    // Matrix digital rain points simulation
    if (pointsRef.current) {
      const geo = pointsRef.current.geometry;
      const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        let y = posAttr.getY(i);
        y -= speeds[i] * delta * (1.2 + zoom * 3.5); // Accels rain during zoom-in warp
        if (y < -2.8) {
          y = 2.8;
        }
        posAttr.setY(i, y);
      }
      posAttr.needsUpdate = true;
      pointsRef.current.rotation.y += delta * 0.05;

      if (pointsMatRef.current) {
        pointsMatRef.current.opacity = Math.max(0, Math.min(0.65, (zoom - 0.15) / 0.75));
      }
    }
  });

  return (
    <group ref={workspaceRef} visible={false}>
      {/* 3D Space Floating Matrix Rain */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          ref={pointsMatRef}
          color="#34d399"
          size={0.035}
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Cyberpunk Grid Ground */}
      <gridHelper
        args={[10, 18, "#10b981", "#022c22"]}
        position={[0, -1.25, 0]}
      />

      {/* Futuristic 3D HTML transform screen (occlude removed to fix black mask box) */}
      <group position={[0, 0.08, 0]}>
        <Html
          transform
          distanceFactor={1.75}
          style={{ width: "480px", height: "300px", pointerEvents: "none" }}
        >
          <div
            ref={htmlWrapperRef}
            className="w-full h-full flex flex-col bg-zinc-950/90 border border-emerald-500/40 rounded-xl overflow-hidden shadow-[0_0_35px_rgba(16,185,129,0.3),inset_0_0_20px_rgba(16,185,129,0.15)] text-[#4ade80] font-mono relative select-none"
            style={{ opacity: 0 }}
          >
            <style>{`
              @keyframes typing-left {
                0%, 100% { transform: translateY(0) scale(1); }
                50% { transform: translateY(-2px) translateX(1px) scale(1.03); }
              }
              @keyframes typing-right {
                0%, 100% { transform: translateY(0) scale(1); }
                50% { transform: translateY(-3px) translateX(-1px) scale(0.97); }
              }
              @keyframes scanline {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(100%); }
              }
              .scanline-effect {
                position: absolute;
                top: 0; left: 0; width: 100%; height: 100%;
                background: linear-gradient(to bottom, rgba(16, 185, 129, 0) 0%, rgba(16, 185, 129, 0.07) 12%, rgba(16, 185, 129, 0) 24%);
                animation: scanline 4.5s linear infinite;
                pointer-events: none;
              }
              .animate-typing-left {
                animation: typing-left 0.11s ease-in-out infinite alternate;
              }
              .animate-typing-right {
                animation: typing-right 0.13s ease-in-out infinite alternate;
              }
              .terminal-scroll::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* CRT Screen Scanline Grid Overlay */}
            <div className="scanline-effect" />

            {/* Window title bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-zinc-950 border-b border-emerald-500/20 text-xs text-emerald-400 font-sans">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-emerald-500/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-emerald-500/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-emerald-500/20" />
                <span className="ml-2 font-mono text-[10px] tracking-wider text-emerald-300">neovim • src/components/canvas/HeroScene.tsx</span>
              </div>
              <div className="text-[10px] tracking-widest font-semibold uppercase text-emerald-400/75">
                120 FPS TARGET
              </div>
            </div>

            {/* Main Workspace Layout */}
            <div className="flex flex-1 overflow-hidden p-3 gap-3">
              {/* Left Column: Code Editor */}
              <div className="flex-[1.25] flex flex-col min-w-0 border-r border-emerald-500/15 pr-2">
                <div className="text-[8px] text-emerald-400/50 uppercase tracking-widest mb-1.5 select-none font-sans flex items-center justify-between">
                  <span>console.log</span>
                  <span className="text-[#4ade80] font-bold">src/components/canvas/HeroScene.tsx</span>
                </div>
                <div
                  ref={codeContainerRef}
                  className="flex-1 overflow-y-auto text-[10px] leading-relaxed font-mono text-emerald-300 terminal-scroll"
                  style={{ scrollBehavior: 'auto' }}
                >
                  {CODE_SNIPPETS.map((line, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="text-emerald-500/35 select-none w-5 text-right font-sans">{idx + 1}</span>
                      <span className="whitespace-pre overflow-hidden text-ellipsis">{line}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Large Coder Camera Feed */}
              <div className="flex-1 flex flex-col justify-between pl-1">
                <div className="text-[8px] text-emerald-400/50 uppercase tracking-widest mb-1.5 select-none font-sans flex justify-between items-center">
                  <span>Node Telemetry Feed</span>
                  <span className="text-emerald-500/40 text-[7px]">SYS: OK</span>
                </div>
                
                {/* Large Coder Image Container */}
                <div className="relative flex-1 w-full rounded-md border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] overflow-hidden bg-zinc-950">
                  <img 
                    src="/coder.jpg" 
                    alt="Coder Coding Feed" 
                    className="w-full h-full object-cover opacity-90 transition-all duration-300 filter brightness-[0.95] contrast-[1.1] saturate-[1.05]"
                  />
                  
                  {/* Camera overlay HUD */}
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-zinc-950/85 border border-emerald-500/20 text-[8px] font-bold text-emerald-300 flex items-center gap-1.5 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>CAM_01 // {fpsVal} FPS</span>
                  </div>

                  <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-zinc-950/85 text-[7px] text-[#4ade80] font-sans font-bold border border-emerald-500/10 backdrop-blur-sm">
                    120Hz TARGET
                  </div>

                  {/* Corner Camera Crosshairs */}
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-emerald-400/40" />
                  <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-emerald-400/40" />
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-emerald-400/40" />
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-emerald-400/40" />
                </div>

                <div className="text-[8px] text-emerald-400/50 uppercase tracking-widest text-center mt-1.5 font-sans flex justify-between items-center px-1 select-none">
                  <span>@trinhhieu102</span>
                  <span className="text-[7px] text-emerald-500/35">NODE_ALPHA</span>
                </div>
              </div>
            </div>

            {/* Bottom status bar */}
            <div className="px-3 py-1 bg-zinc-950 border-t border-emerald-500/20 text-[8px] flex items-center justify-between text-emerald-500/60 font-sans">
              <div className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                <span>DEV NODE INITIALIZED // SYSTEM OK</span>
              </div>
              <div>UTF-8</div>
            </div>
          </div>
        </Html>
      </group>
    </group>
  );
}

// 3. SceneManager to handle smooth interpolation of Camera & Starfield speed
function SceneManager({
  isZoomed,
  zoomVal,
  starsRef
}: {
  isZoomed: boolean;
  zoomVal: React.MutableRefObject<number>;
  starsRef: React.MutableRefObject<THREE.Points>;
}) {
  const targetQuaternion = useMemo(() => new THREE.Quaternion(), []);

  useFrame((state, delta) => {
    // Smooth frame-independent interpolation
    zoomVal.current = THREE.MathUtils.lerp(zoomVal.current, isZoomed ? 1.0 : 0.0, delta * 3.8);

    // Zoom camera in towards origin
    if (isZoomed) {
      // Direct overrides to align front-on when active (bypass OrbitControls entirely when unmounted)
      state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 0, delta * 4.5);
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 0, delta * 4.5);
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 1.2, delta * 4.5);

      // Slerp camera rotation quaternion to face straight-on
      state.camera.quaternion.slerp(targetQuaternion, delta * 4.5);
    } else {
      // Smoothly return camera to [0, 0, 4.6] and rotation to look straight before OrbitControls takes over
      state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 0, delta * 4.0);
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 0, delta * 4.0);
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 4.6, delta * 4.0);
      state.camera.quaternion.slerp(targetQuaternion, delta * 4.0);
    }

    // Zoom-in field of view transition (warp effect)
    state.camera.fov = THREE.MathUtils.lerp(45, 36, zoomVal.current);
    state.camera.updateProjectionMatrix();

    // Starfield rotation speed increases during zoom warp
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * (0.035 + zoomVal.current * 0.25);
      starsRef.current.rotation.z += delta * (0.015 + zoomVal.current * 0.15);
    }
  });

  return null;
}

interface HeroSceneProps {
  isZoomed?: boolean;
}

export default function HeroScene({ isZoomed = false }: HeroSceneProps) {
  const [mounted, setMounted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  
  const zoomVal = useRef(0);
  const starsRef = useRef<THREE.Points>(null!);

  // Unmount OrbitControls during zoom to prevent collision & force slerp, remounting after zoom out
  useEffect(() => {
    if (isZoomed) {
      setShowControls(false);
    } else {
      const timer = setTimeout(() => {
        setShowControls(true);
      }, 550);
      return () => clearTimeout(timer);
    }
  }, [isZoomed]);

  useEffect(() => {
    // Idle deferral to give mobile browser instant FCP / LCP
    if ("requestIdleCallback" in window) {
      const handle = (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
        () => setMounted(true),
        { timeout: 1200 }
      );
      return () => {
        if ("cancelIdleCallback" in window) {
          (window as Window & { cancelIdleCallback: (h: number) => void }).cancelIdleCallback(handle);
        }
      };
    } else {
      const timer = setTimeout(() => setMounted(true), 150);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="w-full h-[380px] sm:h-[440px] md:h-[500px] flex items-center justify-center relative overflow-hidden">
      {mounted ? (
        <Canvas
          camera={{ position: [0, 0, 4.6], fov: 45 }}
          dpr={[1, 1.2]}
          gl={{ powerPreference: "high-performance", antialias: true, preserveDrawingBuffer: false }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 6, 8]} intensity={4.2} color="#ffffff" />
          <directionalLight position={[-8, -5, -6]} intensity={0.4} color="#1e293b" />
          <pointLight position={[-5, 3, -4]} intensity={1.5} color="#38bdf8" />

          {/* Deep Space Background */}
          <Stars
            ref={starsRef}
            radius={85}
            depth={40}
            count={2800}
            factor={4}
            saturation={0.5}
            fade
            speed={1.0}
          />

          <SceneManager isZoomed={isZoomed} zoomVal={zoomVal} starsRef={starsRef} />

          <Suspense fallback={null}>
            <Float speed={isZoomed ? 0 : 1.5} rotationIntensity={0.2} floatIntensity={0.3}>
              <RealisticEarth zoomVal={zoomVal} />
            </Float>

            <CoderWorkspace isZoomed={isZoomed} zoomVal={zoomVal} />
          </Suspense>

          {showControls && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={false}
              maxPolarAngle={Math.PI / 1.6}
              minPolarAngle={Math.PI / 2.8}
            />
          )}
        </Canvas>
      ) : (
        /* Instant CSS Celestial Sphere Placeholder (0ms main thread blocking) */
        <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full flex items-center justify-center">
          <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-sky-950 via-blue-900/40 to-emerald-950 border border-sky-500/30 shadow-[0_0_50px_rgba(56,189,248,0.2)] animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-sky-400/20 border-t-sky-400/80 animate-spin" />
        </div>
      )}
    </div>
  );
}
