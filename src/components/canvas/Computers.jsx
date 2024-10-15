import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';


import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  
  return (
    <mesh>
      {/* Adjusted lighting for better visibility */}
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight intensity={1.5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      {/* Adjusted scale and position for desktop and mobile */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -2, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Media query to handle screen size changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      console.log("Is Mobile: ", event.matches);  // Logs to check if mobile state is correctly set
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);


  /*new*/

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}  
      gl={{ preserveDrawingBuffer: true }}
    >
      /*error*/
      <Suspense fallback={<CanvasLoader />}>
  <OrbitControls
    enableZoom={false}
    maxPolarAngle={Math.PI / 2}
    minPolarAngle={Math.PI / 2}
  />
  {/* <Computers isMobile={isMobile} /> */}
</Suspense>
<Preload all />

      /*error*/
    </Canvas>
  );

  /*end*/
 
};

export default ComputersCanvas;
