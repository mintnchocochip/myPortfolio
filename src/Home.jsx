import { useEffect, useState } from 'react';
import './App.css';
import Hamburger from './components/hamburger';
import Footer from './components/footer';
import Join from './components/join';
import Scene from './components/timelinetest';
import ErtdfgcvbBG from './components/enigmatextbg';
import HeroSection from './components/HeroSection';
import Content from "./components/content.jsx";
import Lenis from 'lenis';
import Preloader from './components/PreLoader.jsx';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(!sessionStorage.getItem('preloaderShown'));

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

    window.addEventListener('load', () => {
      setIsLoaded(true);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='py-2'>
      <Preloader isLoaded={isLoaded} />
      <Join className='z-20'/>
      
      <nav className="sticky top-0 flex justify-between w-full px-10 py-5 z-20 mix-blend-difference">
        <div className='text-5xl font-neuebit text-left pt-1'>ENIGMA</div>
        <Hamburger className='fixed right-0'/>
      </nav>

      <ErtdfgcvbBG className='z-0 top-0'/>
      <HeroSection/>
      <Content />

      <Scene className="fixed top-0"/>
      <Footer />
    </div>
  );
}

export default Home;