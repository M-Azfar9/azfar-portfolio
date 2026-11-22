"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Edges, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface GeometricStarMeshProps {
  size?: number;
  beamThickness?: number;
  color?: string;
  roughness?: number;
  metalness?: number;
  showEdges?: boolean;
  edgeColor?: string;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  interactive?: boolean;
}

/**
 * 3D Geometric Star (Compound of Two Tetrahedra / Stella Octangula)
 * Constructed from 12 rectangular beams connecting the 8 cubic vertices.
 */
function GeometricStarMesh({
  size = 1.45,
  beamThickness = 0.28,
  color = "#111113",
  roughness = 0.32,
  metalness = 0.2,
  showEdges = true,
  edgeColor = "#3f3f46",
  autoRotate = true,
  autoRotateSpeed = 0.6,
  interactive = true,
}: GeometricStarMeshProps) {
  const tiltGroupRef = useRef<THREE.Group>(null!);
  const spinGroupRef = useRef<THREE.Group>(null!);
  const { pointer } = useThree();

  // 1. Calculate the 8 vertices of the two interpenetrating regular tetrahedra
  const beamTransforms = useMemo(() => {
    const s = size;

    // Tetrahedron 1 vertices (4 alternating corners of a cube)
    const tet1 = [
      new THREE.Vector3(s, s, s),
      new THREE.Vector3(s, -s, -s),
      new THREE.Vector3(-s, s, -s),
      new THREE.Vector3(-s, -s, s),
    ];

    // Tetrahedron 2 vertices (the other 4 corners of the cube)
    const tet2 = [
      new THREE.Vector3(-s, -s, -s),
      new THREE.Vector3(-s, s, s),
      new THREE.Vector3(s, -s, s),
      new THREE.Vector3(s, s, -s),
    ];

    // Build the 12 pairs of connected vertices (6 edges per tetrahedron)
    const edges: [THREE.Vector3, THREE.Vector3][] = [];
    const collectEdges = (verts: THREE.Vector3[]) => {
      for (let i = 0; i < verts.length; i++) {
        for (let j = i + 1; j < verts.length; j++) {
          edges.push([verts[i], verts[j]]);
        }
      }
    };

    collectEdges(tet1);
    collectEdges(tet2);

    // Compute transformation matrix & length for each beam
    return edges.map(([a, b]) => {
      const length = a.distanceTo(b) + beamThickness * 0.8; // slight overlap for seamless miter joints
      const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
      const dir = new THREE.Vector3().subVectors(b, a).normalize();

      // Radial vector pointing outward from origin to edge midpoint (strictly perpendicular to dir)
      const radial = mid.clone().normalize();
      const tangent = new THREE.Vector3().crossVectors(dir, radial).normalize();
      const normal = new THREE.Vector3().crossVectors(tangent, dir).normalize();

      // Basis matrix: X = tangent, Y = dir (along beam length), Z = normal
      const matrix = new THREE.Matrix4();
      matrix.makeBasis(tangent, dir, normal);
      matrix.setPosition(mid);

      return { matrix, length };
    });
  }, [size, beamThickness]);

  // Clean animation loop using nested groups: tilt for cursor, spin for continuous rotation
  useFrame((_, delta) => {
    if (spinGroupRef.current && autoRotate) {
      spinGroupRef.current.rotation.y += delta * autoRotateSpeed * 0.8;
      spinGroupRef.current.rotation.x += delta * autoRotateSpeed * 0.35;
    }

    if (tiltGroupRef.current && interactive) {
      tiltGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        tiltGroupRef.current.rotation.x,
        -pointer.y * 0.35,
        0.06
      );
      tiltGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        tiltGroupRef.current.rotation.y,
        pointer.x * 0.45,
        0.06
      );
    }
  });

  return (
    <group ref={tiltGroupRef}>
      {/* Initial isometric perspective angle matching the reference image */}
      <group ref={spinGroupRef} rotation={[0.42, 0.65, 0.2]}>
        {beamTransforms.map((beam, i) => (
          <group key={i} matrix={beam.matrix} matrixAutoUpdate={false}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[beamThickness, beam.length, beamThickness]} />
              <meshStandardMaterial
                color={color}
                roughness={roughness}
                metalness={metalness}
              />
              {showEdges && (
                <Edges
                  threshold={15}
                  color={edgeColor}
                  lineWidth={1.2}
                />
              )}
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

export interface GeometricStarProps extends GeometricStarMeshProps {
  className?: string;
  enableControls?: boolean;
  fov?: number;
  cameraDistance?: number;
}

/**
 * GeometricStar Component
 * Renders the abstract geometric star on an ultra-clean 100% transparent canvas.
 */
export default function GeometricStar({
  className = "w-full h-full",
  enableControls = false,
  fov = 42,
  cameraDistance = 7.2,
  ...meshProps
}: GeometricStarProps) {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{
          position: [0, 0, cameraDistance],
          fov: fov,
        }}
        style={{ background: "transparent" }}
      >
        {/* Studio Three-Point Lighting to give deep black shapes crisp dimensional reflections */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[8, 10, 6]} intensity={3.0} />
        <directionalLight position={[-8, -6, -4]} intensity={1.8} color="#94a3b8" />
        <pointLight position={[0, 6, 2]} intensity={1.5} />
        <pointLight position={[0, -6, -2]} intensity={0.8} />

        <Float
          speed={1.8}
          rotationIntensity={0.25}
          floatIntensity={0.35}
          floatingRange={[-0.12, 0.12]}
        >
          <GeometricStarMesh {...meshProps} />
        </Float>

        {enableControls && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.8}
          />
        )}
      </Canvas>
    </div>
  );
}
