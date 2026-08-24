"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "./CanvasLoader";

// 1. Photorealistic Procedural Earth with Continents, Oceans & Specular Shine
function RealisticEarth() {
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);
  const atmosphereRef = useRef<THREE.Mesh>(null!);
  const satelliteGroupRef = useRef<THREE.Group>(null!);

  // Generate procedural canvas texture for Earth surface
  const earthTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Ocean deep space blue gradient
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, 512);
    oceanGrad.addColorStop(0, "#0c1e3d");
    oceanGrad.addColorStop(0.5, "#0a2540");
    oceanGrad.addColorStop(1, "#0c1e3d");
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, 1024, 512);

    // Draw procedural realistic landmasses / continents
    ctx.fillStyle = "#1e3a29"; // Earth green/slate landmass
    for (let i = 0; i < 40; i++) {
      const cx = (Math.sin(i * 99) * 0.5 + 0.5) * 1024;
      const cy = (Math.cos(i * 33) * 0.4 + 0.5) * 512;
      const radius = 40 + Math.abs(Math.sin(i)) * 90;

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Sub-islands / coastal terrain
      for (let j = 0; j < 5; j++) {
        const sx = cx + (Math.sin(j * 11) * radius * 0.9);
        const sy = cy + (Math.cos(j * 11) * radius * 0.8);
        ctx.beginPath();
        ctx.arc(sx, sy, radius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = "#2d5a3f";
        ctx.fill();
      }
    }

    // Specular / mountain highlights
    ctx.fillStyle = "#4a6b57";
    for (let i = 0; i < 20; i++) {
      const cx = (Math.sin(i * 77) * 0.45 + 0.5) * 1024;
      const cy = (Math.cos(i * 44) * 0.35 + 0.5) * 512;
      ctx.beginPath();
      ctx.arc(cx, cy, 25, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, []);

  // Generate procedural realistic Cloud Layer texture
  const cloudTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillRect(0, 0, 1024, 512);

    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    for (let i = 0; i < 60; i++) {
      const cx = (Math.sin(i * 123) * 0.5 + 0.5) * 1024;
      const cy = (Math.cos(i * 456) * 0.45 + 0.5) * 512;
      const rx = 50 + Math.abs(Math.sin(i * 10)) * 120;
      const ry = 15 + Math.abs(Math.cos(i * 10)) * 35;

      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, Math.sin(i), 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, []);

  useFrame((_, delta) => {
    // Earth axial rotation
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.12;
    }
    // Atmospheric clouds rotate independently
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.16;
      cloudsRef.current.rotation.x = Math.sin(delta) * 0.02;
    }
    // Satellite orbit motion
    if (satelliteGroupRef.current) {
      satelliteGroupRef.current.rotation.y += delta * 0.4;
      satelliteGroupRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group rotation={[0.41, 0, 0.2]}>
      {/* 1. Main Solid Earth Globe */}
      <mesh ref={earthRef} scale={1.55}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture || undefined}
          color={earthTexture ? "#ffffff" : "#0f3460"}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* 2. Realistic Dynamic Cloud Layer */}
      <mesh ref={cloudsRef} scale={1.58}>
        <sphereGeometry args={[1, 48, 48]} />
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
        <sphereGeometry args={[1, 48, 48]} />
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
          {/* Main Satellite Body */}
          <mesh scale={0.08}>
            <boxGeometry args={[1, 1, 1.8]} />
            <meshStandardMaterial color="#e4e4e7" metalness={0.95} roughness={0.1} />
          </mesh>

          {/* Golden/Blue Solar Panel Left */}
          <mesh position={[-0.3, 0, 0]} scale={[0.45, 0.02, 0.22]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#0284c7" metalness={0.8} roughness={0.2} />
          </mesh>

          {/* Golden/Blue Solar Panel Right */}
          <mesh position={[0.3, 0, 0]} scale={[0.45, 0.02, 0.22]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#0284c7" metalness={0.8} roughness={0.2} />
          </mesh>

          {/* Navigation Beacon Light */}
          <pointLight intensity={1.5} distance={1} color="#34d399" />
        </group>
      </group>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full min-h-[380px] md:min-h-[480px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ powerPreference: "high-performance", antialias: true }}
      >
        {/* Realistic Space Solar Lighting */}
        <ambientLight intensity={0.25} />
        {/* Direct Sun light casting day/night terminator */}
        <directionalLight position={[10, 6, 8]} intensity={4.2} color="#ffffff" />
        {/* Subtle deep space reflection */}
        <directionalLight position={[-8, -5, -6]} intensity={0.4} color="#1e293b" />
        {/* Atmospheric rim backlight */}
        <pointLight position={[-5, 3, -4]} intensity={1.5} color="#38bdf8" />

        <Suspense fallback={<CanvasLoader />}>
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
    </div>
  );
}
