import { useEffect } from 'react';
import './App.css';
import Hamburger from './components/hamburger';
import Footer from './components/footer';
import Join from './components/join';
import Scene from './components/timelinetest';
import ErtdfgcvbBG from './components/enigmatextbg';
import HeroSection from './components/HeroSection';
import Content from "./components/content.jsx";
import Prize from './components/prize.jsx';
import Speakers from './components/Speakers.jsx';
import { Canvas } from '@react-three/fiber'

import Lenis from 'lenis';
function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='py-2'>
      <Join className='z-20'/>
      
      <nav className="sticky top-0 flex justify-between w-full px-10 py-5 z-20 mix-blend-difference">
        <div className='text-5xl font-neuebit text-left pt-1'>ENIGMA</div>
        <Hamburger className='fixed right-0'/>
      </nav>

      <ErtdfgcvbBG className='z-0 top-0'/>
      <HeroSection/>
      {/* <div className="h-screen">
        <Canvas className='w-screen h-screen'>
          <Prize className='w-screen h-screen'/>
        </Canvas>
      </div> */}
      <Content />
      <Scene className="fixed top-0"/>
       <Speakers />
      
      <Footer />
    </div>
  );
}

export default Home;
