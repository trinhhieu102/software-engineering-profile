"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Edges } from "@react-three/drei";
import * as THREE from "three";

export type TechShapeType = "backend" | "frontend" | "database" | "cloud";

function BackendKnot() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.05}>
        <torusKnotGeometry args={[0.65, 0.2, 80, 16]} />
        <meshStandardMaterial
          color="#3f3f46"
          roughness={0.15}
          metalness={0.9}
          emissive="#27272a"
          emissiveIntensity={0.3}
        />
        <Edges scale={1.005} threshold={20} color="#ffffff" />
      </mesh>
    </Float>
  );
}

function FrontendDodecahedron() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.15}>
        <dodecahedronGeometry args={[1.05, 0]} />
        <meshStandardMaterial
          color="#3f3f46"
          roughness={0.15}
          metalness={0.9}
          emissive="#27272a"
          emissiveIntensity={0.3}
        />
        <Edges scale={1.005} threshold={15} color="#ffffff" />
      </mesh>
    </Float>
  );
}

function DatabaseDisks() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.45;
      groupRef.current.rotation.x = Math.sin(delta) * 0.1;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.4}>
      <group ref={groupRef} rotation={[0.3, 0, 0]} scale={0.95}>
        {/* Top Disk */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.85, 0.85, 0.28, 24]} />
          <meshStandardMaterial
            color="#3f3f46"
            roughness={0.15}
            metalness={0.9}
            emissive="#27272a"
            emissiveIntensity={0.3}
          />
          <Edges scale={1.005} threshold={15} color="#ffffff" />
        </mesh>

        {/* Middle Disk */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.85, 0.85, 0.28, 24]} />
          <meshStandardMaterial
            color="#3f3f46"
            roughness={0.15}
            metalness={0.9}
            emissive="#27272a"
            emissiveIntensity={0.3}
          />
          <Edges scale={1.005} threshold={15} color="#ffffff" />
        </mesh>

        {/* Bottom Disk */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.85, 0.85, 0.28, 24]} />
          <meshStandardMaterial
            color="#3f3f46"
            roughness={0.15}
            metalness={0.9}
            emissive="#27272a"
            emissiveIntensity={0.3}
          />
          <Edges scale={1.005} threshold={15} color="#ffffff" />
        </mesh>
      </group>
    </Float>
  );
}

function CloudContainer() {
  const cubeRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += delta * 0.35;
      cubeRef.current.rotation.y += delta * 0.45;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.7} floatIntensity={0.5}>
      <group scale={0.95}>
        {/* Core Container Cube */}
        <mesh ref={cubeRef}>
          <boxGeometry args={[0.9, 0.9, 0.9]} />
          <meshStandardMaterial
            color="#3f3f46"
            roughness={0.15}
            metalness={0.9}
            emissive="#27272a"
            emissiveIntensity={0.3}
          />
          <Edges scale={1.005} threshold={15} color="#ffffff" />
        </mesh>

        {/* Orbiting Satellite Ring */}
        <mesh ref={ringRef} rotation={[Math.PI / 4, Math.PI / 6, 0]}>
          <torusGeometry args={[1.35, 0.02, 16, 60]} />
          <meshStandardMaterial
            color="#e4e4e7"
            roughness={0.1}
            metalness={0.95}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function TechCanvas({ shape = "backend" }: { shape?: TechShapeType }) {
  return (
    <div className="w-full h-28 flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 3.6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ powerPreference: "low-power", antialias: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 8, 5]} intensity={3.5} color="#ffffff" />
        <directionalLight position={[-5, -5, -3]} intensity={2} color="#ffffff" />
        <pointLight position={[0, 2, 2]} intensity={2} color="#ffffff" />
        
        <Suspense fallback={null}>
          {shape === "backend" && <BackendKnot />}
          {shape === "frontend" && <FrontendDodecahedron />}
          {shape === "database" && <DatabaseDisks />}
          {shape === "cloud" && <CloudContainer />}
        </Suspense>
      </Canvas>
    </div>
  );
}
