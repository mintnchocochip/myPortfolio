import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
            scrub: 2
        })
    })

    return (
        <div ref={scrollRef} className={"flex"}>
            <div ref={wrapperRef} className={"flex flex-row gap-x-20 h-screen items-center px-10"}>
                <h2 className={"text-9xl"}>Placeholder</h2>
                <h2 className={"text-9xl"}>Placeholder</h2>
                <h2 className={"text-9xl"}>Placeholder</h2>
                <h2 className={"text-9xl"}>Placeholder</h2>
                <h2 className={"text-9xl"}>Placeholder</h2>
                <h2 className={"text-9xl"}>Placeholder</h2>
                <h2 className={"text-9xl"}>Placeholder</h2>
            </div>
        </div>
    )
}

export default Content;