import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { SplitText } from 'gsap-trial/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

const HeroSection = () => {
    useGSAP(() => {
        gsap.registerPlugin(SplitText);
        gsap.registerPlugin(ScrollTrigger)
        let split = new SplitText("#hero", { type: "words" });
        gsap.from(split.words, {
            //scrollTrigger :{trigger:"#container",
            //    start: "top center" ,
            //},
            scale : 4 ,
            x : 100,
            opacity : 0 ,
            duration : 0.2 ,
            stagger: 0.1
        })
        // if you want to have get reverse effect on any click event
        //const button = document.querySelector('#AnyID'); // set the required ID
        //button.addEventListener('click' , () => {
        //    showupTimeline.timeScale(2);
        //    showupTimeline.reverse();
        //})
    })

  return (
      <>
      <section>
        <div id="container" className='min-h-1 justify-center p-1 flex '>
      <p id='hero' className='text-8xl font-neuebit max-w-6xl justify-center items-center'> ENGIMA, DO YOU WANT TO FEEL THE ULTIMATE EVENT EVER OF YOUR LIFE ? </p>
      </div>
      </section>
      </>
  )
}

export default HeroSection
