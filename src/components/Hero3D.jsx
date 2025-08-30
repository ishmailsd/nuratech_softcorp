import { Canvas } from '@react-three/fiber';
import Sandman from '../assets/models/Sandman';

const Hero3D = () => {
  return (
    <div className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
      <Canvas 
        camera={{ 
          position: [0, 40, 65], 
          fov: 50,
          near: 0.1,
          far: 10000
        }}
      >
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={1} color={0xffd700} />
        <Sandman />
      </Canvas>
    </div>
  );
};

export default Hero3D;