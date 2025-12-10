'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const [particleCount, setParticleCount] = useState(2000);
  
  useEffect(() => {
    const updateParticleCount = () => {
      setParticleCount(window.innerWidth < 768 ? 1000 : 2000);
    };
    updateParticleCount();
    window.addEventListener('resize', updateParticleCount);
    return () => window.removeEventListener('resize', updateParticleCount);
  }, []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = Math.cos((i / 100) * Math.PI * 2) * factor;
      const y = Math.sin((i / 100) * Math.PI * 2) * factor;
      const z = (Math.random() - 0.5) * 200;
      
      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [particleCount]);

  useFrame((state) => {
    if (!ref.current) return;
    
    particles.forEach((particle, i) => {
      let { factor, speed, x, y, z } = particle;
      const t = (particle.time += speed);
      
      ref.current!.geometry.attributes.position.setXYZ(
        i,
        x + Math.cos((t / 10) + factor) + (Math.sin(t * 1) / 10),
        y + Math.sin((t / 10) + factor) + (Math.cos(t * 2) / 10),
        z + Math.cos((t / 10) + factor) + (Math.sin(t * 3) / 10)
      );
    });
    
    ref.current!.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={new Float32Array(particles.flatMap(p => [p.x, p.y, p.z]))} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.5}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.1}
      />
    </Points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: true }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}

