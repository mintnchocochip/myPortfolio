// import { useState } from 'react';
import './App.css';
import Hamburger from './components/hamburger';
import Footer from './components/footer';
import Join from './components/join';
// import MovableSquare from './components/cursor';
// import BackgroundEffect from './components/background-hover';
import Scene from './components/timelinetest';
// import Timeline from './components/timeline';
// import ErtdfgcvbBG from './components/enigmatextbg';
import AnimatedText from './components/text';
import HeroSection from './components/HeroSection';
import Content from "./components/content.jsx";

function Home() {
  return (
    <div className='py-2'>
      {/* <MovableSquare /> */}
      {/* <div className="h-screen"></div> */}
      {/* <ErtdfgcvbBG className='fixed z-0'/> */}

        <Join className='z-20'/>
        
        <nav className="sticky top-0 flex justify-between w-full px-10 py-5 z-20">
          <div className='text-5xl font-neuebit text-left pt-1'>ENIGMA</div>
          <Hamburger className='fixed right-0'/>
        </nav>

      <HeroSection/>
        <Content />
        {/*<div className="h-screen"></div>*/}
        <div className="relative">
          <AnimatedText text="TIMELINE" className="font-neuebit uppercase text-9xl z-50" customText='グミヸ✨' time={2} preStyle='font-neuebit uppercase text-9xl text-yellow-500 z-50'/>
        </div>
      <Scene className="fixed top-0"/>

        {/* <Timeline className='z-10'/> */}
        <Footer />
        {/* <BackgroundEffect /> */}
    </div>
  );
}

export default Home;
