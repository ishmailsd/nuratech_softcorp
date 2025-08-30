import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RotatingCubeWithLights = () => {
  const cubeRef = useRef();

  // Rotate the cube and its lights
  useFrame((_, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += delta * 0.5;
      cubeRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={cubeRef}>
      {/* Cube - 1.5x original size */}
      <mesh>
        <boxGeometry args={[9, 9, 9]} />
        <meshStandardMaterial 
          color="#FFFFFF" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#333333"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Lights on each face */}
      <pointLight
        color="#FF0000" // Red light
        intensity={100}
        distance={40}
        decay={0.5}
        position={[0, 0, 5]} // Front face
      />
      <pointLight
        color="#00FF00" // Green light
        intensity={100}
        distance={40}
        decay={0.5}
        position={[0, 0, -5]} // Back face
      />
      <pointLight
        color="#0000FF" // Blue light
        intensity={100}
        distance={40}
        decay={0.5}
        position={[0, 5, 0]} // Top face
      />
      <pointLight
        color="#FFFF00" // Yellow light
        intensity={100}
        distance={40}
        decay={0.5}
        position={[0, -5, 0]} // Bottom face
      />
      <pointLight
        color="#FF00FF" // Magenta light
        intensity={100}
        distance={40}
        decay={0.5}
        position={[5, 0, 0]} // Right face
      />
      <pointLight
        color="#00FFFF" // Cyan light
        intensity={100}
        distance={40}
        decay={0.5}
        position={[-5, 0, 0]} // Left face
      />
    </group>
  );
};

export default RotatingCubeWithLights;
