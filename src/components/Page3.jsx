
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Page3() {
 
  const leftRef = useRef(null)
  const rightRef = useRef(null)


  useGSAP(()=>{
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

    // Animate right section
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
  },[])

  return (
   <>
   <div ref={leftRef} className="left md:w-[40%] w-full">
        <p className="md:text-3xl text-xl md:px-4 py-2 font-semibold">Donate to D!</p>
       </div>
       <div ref={rightRef} className="right md:w-[55%] w-[90%]">
        <p className="md:text-[26px] text-xl opacity-85">
        Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community working towards change in the creative industry. Your support can go a long way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.
        </p>
        <div className="buttons md:flex  gap-4 pt-12 w-full md:w-auto">
          <button className="text-[22px] font-semibold px-6 py-3 border-transparent rounded-full bg-white hover:bg-[#FF6340] text-black w-full md:w-auto my-2 md:my-0 cursor-pointer">Donate £10</button>
          <button className="text-[22px] font-semibold px-6 py-3 border-transparent rounded-full bg-white hover:bg-[#FF6340] text-black w-full md:w-auto cursor-pointer">Donate £20</button>
          <button className="text-[22px] font-semibold px-6 py-3 border-transparent rounded-full bg-white hover:bg-[#FF6340] text-black w-full md:w-auto my-2 md:my-0 cursor-pointer">Donate £50</button>
        </div>
       </div>
   </>
  )
}

export default Page3