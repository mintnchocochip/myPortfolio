import React from 'react'
import AnimatedText from './text'
import { Element } from 'react-scroll'

const HeroSection = () => {
  //   return (
  //     <>
  //       <Element name="home">
  //         <div
  //           id="hero"
  //           className="z-50 flex h-screen w-full flex-col justify-center gap-6 overflow-hidden text-center font-neuebit text-7xl md:items-center md:text-8xl"
  //         >
  //           <AnimatedText
  //             text="ENIGMA"
  //             className="text-[2em] md:text-[2em]"
  //             preStyle="text-black text-[2em] mix mix-blend-difference bg-enigma-green pt-2 px-3 cursor-cell w-full"
  //           />
  //           <div className="flex w-fit max-w-full flex-col flex-wrap gap-x-4 gap-y-0 p-2 align-middle md:p-0">
  //             <div className="flex w-full flex-wrap justify-start gap-x-8">
  //               <AnimatedText
  //                 text="FIGHT"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="TO"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="SURVIVE"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //             </div>
  //             <div className="flex w-full flex-wrap justify-center gap-x-8">
  //               <AnimatedText
  //                 text="ALL'S"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="FAIR"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="IN"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="LOVE"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="AND"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="WAR"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //             </div>
  //             <div className="flex w-full flex-wrap justify-end gap-x-8">
  //               <AnimatedText
  //                 text="THIS"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="IS"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="WAR"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </Element>
  //     </>
  //   )
  // }

  return (
    <>
      <Element name="home">
        <div
          id="hero"
          className="z-50 flex h-screen w-full flex-col justify-center gap-6 overflow-hidden px-10 font-neuebit text-7xl mix-blend-difference md:text-8xl"
        >
          <div className="flex w-full flex-wrap justify-start gap-x-8">
            <AnimatedText
              text="ENIGMA"
              className="w-full text-[1.5em] md:text-[3em]"
              preStyle="w-full text-[1.5em] md:text-[3em] text-black md:text-[3em] mix mix-blend-difference bg-enigma-green pt-2 cursor-cell w-full"
            />
          </div>
          <div className="flex w-full max-w-full flex-col flex-wrap py-0 align-middle">
            <div className="flex w-full flex-wrap justify-end gap-x-8">
              <AnimatedText
                text="FIGHT"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
              />
              <AnimatedText
                text="TO"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
              />
              <AnimatedText
                text="SURVIVE"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
              />
            </div>
            <div className="flex w-full flex-wrap justify-end gap-x-8">
              <AnimatedText
                text="ALL'S"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
              />
              <AnimatedText
                text="FAIR"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
              />
              <AnimatedText
                text="IN"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black mix mix-blend-difference bg-enigma-green pt-2  px-3 cursor-cell"
              />
              <AnimatedText
                text="LOVE"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black mix mix-blend-difference bg-enigma-green pt-2  px-1.25 cursor-cell"
              />
              <AnimatedText
                text="AND"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black mix mix-blend-difference bg-enigma-green pt-2  px-1.25 cursor-cell"
              />
              <AnimatedText
                text="WAR"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black mix mix-blend-difference bg-enigma-green pt-2  px-1.25 cursor-cell"
              />
            </div>
            <div className="flex w-full flex-wrap justify-end gap-x-8">
              <AnimatedText
                text="THIS"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black mix mix-blend-difference bg-enigma-yellow pt-2  px-3 cursor-cell"
                time="0.5"
              />
              <AnimatedText
                text="IS"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black mix mix-blend-difference bg-enigma-yellow pt-2  px-3 cursor-cell"
                time="0.75"
              />
              <AnimatedText
                text="WAR"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black mix mix-blend-difference bg-enigma-yellow pt-2  px-3 cursor-cell"
                time="5"
              />
            </div>
          </div>
        </div>
      </Element>
    </>
  )
}
export default HeroSection
