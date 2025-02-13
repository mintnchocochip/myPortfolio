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
    <div className="w-screen flex justify-between items-center px-10 pt-10">
      <div className="w-full flex flex-nowrap border-t-2 border-white gap-32">
        <div className="w-[40vw] font-neubit text-left">
          <AnimatedText
            customText={ct}
            text={name}
            time={1}
            className="text-6xl text-white font-neuebit text-left uppercase"
          />
          <div className="text-6xl text-white pb-3 font-neuebit text-left">
            {subname}
          </div>
          <img
            src={image}
            alt=""
            width="1024"
            height="1024"
            className="w-90 h-90 rounded-lg shadow-lg"
          />
        </div>

        <div ref={containerRef} className="w-full text-white font-neubit mt-3">
          {Object.entries(values).map(([key, value], index) => (
            <div key={key}>
              <div className="flex flex-wrap justify-start items-center">
                <div className="overflow-hidden">
                  <div ref={(el) => (rowRefs.current[index] = el)}>
                    <AnimatedText
                      text={key}
                      time={1}
                      className="text-lg text-green-500 tracking-wider uppercase font-neuebit w-full"
                    />
                  </div>
                </div>

                <div className="ml-[25vw]">
                  <div className="overflow-hidden">
                    <div ref={(el) => (valueRefs.current[index] = el)}>
                      <AnimatedText
                        text={value}
                        time={1}
                        className="text-white text-lg tracking-wider uppercase font-neuebit w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-grow w-full py-3">
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