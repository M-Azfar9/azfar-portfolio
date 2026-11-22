"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface WaveFieldProps {
  theme: "dark" | "light";
}

function WaveField({ theme }: WaveFieldProps) {
  const pointsRef = useRef<THREE.Points>(null!);
  const { pointer } = useThree();

  // Grid of particles: e.g. 55 x 55 = 3025 particles
  const countX = 55;
  const countY = 55;
  const numPoints = countX * countY;

  const [positions, initialPositions] = useMemo(() => {
    const pos = new Float32Array(numPoints * 3);
    const initPos = new Float32Array(numPoints * 3);

    const sepX = 0.28;
    const sepY = 0.28;
    const offsetX = ((countX - 1) * sepX) / 2;
    const offsetY = ((countY - 1) * sepY) / 2;

    let idx = 0;
    for (let ix = 0; ix < countX; ix++) {
      for (let iy = 0; iy < countY; iy++) {
        const x = ix * sepX - offsetX;
        const y = 0;
        const z = iy * sepY - offsetY;

        pos[idx * 3] = x;
        pos[idx * 3 + 1] = y;
        pos[idx * 3 + 2] = z;

        initPos[idx * 3] = x;
        initPos[idx * 3 + 1] = y;
        initPos[idx * 3 + 2] = z;

        idx++;
      }
    }
    return [pos, initPos];
  }, [countX, countY, numPoints]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime() * 0.9;
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;

    const mouseX = pointer.x * 4;
    const mouseZ = -pointer.y * 4;

    for (let i = 0; i < numPoints; i++) {
      const idx = i * 3;
      const x = initialPositions[idx];
      const z = initialPositions[idx + 2];

      // Calculate distance to mouse pointer on plane
      const dx = x - mouseX;
      const dz = z - mouseZ;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const mouseInfluence = Math.max(0, 1 - dist / 3.5) * 0.6;

      // Complex gentle harmonic wave simulation
      const wave1 = Math.sin(x * 0.7 + time) * 0.35;
      const wave2 = Math.cos(z * 0.6 + time * 1.1) * 0.35;
      const wave3 = Math.sin((x + z) * 0.4 + time * 0.8) * 0.2;

      array[idx + 1] = wave1 + wave2 + wave3 + mouseInfluence * Math.sin(dist * 3 - time * 3);
    }

    posAttr.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.03;
  });

  const particleColor = theme === "dark" ? "#38bdf8" : "#2563eb";

  return (
    <points ref={pointsRef} rotation={[-Math.PI / 4.2, 0, 0]} position={[0, -0.6, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={theme === "dark" ? 0.045 : 0.05}
        color={particleColor}
        transparent
        opacity={theme === "dark" ? 0.75 : 0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D({ theme }: { theme: "dark" | "light" }) {
  return (
    <Canvas
      camera={{ position: [0, 4, 7], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      className="w-full h-full pointer-events-auto cursor-crosshair"
    >
      <ambientLight intensity={1} />
      <WaveField theme={theme} />
    </Canvas>
  );
}
