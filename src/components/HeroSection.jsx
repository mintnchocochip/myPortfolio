import React from 'react';
import AnimatedText from './text';
import { Element } from "react-scroll";

const HeroSection = () => {
  return (
    <>
      <Element name="home">
        <section className='h-[85vh]'>
          <div id="container" className='h-[75vh] flex justify-left items-center p-4 z-50'>
            <div id='hero' className='text-7xl font-neuebit text-center z-50 md:text-8xl flex justify-between w-full gap-6 md:flex-row flex-col md:items-center'>
              <AnimatedText id="txt" text="ENIGMA" className="text-[2em] md:text-[2em]" preStyle='text-black text-[2em] mix mix-blend-difference bg-enigma-green pb-0 md:pb-3 px-3 cursor-cell w-full'/>
              <div className="flex flex-wrap flex-col gap-x-4 p-2 md:p-0 max-w-full md:justify-end align-middle w-full gap-y-0">
                <div className="flex flex-wrap gap-x-8 w-full md:justify-end">
                  <AnimatedText id="txt" text="FIGHT" className="text-[0.6em] md:text-[1em]" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-0 md:pb-3 px-3 cursor-cell'/>
                  <AnimatedText id="txt" text="TO" className="text-[0.6em] md:text-[1em]" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-0 md:pb-3 px-3 cursor-cell'/>
                  <AnimatedText id="txt" text="SURVIVE" className="text-[0.6em] md:text-[1em]" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-0 md:pb-3 px-3 cursor-cell'/>
                </div>
                <div className="flex flex-wrap gap-x-8 w-full md:justify-end">
                  <AnimatedText id="txt" text="ALL'S" className="text-[0.6em] md:text-[1em]" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-0 md:pb-3 px-3 cursor-cell'/>
                  <AnimatedText id="txt" text="FAIR" className="text-[0.6em] md:text-[1em]" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-0 md:pb-3 px-3 cursor-cell'/>
                  <AnimatedText id="txt" text="IN" className="text-[0.6em] md:text-[1em]" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-0 md:pb-3 px-3 cursor-cell'/>
                  <AnimatedText id="txt" text="LOVE" className="text-[0.6em] md:text-[1em]" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-0 md:pb-3 px-3 cursor-cell'/>
                  <AnimatedText id="txt" text="AND" className="text-[0.6em] md:text-[1em]" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-0 md:pb-3 px-3 cursor-cell'/>
                  <AnimatedText id="txt" text="WAR" className="text-[0.6em] md:text-[1em]" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-0 md:pb-3 px-3 cursor-cell'/>
                </div>
                <div className="flex flex-wrap gap-x-8 w-full md:justify-end">
                  <AnimatedText id="txt" text="THIS" className="text-[0.6em] md:text-[1em]" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-0 md:pb-3 px-3 cursor-cell'/>
                  <AnimatedText id="txt" text="IS" className="text-[0.6em] md:text-[1em]" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-0 md:pb-3 px-3 cursor-cell'/>
                  <AnimatedText id="txt" text="WAR" className="text-[0.6em] md:text-[1em]" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-0 md:pb-3 px-3 cursor-cell'/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
}

export default HeroSection;