import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const CameraPath = () => {
  const cameraRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (cameraRef.current) {
      cameraRef.current.position.x = Math.sin(t) * 10;
      cameraRef.current.position.z = Math.cos(t) * 10;
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return (
    <perspectiveCamera ref={cameraRef} position={[0, 0, 10]} />
  );
};

const Scene = () => {
  return (
    <Canvas>
      <CameraPath />
      <ambientLight intensity={0.5} />
      {/* <OrbitControls /> */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
};

const TimelineTest2 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    ScrollTrigger.create({
      trigger: "body",
      start: 'top top',
      end: 'bottom bottom',
      pin: true,
      onEnter: () => {
        gsap.to(cameraRef.current.position, {
          x: 10,
          z: 10,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'center top',
            end: 'bottom bottom',
            scrub: true,
          },
          duration: 5,
        });
      },
    });

    return () => {
      lenis.destroy();
    //   ScrollTrigger.kill();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', width: '100%' }}>
      <Scene />
    </div>
  );
};

export default TimelineTest2;