import React, { useRef} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
function Page6() {

  const leftRef = useRef(null)
  const rightRef1 = useRef(null)
  const rightRef2 = useRef(null)
  const rightRef3 = useRef(null)


  useGSAP(()=>{
    gsap.from(leftRef.current, {
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 60%",
        once: true,
      },
      y: 130,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate right section
    gsap.from(rightRef1.current, {
      scrollTrigger: {
        trigger: rightRef1.current,
        start: "top 50%",
      },
      delay:0.5,
      y: 200,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
    gsap.from(rightRef2.current, {
      scrollTrigger: {
        trigger: rightRef1.current,
        start: "top 50%",
      },
      delay:0.8,
      y: 200,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
    gsap.from(rightRef3.current, {
      scrollTrigger: {
        trigger: rightRef1.current,
        start: "top 60%",
      },
      delay:1.4,
      y: 200,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  },[])

  return (
   <>
     <div ref={leftRef} className="left md:w-[40%] w-full py-4 md:py-0">
        <p className="md:text-2xl text-xl font-semibold">Latest</p>
       </div>
       <div className="right md:w-[55%] w-full">
        <div ref={rightRef1} className="section1 md:flex w-full items-center justify-between">
          <div className="part1 md:w-[50%] w-full">
            <div className="flex gap-3 items-center">
              <p className="bg-[#272727] px-3 py-0.5 rounded-full text-sm">Events</p>
              <p className="bg-[#272727] px-3 py-0.5 rounded-full text-sm">D! UK</p>
              <p className="text-sm">24.04.2025, 03 PM:30</p>
            </div>
            <h3 className="text-3xl w-[100%] leading-9 tracking-wider py-4 font-medium ">
            SD4P Collective: How can Service Design drive meaningful sustainability impact
            </h3>
          </div>
          <div  className="part2 opacity-85 w-[42%]">
            <h4 className="text-lg ">
            Recap: SD4P Collective working session – 28th March 2025
            </h4>
            <h5 className="text-lg hover:text-[#FF6340] underline cursor-pointer py-6">Read Story</h5>
          </div>
        </div>
        <div  ref={rightRef2}className="section2 md:flex w-full items-center justify-between pt-12">
          <div className="part1 md:w-[50%] w-full">
            <div className="flex gap-3 items-center">
              <p className="bg-[#272727] px-3 py-0.5 rounded-full text-sm">Events</p>
              <p className="bg-[#272727] px-3 py-0.5 rounded-full text-sm">D! UK</p>
              <p className="text-sm">06.12.2024, 02 PM:30</p>
            </div>
            <h3 className="text-3xl font-medium w-[100%] leading-9 tracking-wider py-4">
            Designing Tomorrow: Speculative Thinking Shapes Our Present
            </h3>
          </div>
          <div className="part2 opacity-85 w-[42%]">
            <h4 className="text-lg ">
            Design Declares' November Event Challenges Perspectives on Sustainability and Innovation
            </h4>
            <h5 className="text-lg hover:text-[#FF6340] underline cursor-pointer py-6">Read Story</h5>
          </div>
        </div>
        <button ref={rightRef3} className="text-xl px-6 py-3 border-0 rounded-full bg-white cursor-pointer hover:bg-[#FF6340] text-black font-semibold my-12">
              See all the latest
        </button>
       </div>
   </>
  )
}

export default Page6