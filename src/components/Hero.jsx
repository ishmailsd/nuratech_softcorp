import React from 'react';
//import ThreeDDBackground from '../assets/models/3DDBackground';
import ThreeDBackground from './3DBackground';
//import CubeModel from './CubeModel';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';

const Hero = () => {
  return (
    <div className="relative h-[80vh] w-[100vw] mt-12">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 25], fov: 70 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader/>}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={5} />
            <directionalLight position={[10, 10, 10]} intensity={4} />
            <pointLight position={[-10, -10, -10]} intensity={2.5} />
            <pointLight position={[0, 0, 10]} intensity={2} />
            <ThreeDBackground scale={5} position={[0, 0, 0]} rotation={[0, 150, 0]} />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </div>

      {/* Content Overlay */}
      <div className="relative width-full z-10 h-full flex items-center justify-center">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 mb-8">
            <span className="text-white-900 text-sm font-medium">360 Softcorp & Nura Tech Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Deploying Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              {" "}Vision 
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with cutting-edge solutions and seamless integration. 
            Experience the future of digital transformation.
          </p>

          
        </div>
      </div>
    </div>
  );
};

export default Hero;
