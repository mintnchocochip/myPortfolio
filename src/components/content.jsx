import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import AnimatedText from './text'
import { Element } from 'react-scroll'

function Content() {
  gsap.registerPlugin(ScrollTrigger)
  const scrollRef = useRef(null)
  const wrapperRef = useRef(null)

  useGSAP(() => {
    let scrollWidth = wrapperRef.current.scrollWidth

    const tween = gsap.to(wrapperRef.current, {
      x: -scrollWidth,
      ease: 'sine.inOut'
    })

    ScrollTrigger.create({
      trigger: scrollRef.current,
      start: 'top top',
      end: `+=${scrollWidth}`,
      pin: true,
      animation: tween,
      scrub: 2
    })

    return () => {
      ScrollTrigger.killAll()
    }
  }, [])

  return (
    <div className="relative">
      <Element name="content">
        <div ref={scrollRef} className="relative z-20 flex overflow-x-hidden">
          <div className="z-20 px-10 py-7 text-left">
            <AnimatedText
              text="PREVIOUS EDITIONS"
              className="lg:9xl z-50 w-screen cursor-pointer text-left font-neuebit text-6xl uppercase md:text-8xl"
              customText="@!#$%^&*"
              time={2}
              preStyle="font-neuebit uppercase text-6xl md:text-8xl lg:9xl text-yellow-500 z-50 cursor-pointer text-left"
            />
          </div>
          <div
            ref={wrapperRef}
            className="z-30 flex h-screen flex-row items-center gap-x-2 bg-enigma-green px-10 font-neuebit text-black"
            style={{ minWidth: 'max-content' }}
          >
            <div className="flex h-full w-auto flex-row gap-x-2">
              <h2 className="text-9xl">Participants</h2>
              <img
                src="/images/content/participants.jpg"
                alt="participants for password"
                className="h-full w-auto"
              />
            </div>
            <div className="flex h-full w-auto flex-row gap-x-2">
              <h2 className="text-9xl">Speakers</h2>
              <img
                src="/images/content/speaker.jpeg"
                alt="speaker at password"
                className="h-full w-auto"
              />
              <img
                src="/images/content/speaker_2.jpg"
                alt="speaker 2 at password"
                className="h-full w-auto"
              />
            </div>
            <img
              src="/images/content/kali.jpeg"
              alt="kali at password"
              className="h-full w-auto"
            />
            <h2 className="text-9xl">Placeholder</h2>
            <h2 className="text-9xl">Placeholder</h2>
            <h2 className="text-9xl">Placeholder</h2>
            <h2 className="text-9xl">Placeholder</h2>
            <h2 className="text-9xl">Placeholder</h2>
          </div>
          <img
            src="/images/qr-better.png"
            alt=""
            className="absolute left-1/2 top-1/2 z-10 h-1/2 w-[50vh] -translate-x-1/2 -translate-y-1/2 transform object-cover"
          />
        </div>
      </Element>
    </div>
  )
}

export default Content
