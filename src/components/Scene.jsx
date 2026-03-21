import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Points, PointMaterial } from "@react-three/drei";

function Car() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh>
        <boxGeometry args={[2.5, 0.6, 1]} />
        <meshStandardMaterial
          color="#0077ff"
          emissive="#002244"
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function Robot() {
  return (
    <Float speed={1.5}>
      <mesh position={[3, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
        <meshStandardMaterial color="#888" metalness={1} />
      </mesh>
    </Float>
  );
}

function Particles() {
  const positions = new Float32Array(1000);

  for (let i = 0; i < 1000; i++) {
    positions[i] = (Math.random() - 0.5) * 15;
  }

  return (
    <Points positions={positions}>
      <PointMaterial size={0.03} color="#00ffff" />
    </Points>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#00d4ff" />

      <Particles />
      <Car />
      <Robot />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}