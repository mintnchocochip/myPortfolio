import { useEffect } from 'react';
import './App.css';
import Hamburger from './components/hamburger';
import Footer from './components/footer';
import Join from './components/join';
import Scene from './components/timelinetest';
import ErtdfgcvbBG from './components/enigmatextbg';
import HeroSection from './components/HeroSection';
import Content from "./components/content.jsx";
import Lenis from 'lenis';
import Speaker from './components/Speaker.jsx';

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
      <Content />
      <Scene className="fixed top-0"/>
      
      <Speaker name="Yeyati Prasher" subname="Linux Basics" values={{topic1: "description1", topic2: "description2", topic3: "description3", topic4: "description4", topic5: "description5", topic6: "description6", topic7: "description7", topic8: "description8",}} ></Speaker>
      <Speaker ct="👶" name="Sid Karnam" subname="Binary Exploitation" values={{topic1: "description1", topic2: "description2", topic3: "description3", topic4: "description4", topic5: "description5", topic6: "description6", topic7: "description7", topic8: "description8",}} ></Speaker>
      <Speaker ct="🦜" name="Goutham Rajeev" subname="Web" values={{topic1: "description1", topic2: "description2", topic3: "description3", topic4: "description4", topic5: "description5", topic6: "description6", topic7: "description7", topic8: "description8",}} ></Speaker>
      <Speaker ct="🧏🤫" name="Preetham Pemmasani" subname="OSINT" values={{topic1: "description1", topic2: "description2", topic3: "description3", topic4: "description4", topic5: "description5", topic6: "description6", topic7: "description7", topic8: "description8",}} ></Speaker>
      <Footer />
    </div>
  );
}

export default Home;
