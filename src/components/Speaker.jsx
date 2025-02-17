import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedText from "./text";

function Speaker({
  values = {},
  name = "Ankit Prasad",
  subname = "Mr. Prasad",
  ct="",
  image,
}) {
  const containerRef = useRef(null);
  const rowRefs = useRef([]);
  const lineRefs = useRef([]);
  const valueRefs = useRef([]);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });

    timeline.fromTo(
      lineRefs.current,
      {
        scaleX: 0,
        transformOrigin: "left",
      },
      {
        scaleX: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    timeline.fromTo(
      rowRefs.current,
      {
        x: "-100%",
      },
      {
        x: 0,
        duration: 0.3,
        ease: "power3.out",
      },
      "-=0.8"
    );

    timeline.fromTo(
      valueRefs.current,
      {
        x: "-100%",
      },
      {
        x: 0,
        duration: 0.3,
        ease: "power3.out",
      },
      "-=0.8"
    );

    timeline.reverse(0.1);
  }, []);

  return (
    <div className="w-full px-4 md:px-10 pt-6 md:pt-10">
      <div className="w-full flex flex-col md:flex-row md:flex-nowrap border-t-2 border-white md:gap-8 lg:gap-32">
        {/* Left section - Speaker Info */}
        <div className="w-full md:w-[40%] lg:w-[40vw] font-neubit text-left mb-8 md:mb-0">
          <AnimatedText
            customText={ct}
            text={name}
            time={1}
            className="text-3xl md:text-5xl lg:text-6xl text-white font-neuebit text-left uppercase"
          />
          <div className="text-2xl md:text-4xl lg:text-6xl text-white pb-3 font-neuebit text-left">
            {subname}
          </div>
          <img
            src={image}
            alt=""
            className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right section - Values Table */}
        <div ref={containerRef} className="w-full text-white font-neubit mt-3">
          {Object.entries(values).map(([key, value], index) => (
            <div key={key}>
              <div className="flex flex-col md:flex-row md:flex-wrap justify-start items-start md:items-center">
                {/* Key */}
                <div className="overflow-hidden w-full md:w-auto">
                  <div ref={(el) => (rowRefs.current[index] = el)}>
                    <AnimatedText
                      text={key}
                      time={1}
                      className="text-base md:text-lg text-green-500 tracking-wider uppercase font-neuebit w-full"
                    />
                  </div>
                </div>

                {/* Value */}
                <div className="ml-4 md:ml-[15vw] lg:ml-[25vw]">
                  <div className="overflow-hidden">
                    <div ref={(el) => (valueRefs.current[index] = el)}>
                      <AnimatedText
                        text={value}
                        time={1}
                        className="text-base md:text-lg text-white tracking-wider uppercase font-neuebit w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Line */}
                <div className="flex-grow w-full py-2 md:py-3">
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
  );
}

export default Speaker;