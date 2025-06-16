import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Page1() {
  const svgRef = useRef(null);
  const char1Ref = useRef(null);
  const char2Ref = useRef(null);
  const designRef = useRef(null);
  const declaresRef = useRef(null);
  const ukRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial states
    gsap.set(svgRef.current, { opacity: 0, y: 150 });
    gsap.set([char1Ref.current, char2Ref.current], { opacity: 0 });
    gsap.set([designRef.current, declaresRef.current, ukRef.current], {
      opacity: 0,
      y: 20,
    });
    // gsap.set(textRef.current,{ opacity:0,y:100})

    // Animation sequence
    tl.to(svgRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    })
    .to(char1Ref.current, {
      opacity: 1,
      duration: 0.3,
    })
    .to(char2Ref.current, {
      opacity: 1,
      duration: 0.3,
    })
    .to({}, { duration: 0.5 }) // Pause
    .to(svgRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.3,
      onComplete: () => {
        const element = document.getElementById("svgRef");
        if (element) {
          element.remove();
        }
      }
    })
    .to(designRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "back.out(1.7)",
    })
    .to(declaresRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "back.out(1.7)",
    })
    .to(ukRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "back.out(1.7)",
    }).from(textRef.current,{
      opacity:0,
      y:100,
      duration:0.3
    })
  }, []);

  return (
    <>
      <div className="left flex flex-col md:text-[14.5vw] text-[22.5vw] text-white uppercase">
        <div
          id="svgRef"
          ref={svgRef}
          className="absolute left-[2.5%] top-[7%] z-[1]"
          style={{ height: "100px" }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 44 59"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="pl-0.5 sm:pl-1 h-auto w-14 sm:w-24 xl:w-32"
            role="img"
            aria-label="Design Declares!"
            style={{ display: "block" }}
          >
            <path
              ref={char1Ref}
              d="M15.052,59l-15.052,0l-0,-57.705l15.052,0c8.096,0 11.705,3.925 11.705,12.722l0,31.809c0,9.112 -3.609,13.174 -11.705,13.174Zm-3.574,-10.75l1.293,-0c1.61,-0 2.284,-0.453 2.284,-3.26l0,-30.29c0,-2.874 -0.895,-3.107 -1.978,-3.107l-1.599,-0l0,36.657Z"
              style={{ display: "block" }}
            />
            <path
              ref={char2Ref}
              d="M43.953,6.9l-6.44,36.806l-6.384,-36.813c-0.285,-3.719 2.668,-6.893 6.412,-6.893c3.748,0 6.704,3.181 6.412,6.904l0,-0.004Zm0.047,44.959c0,3.553 -2.911,6.433 -6.501,6.433c-3.59,-0 -6.501,-2.88 -6.501,-6.433c-0,-3.553 2.911,-6.434 6.501,-6.434c3.59,0 6.501,2.881 6.501,6.434Z"
              style={{ display: "block" }}
            />
          </svg>
        </div>

        <h3 ref={designRef} className="absolute md:top-[-7%] left-[2.5%]">
          Design
        </h3>
        <h3 ref={declaresRef} className="absolute md:top-[17.5%] top-[9%] left-[2.5%]">
          Declares
        </h3>
        <h3
          ref={ukRef}
          className="absolute md:top-[42.5%] top-[18%] left-[2.5%] text-[#FF6340]"
        >
          UK
        </h3>
      </div>

      <div className="right absolute md:right-1 md:top-[4%] top-[35%] overflow-hidden flex justify-center w-full md:w-auto">
        <p ref={textRef} className="text-white md:text-xl text-lg opacity-70 md:w-[35vw] w-[93vw] leading-6">
          Design Declares is a growing group of designers, design studios,
          agencies and institutions here to declare a climate and ecological
          emergency. As part of the global declaration movement, we commit to
          harnessing the tools of our industry to reimagine, rebuild and heal
          our world.
        </p>
      </div>
    </>
  );
}

export default Page1;
