import AnimatedText from './text'
import { Element } from 'react-scroll'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Rules() {
  const container = useRef(null)
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top center',
        toggleActions: 'play none none reverse'
      }
    })

    Array.from(container.current.children).forEach((child, index) => {
      tl.from(
        child,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          duration: 1,
          ease: 'power3.out'
        },
        '-=0.8'
      )
    })
  })

  return (
    <Element name="rules">
      <div className="flex min-h-screen w-full items-center justify-center font-neuebit">
        <div className="w-full p-8 lg:p-12">
          <div className="mb-12 flex items-center">
            <AnimatedText
              text="RULES"
              className="lg:9xl z-50 w-screen cursor-pointer text-left font-neuebit text-6xl uppercase md:text-8xl"
              customText="@!#$%^&*"
              time={2}
              preStyle="font-neuebit uppercase text-6xl md:text-8xl lg:9xl text-yellow-500 z-50 cursor-pointer text-left"
            />
          </div>
          <div className="space-y-12">
            <div className="grid gap-6 md:grid-cols-2" ref={container}>
              <div className="border-enigmtext-enigma-green flex flex-col border p-6 transition-colors hover:border-opacity-75">
                <AnimatedText
                  customText="/\"
                  text="FLAG FORMAT"
                  className="mb-3 text-4xl text-enigma-green"
                />
                <AnimatedText
                  customText="/\"
                  time="1"
                  text="enigma{}"
                  className="text-3xl uppercase text-white"
                />
              </div>
              <div className="border-enigmtext-enigma-green flex flex-col border p-6 transition-colors hover:border-opacity-75">
                <AnimatedText
                  customText="/\"
                  text="TEAM FORMATION"
                  className="mb-3 text-4xl text-enigma-green"
                />
                <AnimatedText
                  customText="/\"
                  time="0.2"
                  text="Teams of up to 3 members can be formed on the day of the event"
                  className="text-2xl uppercase text-white opacity-75"
                />
              </div>
              <div className="border-enigmtext-enigma-green flex flex-col border p-6 transition-colors hover:border-opacity-75">
                <AnimatedText
                  customText="/\"
                  text="SCORING"
                  className="mb-3 text-4xl text-enigma-green"
                />
                <AnimatedText
                  customText="/\"
                  time="0.2"
                  text="Points will be dynamic depending on number of solves"
                  className="text-3xl uppercase text-white opacity-75"
                />
              </div>
              <div className="flex flex-col border border-enigma-yellow p-6 transition-colors hover:border-opacity-75">
                <AnimatedText
                  customText="/\"
                  text="IMPORTANT NOTE"
                  className="mb-3 text-4xl text-enigma-yellow"
                />
                <AnimatedText
                  customText="/\"
                  time="0.2"
                  text="Flag sharing is not permitted (Good luck doing that :))"
                  className="text-3xl uppercase text-white opacity-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Rules
