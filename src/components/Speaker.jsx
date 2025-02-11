import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Speaker({ values, name, subname, image }) {
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
      },
      "-=0.8"
    );
  }, []);

  return (
    <div className="bg-black w-screen flex justify-between items-center px-10 font-neubit">
      <div className="w-full flex flex-nowrap border-t-2 border-white h-[2px] gap-32">
        <div className="w-[40vw] font-neubit mt-3">
          <div className="text-6xl text-white">{name}</div>
          <div className="text-6xl text-white pb-3">{subname}</div>
          <img
            src={image}
            alt=""
            className="w-full h-[60vh] rounded-lg shadow-lg"
          />
        </div>

        <div ref={containerRef} className="w-full text-white font-neubit mt-3">
          {Object.entries(values).map(([key, value], index) => (
            <div key={key}>
              <div className="flex flex-wrap justify-start items-center">
                <div className="overflow-hidden">
                  <div
                    ref={(el) => (rowRefs.current[index] = el)}
                    className="text-sm text-green-500 tracking-wider uppercase"
                  >
                    {key}
                  </div>
                </div>

                <div className="ml-[25vw]">
                  <div className="overflow-hidden">
                    <div
                      ref={(el) => (valueRefs.current[index] = el)}
                      className="text-sm tracking-wider uppercase"
                    >
                      {value}
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
