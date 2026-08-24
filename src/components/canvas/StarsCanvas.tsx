"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// 1. Realistic Deep Space Starfield with Natural Stellar Colors
function RealisticCosmicStarfield() {
  const starsRef = useRef<THREE.Points>(null!);
  const count = 2400;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    // Realistic stellar classification colors (O-B-A-F-G-K-M star spectra)
    const starPalette = [
      [1.0, 1.0, 1.0],       // Pure White (Class A)
      [0.68, 0.82, 1.0],     // Blue-White Giant (Class B)
      [0.55, 0.75, 1.0],     // Deep Blue (Class O)
      [1.0, 0.88, 0.70],     // Warm Yellow Sun (Class G)
      [1.0, 0.72, 0.50],     // Orange Giant (Class K)
      [0.9, 0.8, 1.0],       // Soft Violet/Nebular
    ];

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 4.2;
      const sinPhi = Math.sin(phi);

      pos[i * 3] = r * sinPhi * Math.cos(theta);
      pos[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const colorChoice = starPalette[Math.floor(Math.random() * starPalette.length)];
      cols[i * 3] = colorChoice[0];
      cols[i * 3 + 1] = colorChoice[1];
      cols[i * 3 + 2] = colorChoice[2];
    }
    return { positions: pos, colors: cols };
  }, [count]);

  useFrame((_, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y -= delta / 35;
      starsRef.current.rotation.x -= delta / 50;
    }
  });

  return (
    <group>
      <Points ref={starsRef} positions={positions} colors={colors} stride={3} frustumCulled>
        <PointMaterial
          vertexColors
          transparent
          size={0.0035}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.85}
        />
      </Points>
    </group>
  );
}

// 2. Cosmic Nebula Dust Cloud (Gas clouds in deep universe)
function CosmicNebulaClouds() {
  const nebulaRef = useRef<THREE.Points>(null!);
  const count = 400;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = 1.2 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      pos[i * 3] = r * Math.cos(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.cos(phi) * Math.sin(theta);

      // Deep space nebula tint (Soft Cosmic Cyan & Indigo)
      cols[i * 3] = 0.15 + Math.random() * 0.2;
      cols[i * 3 + 1] = 0.35 + Math.random() * 0.3;
      cols[i * 3 + 2] = 0.7 + Math.random() * 0.3;
    }
    return { positions: pos, colors: cols };
  }, []);

  useFrame((_, delta) => {
    if (nebulaRef.current) {
      nebulaRef.current.rotation.y += delta / 45;
    }
  });

  return (
    <group>
      <Points ref={nebulaRef} positions={positions} colors={colors} stride={3} frustumCulled>
        <PointMaterial
          vertexColors
          transparent
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

// 3. Realistic Shooting Stars / Meteors with Fiery Plasma Trails
interface Meteor {
  x: number;
  y: number;
  z: number;
  speed: number;
  length: number;
  active: boolean;
  delay: number;
}

function RealShootingStars() {
  const linesRef = useRef<THREE.LineSegments>(null!);
  const count = 7;

  const meteors = useMemo(() => {
    const arr: Meteor[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 6 + 2,
        y: Math.random() * 3 + 1.8,
        z: (Math.random() - 0.5) * 2,
        speed: 4.5 + Math.random() * 4,
        length: 0.7 + Math.random() * 0.5,
        active: false,
        delay: Math.random() * 3,
      });
    }
    return arr;
  }, [count]);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 6);
    const col = new Float32Array(count * 6);
    for (let i = 0; i < count; i++) {
      // Head: Bright ionized white-blue
      col[i * 6] = 1.0;
      col[i * 6 + 1] = 1.0;
      col[i * 6 + 2] = 1.0;
      // Tail: Faded cosmic trail
      col[i * 6 + 3] = 0.08;
      col[i * 6 + 4] = 0.18;
      col[i * 6 + 5] = 0.4;
    }
    return { positions: pos, colors: col };
  }, [count]);

  const geometryRef = useRef<THREE.BufferGeometry>(null!);

  useFrame((_, delta) => {
    if (!geometryRef.current) return;
    const posAttr = geometryRef.current.attributes.position as THREE.BufferAttribute;
    const posArray = posAttr.array as Float32Array;

    const dirX = -1.4;
    const dirY = -0.8;
    const dirZ = -0.2;

    for (let i = 0; i < count; i++) {
      const m = meteors[i];

      if (m.delay > 0) {
        m.delay -= delta;
        posArray[i * 6] = 999;
        posArray[i * 6 + 1] = 999;
        posArray[i * 6 + 2] = 999;
        posArray[i * 6 + 3] = 999;
        posArray[i * 6 + 4] = 999;
        posArray[i * 6 + 5] = 999;
        continue;
      }

      m.x += dirX * m.speed * delta;
      m.y += dirY * m.speed * delta;
      m.z += dirZ * m.speed * delta;

      posArray[i * 6] = m.x;
      posArray[i * 6 + 1] = m.y;
      posArray[i * 6 + 2] = m.z;

      posArray[i * 6 + 3] = m.x - dirX * m.length;
      posArray[i * 6 + 4] = m.y - dirY * m.length;
      posArray[i * 6 + 5] = m.z - dirZ * m.length;

      if (m.y < -3.5 || m.x < -5) {
        m.x = Math.random() * 5 + 1.5;
        m.y = Math.random() * 2.5 + 2;
        m.z = (Math.random() - 0.5) * 2;
        m.speed = 4.5 + Math.random() * 4;
        m.length = 0.7 + Math.random() * 0.5;
        m.delay = Math.random() * 4 + 1;
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

export default function StarsCanvas() {
  return (
    <div className="w-full h-auto absolute inset-0 z-0 pointer-events-none opacity-90">
      <Canvas
        camera={{ position: [0, 0, 2] }}
        dpr={[1, 1.5]}
        gl={{ powerPreference: "low-power", antialias: false }}
      >
        <Suspense fallback={null}>
          <RealisticCosmicStarfield />
          <CosmicNebulaClouds />
          <RealShootingStars />
        </Suspense>
      </Canvas>
    </div>
  );
}
