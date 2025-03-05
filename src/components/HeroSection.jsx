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
  //             preStyle="text-black text-[2em]  bg-enigma-green pt-2 px-3 cursor-cell w-full"
  //           />
  //           <div className="flex w-fit max-w-full flex-col flex-wrap gap-x-4 gap-y-0 p-2 align-middle md:p-0">
  //             <div className="flex w-full flex-wrap justify-start gap-x-8">
  //               <AnimatedText
  //                 text="FIGHT"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black  bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="TO"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black  bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="SURVIVE"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black  bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //             </div>
  //             <div className="flex w-full flex-wrap justify-center gap-x-8">
  //               <AnimatedText
  //                 text="ALL'S"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black  bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="FAIR"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black  bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="IN"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black  bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="LOVE"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black  bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="AND"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black  bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="WAR"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black  bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //             </div>
  //             <div className="flex w-full flex-wrap justify-end gap-x-8">
  //               <AnimatedText
  //                 text="THIS"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black  bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="IS"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black  bg-enigma-green pt-2  px-3 cursor-cell"
  //               />
  //               <AnimatedText
  //                 text="WAR"
  //                 className="text-[0.6em] md:text-[1em]"
  //                 preStyle="text-black  bg-enigma-green pt-2  px-3 cursor-cell"
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
          className="z-50 flex h-screen w-full flex-col justify-center gap-6 overflow-hidden px-10 font-neuebit text-7xl md:text-8xl"
        >
          <div className="flex w-full flex-wrap justify-start gap-x-8">
            <AnimatedText
              text="ENIGMA"
              className="w-full text-[1.5em] md:text-[3em]"
              preStyle="w-full text-[1.5em] md:text-[3em] text-black md:text-[3em]  bg-enigma-green pt-2 cursor-cell w-full"
            />
          </div>
          {window.innerWidth > 768 && (
            <div className="absolute bottom-5 flex flex-row items-center gap-10 mix-blend-screen">
              <div className="flex flex-row items-center">
                <img
                  src="/icons/computer.jpg"
                  alt="computer icon"
                  className="h-[12vh] w-[24vh]"
                />
                <img
                  src="/icons/enigmabar.jpg"
                  alt="computer icon"
                  className="h-[10vh] w-[20vh]"
                />
              </div>
              <div className="place-items-start items-start text-base text-enigma-green mix-blend-difference">
                <p>how do you know you are a robot?</p>
                <p>how do you know you are a program?</p>
                <p>how do you know you are a virus?</p>
                <p>how are you sure of anything at all?</p>
              </div>
            </div>
          )}
          <div className="relative flex w-full max-w-full flex-col flex-wrap py-0 align-middle md:space-y-1">
            <div className="relative z-30 flex w-full flex-wrap justify-end gap-x-4 md:static md:gap-x-8">
              <AnimatedText
                text="FIGHT"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black bg-enigma-green pt-0.5 md:pt-1 px-2 md:px-3 cursor-cell"
              />
              <AnimatedText
                text="TO"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black bg-enigma-green pt-0.5 md:pt-1 px-2 md:px-3 cursor-cell"
              />
              <AnimatedText
                text="SURVIVE"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black bg-enigma-green pt-0.5 md:pt-1 px-2 md:px-3 cursor-cell"
              />
            </div>
            <div className="relative z-30 flex w-full flex-wrap justify-end gap-x-4 md:static md:gap-x-8">
              <AnimatedText
                text="ALL'S"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black bg-enigma-green pt-0.5 md:pt-1 px-2 md:px-3 cursor-cell"
              />
              <AnimatedText
                text="FAIR"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black bg-enigma-green pt-0.5 md:pt-1 px-2 md:px-3 cursor-cell"
              />
              <AnimatedText
                text="IN"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black bg-enigma-green pt-0.5 md:pt-1 px-2 md:px-3 cursor-cell"
              />
              <AnimatedText
                text="LOVE"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black bg-enigma-green pt-0.5 md:pt-1 px-1 md:px-1.25 cursor-cell"
              />
              <AnimatedText
                text="AND"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black bg-enigma-green pt-0.5 md:pt-1 px-1 md:px-1.25 cursor-cell"
              />
              <AnimatedText
                text="WAR"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black bg-enigma-green pt-0.5 md:pt-1 px-1 md:px-1.25 cursor-cell"
              />
            </div>
            <div className="relative z-30 flex w-full flex-wrap justify-end gap-x-4 md:static md:gap-x-8">
              <AnimatedText
                text="THIS"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black bg-enigma-yellow pt-0.5 md:pt-1 px-2 md:px-3 cursor-cell"
                time="0.5"
              />
              <AnimatedText
                text="IS"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black bg-enigma-yellow pt-0.5 md:pt-1 px-2 md:px-3 cursor-cell"
                time="0.75"
              />
              <AnimatedText
                text="WAR"
                className="text-[0.6em] md:text-[1em]"
                preStyle="text-[0.6em] md:text-[1em] text-black bg-enigma-yellow pt-0.5 md:pt-1 px-2 md:px-3 cursor-cell"
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
