"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function StardustField() {
  const pointsRef = useRef<THREE.Points>(null!);
  const { pointer } = useThree();

  const particleCount = 420;

  // Generate a smooth circular glowing dot texture for sunlight photon particles
  const circleTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Pure white radial glow mask so vertex colors (yellow & green) render cleanly
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.35, "rgba(255, 255, 255, 0.85)");
    gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.3)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 30, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    // Sunlight Photons & Nature Energy: #2B5B37 (Deep Green) & #C7C62F (Solar Gold Yellow)
    const palette = [
      new THREE.Color("#2B5B37"), // Deep Foliage / Forest Green
      new THREE.Color("#C7C62F"), // Radiant Sunlight Photon Gold
      new THREE.Color("#2B5B37"),
      new THREE.Color("#C7C62F"),
    ];

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 11;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, col];
  }, [particleCount]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();

    // Gentle floating rotation + subtle mouse parallax
    pointsRef.current.rotation.y = t * 0.02 + pointer.x * 0.06;
    pointsRef.current.rotation.x = -pointer.y * 0.04;

    // Slow organic drifting of star dots
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3 + 1;
      arr[idx] += Math.sin(t * 0.4 + i) * 0.0018;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.075}
        map={circleTexture || undefined}
        vertexColors
        transparent
        alphaTest={0.01}
        depthWrite={false}
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

export default function QuantumCosmosCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1} />
        <StardustField />
      </Canvas>
    </div>
  );
}
