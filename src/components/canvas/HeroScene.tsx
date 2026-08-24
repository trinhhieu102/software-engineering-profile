"use client";

import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

// 1. Optimized Procedural Earth with Continents, Oceans & Specular Shine
function RealisticEarth() {
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);
  const atmosphereRef = useRef<THREE.Mesh>(null!);
  const satelliteGroupRef = useRef<THREE.Group>(null!);

  // Fast, lightweight procedural canvas texture (256x128 with bilinear filtering)
  const earthTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Ocean deep space blue gradient
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, 128);
    oceanGrad.addColorStop(0, "#0c1e3d");
    oceanGrad.addColorStop(0.5, "#0a2540");
    oceanGrad.addColorStop(1, "#0c1e3d");
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, 256, 128);

    // Draw procedural landmasses
    ctx.fillStyle = "#1e3a29";
    for (let i = 0; i < 16; i++) {
      const cx = (Math.sin(i * 99) * 0.5 + 0.5) * 256;
      const cy = (Math.cos(i * 33) * 0.4 + 0.5) * 128;
      const radius = 15 + Math.abs(Math.sin(i)) * 25;

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Sub-islands
      for (let j = 0; j < 3; j++) {
        const sx = cx + (Math.sin(j * 11) * radius * 0.8);
        const sy = cy + (Math.cos(j * 11) * radius * 0.7);
        ctx.beginPath();
        ctx.arc(sx, sy, radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = "#2d5a3f";
        ctx.fill();
      }
    }

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
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.12;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.16;
      cloudsRef.current.rotation.x = Math.sin(delta * 0.05) * 0.05;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += delta * 0.08;
    }
    if (satelliteGroupRef.current) {
      satelliteGroupRef.current.rotation.y += delta * 0.4;
      satelliteGroupRef.current.rotation.z = Math.sin(delta * 0.2) * 0.15;
    }
  });

  return (
    <group rotation={[0.2, 0, 0.15]}>
      {/* 1. Main Solid Earth Globe */}
      <mesh ref={earthRef} scale={1.55}>
        <sphereGeometry args={[1, 36, 36]} />
        <meshStandardMaterial
          map={earthTexture || undefined}
          color={earthTexture ? "#ffffff" : "#0f3460"}
          roughness={0.4}
          metalness={0.1}
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

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);

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
    <div className="w-full h-full min-h-[340px] sm:min-h-[400px] md:min-h-[480px] flex items-center justify-center relative">
      {mounted ? (
        <Canvas
          camera={{ position: [0, 0, 4.6], fov: 45 }}
          dpr={[1, 1.1]}
          gl={{ powerPreference: "low-power", antialias: false, preserveDrawingBuffer: false }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 6, 8]} intensity={4.2} color="#ffffff" />
          <directionalLight position={[-8, -5, -6]} intensity={0.4} color="#1e293b" />
          <pointLight position={[-5, 3, -4]} intensity={1.5} color="#38bdf8" />

          <Suspense fallback={null}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
              <RealisticEarth />
            </Float>
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 1.6}
            minPolarAngle={Math.PI / 2.8}
          />
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
