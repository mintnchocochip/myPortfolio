import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedText from './text'

function Speaker({
  values = {},
  name = 'Ankit Prasad',
  subname = 'Mr. Prasad',
  ct = '',
  customaudio='',
  image
}) {
  const containerRef = useRef(null)
  const rowRefs = useRef([])
  const lineRefs = useRef([])
  const valueRefs = useRef([])

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        toggleActions: 'play reverse play reverse'
      }
    })

    timeline.fromTo(
      lineRefs.current,
      {
        scaleX: 0,
        transformOrigin: 'left'
      },
      {
        scaleX: 1,
        duration: 0.8,
        ease: 'power3.out'
      }
    )

    timeline.fromTo(
      rowRefs.current,
      {
        x: '-100%'
      },
      {
        x: 0,
        duration: 0.3,
        ease: 'power3.out'
      },
      '-=0.8'
    )

    timeline.fromTo(
      valueRefs.current,
      {
        x: '-100%'
      },
      {
        x: 0,
        duration: 0.3,
        ease: 'power3.out'
      },
      '-=0.8'
    )

    timeline.reverse(0.1)
  }, [])

  return (
    <div className="flex w-screen items-center justify-between px-10 pt-10">
      <div className="flex w-full flex-nowrap gap-32 border-t-2 border-white">
        <div className="font-neubit w-[40vw] text-left">
          <AnimatedText
            customText={ct}
            text={name}
            time={1}
            className="text-left font-neuebit text-6xl uppercase text-white"
            audioSrc={customaudio ? customaudio : '/sfx/type.wav'}
          />
          <br />
          <AnimatedText
            customText={ct}
            text={subname}
            time={1}
            className="text-left font-neuebit text-5xl uppercase text-white"
          />
          <img
            src={image}
            alt=""
            width="1024"
            height="1024"
            className="w-90 h-90 rounded-lg mix-blend-screen shadow-lg"
          />
        </div>

        <div ref={containerRef} className="font-neubit mt-3 w-full text-white">
          {Object.entries(values).map(([key, value], index) => (
            <div key={key}>
              <div className="flex flex-wrap items-center justify-start">
                <div className="w-[25vw] overflow-hidden">
                  <div ref={(el) => (rowRefs.current[index] = el)}>
                    <AnimatedText
                      text={key}
                      time={1}
                      className="w-full font-neuebit text-lg uppercase tracking-wider text-green-500"
                    />
                  </div>
                </div>

                <div className="ml-4 flex-grow">
                  <div className="overflow-hidden">
                    <div ref={(el) => (valueRefs.current[index] = el)}>
                      <AnimatedText
                        text={value}
                        time={0.2}
                        className="w-full font-neuebit text-lg uppercase tracking-wider text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full flex-grow py-3">
                  <div
                    ref={(el) => (lineRefs.current[index] = el)}
                    className="h-[1px] w-full bg-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Speaker
