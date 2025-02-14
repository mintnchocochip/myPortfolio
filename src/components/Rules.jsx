import AnimatedText from "./text";
import { Element } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Rules() {
  const container = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    Array.from(container.current.children).forEach((child, index) => {
      tl.from(child, {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1,
        ease: "power3.out",
      }, "-=0.8");
    });
  });

  return (
    <Element name="rules">
      <div className="min-h-screen w-full flex items-center justify-center font-neuebit">
        <div className="w-full p-8 lg:p-12">
          <div className="flex items-center mb-12">
            <AnimatedText
              text="RULES"
              className="font-neuebit uppercase text-6xl md:text-8xl lg:9xl z-50 cursor-pointer w-screen text-left"
              customText='@!#$%^&*'
              time={2}
              preStyle='font-neuebit uppercase text-6xl md:text-8xl lg:9xl text-yellow-500 z-50 cursor-pointer text-left'
            />
          </div>
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-6" ref={container}>
              <div className="p-6 border flex flex-col border-enigmtext-enigma-green hover:border-opacity-75 transition-colors">
                <AnimatedText customText="/\" text="FLAG FORMAT" className="text-enigma-green text-4xl mb-3" />
                <AnimatedText customText="/\" time="1" text="enigma{}" className="text-white text-3xl uppercase" />
              </div>
              <div className="p-6 border flex flex-col border-enigmtext-enigma-green hover:border-opacity-75 transition-colors">
                <AnimatedText customText="/\" text="TEAM FORMATION" className="text-enigma-green text-4xl mb-3" />
                <AnimatedText customText="/\" time="0.2" text="Teams of up to 3 members can be formed on the day of the event" className="text-white opacity-75 text-2xl uppercase" />
              </div>
              <div className="flex flex-col p-6 border border-enigmtext-enigma-green hover:border-opacity-75 transition-colors">
                <AnimatedText customText="/\" text="SCORING" className="text-enigma-green text-4xl mb-3" />
                <AnimatedText customText="/\" time="0.2" text="Points will be dynamic depending on number of solves" className="text-white opacity-75 text-3xl uppercase" />
              </div>
              <div className="p-6 border border-enigma-yellow flex flex-col hover:border-opacity-75 transition-colors">
                <AnimatedText customText="/\" text="IMPORTANT NOTE" className="text-enigma-yellow text-4xl mb-3" />
                <AnimatedText customText="/\" time="0.2" text="Flag sharing is not permitted (Good luck doing that :))" className="text-white opacity-75 text-3xl uppercase" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Rules;