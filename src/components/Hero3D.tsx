import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1.8, 64, 64]}>
        <MeshDistortMaterial
          color="#ef4444"
          emissive="#7f1d1d"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.8}
          distort={0.35}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}

function OrbitRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.PI / 3;
    ref.current.rotation.z = state.clock.elapsedTime * 0.3;
  });

  return (
    <Torus ref={ref} args={[2.8, 0.02, 16, 100]}>
      <meshBasicMaterial color="#ef4444" transparent opacity={0.6} />
    </Torus>
  );
}

function OrbitRing2() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.PI / 4;
    ref.current.rotation.x = state.clock.elapsedTime * 0.25;
  });

  return (
    <Torus ref={ref} args={[3.2, 0.015, 16, 100]}>
      <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
    </Torus>
  );
}

function Particles() {
  const count = 200;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ef4444" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ef4444" />
      <pointLight position={[-10, -5, 5]} intensity={0.5} color="#ffffff" />
      <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={1} color="#ff2d2d" />
      <FloatingOrb />
      <OrbitRing />
      <OrbitRing2 />
      <Particles />
      <Stars radius={50} depth={50} count={1000} factor={2} saturation={0} fade speed={0.5} />
    </Canvas>
  );
}
