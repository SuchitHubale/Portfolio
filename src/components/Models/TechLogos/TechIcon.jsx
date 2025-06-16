import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useEffect } from 'react'
import * as THREE from 'three';

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if(model.name === 'Interactive Developer') {
      scene.scene.traverse((child) => {
        if(child.isMesh && child.name === 'object-5') {
          child.material = new THREE.MeshStandardMaterial({ color:'white' })
        }
      })
    }
  })

  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.3}/>
        <directionalLight position={[5,5,5]} intensity={1} />

        <Environment preset='city' />

        <OrbitControls 
          enabledZoom={false}
          enablePan={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={5}
          zoomSpeed={0}
        />
        <Float 
          speed={2} 
          rotationIntensity={0.2} 
          floatIntensity={0.5}
          floatingRange={[-0.1, 0.1]}
        >
          <group scale={model.scale} rotation={model.rotation}>
            <primitive object={scene.scene} />
          </group>
        </Float>
      </Canvas>
    </div>
  );
};

export default TechIcon;
