import React from 'react'
import AnimatedText from './text';

const HeroSection = () => {


  return (
      <>
        <section>
            <div id="container" className='h-[75vh] flex justify-left items-center p-4 z-50'>
            <p id='hero' className='text-7xl font-neuebit text-center z-50 md:text-8xl'>
            <div className="flex flex-wrap gap-x-4 p-2 md:p-0 max-w-full justify-center">
              <AnimatedText text="ENIGMA," preStyle='text-black mix mix-blend-difference bg-enigma-green pb-3 px-3 cursor-cell'/>
              <AnimatedText text="DO" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-3 px-3 cursor-cell'/>
              <AnimatedText text="YOU" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-3 px-3 cursor-cell'/>
              <AnimatedText text="WANT" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-3 px-3 cursor-cell'/>
              <AnimatedText text="TO" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-3 px-3 cursor-cell'/>
              <AnimatedText text="FEEL" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-3 px-3 cursor-cell'/>
              <AnimatedText text="THE" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-3 px-3 cursor-cell'/>
              <AnimatedText text="ULTIMATE" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-3 px-3 cursor-cell'/>
              <AnimatedText text="EVENT" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-3 px-3 cursor-cell'/>
              <AnimatedText text="EVER" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-3 px-3 cursor-cell'/>
              <AnimatedText text="OF" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-3 px-3 cursor-cell'/>
              <AnimatedText text="YOUR" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-3 px-3 cursor-cell'/>
              <AnimatedText text="LIFE?" preStyle='text-black mix mix-blend-difference bg-enigma-green pb-3 px-3 cursor-cell'/>
            </div>
              {/* ENGIMA, DO YOU WANT TO FEEL THE ULTIMATE EVENT EVER OF YOUR LIFE ? */}
            </p>
          </div>
        </section>
      </>
  )
}

export default HeroSection
