import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedText from './text';
import { Element } from "react-scroll";

function Content() {
    gsap.registerPlugin(ScrollTrigger);
    const scrollRef = useRef(null);
    const wrapperRef = useRef(null);

    useGSAP(() => {
        let scrollWidth = wrapperRef.current.offsetWidth - scrollRef.current.offsetWidth;

        const tween = gsap.to(wrapperRef.current, {
            x: -scrollWidth,
            ease: "sine.inOut"
        })

        ScrollTrigger.create({
            trigger: scrollRef.current,
            start: "top",
            end: "+=" + scrollWidth,
            pin: true,
            animation: tween,
            scrub: 2,
        })
    })

    return (
        <div>
            <Element name="content">
            <div className="text-left px-10 py-7 z-20">
                <AnimatedText
                    text="CONTENT"
                    className="font-neuebit uppercase text-6xl md:text-8xl lg:9xl z-50 cursor-pointer w-screen text-left"
                    customText='@!#$%^&*'
                    time={2}
                    preStyle='font-neuebit uppercase text-6xl md:text-8xl lg:9xl text-yellow-500 z-50 cursor-pointer text-left'
                    />
            </div>
            <div ref={scrollRef} className={"flex overflow-x-hidden"}>
                <div ref={wrapperRef} className={"flex flex-row gap-x-20 h-screen items-center px-10 bg-enigma-green text-black font-neuebit"}>
                    <h2 className={"text-9xl"}>Placeholder</h2>
                    <h2 className={"text-9xl"}>Placeholder</h2>
                    <h2 className={"text-9xl"}>Placeholder</h2>
                    <h2 className={"text-9xl"}>Placeholder</h2>
                    <h2 className={"text-9xl"}>Placeholder</h2>
                    <h2 className={"text-9xl"}>Placeholder</h2>
                    <h2 className={"text-9xl"}>Placeholder</h2>
                </div>
            </div>
            </Element>
        </div>
    )
}

export default Content;