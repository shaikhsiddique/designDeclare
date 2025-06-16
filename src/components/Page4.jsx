import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Data from './Data';

gsap.registerPlugin(ScrollTrigger);

function Page4() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const wrapperRef = useRef(null); // Wrap both left and right

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Pin the left section when right section scrolls
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftRef.current,
        pinSpacing: false,
        scrub: false,
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });

    // Fade-in animations
    gsap.from(leftRef.current, {
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 80%",
        once: true,
      },
      y: 130,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(rightRef.current, {
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top 80%",
        once: true,
      },
      y: 130,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <div ref={wrapperRef} className="flex flex-col md:flex-row justify-between items-start w-full">
        <div ref={leftRef} className="left md:w-[40%] w-full">
          <p className="md:text-3xl text-xl md:px-4 font-semibold">8 Acts of Emergency</p>
        </div>

        <div ref={rightRef} className="right md:w-[55%] w-full my-6 md:my-6">
          <p className="text-[24px] opacity-85 leading-8">
            What does it take to Declare? It’s accepting we are in an emergency of climate and nature,
            and a commitment to do something about it. Here are eight places to start:
          </p>
          <Data />
        </div>
      </div>
    </>
  );
}

export default Page4;
