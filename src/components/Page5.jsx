import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Form from './Form'

gsap.registerPlugin(ScrollTrigger);

function Page5() {

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
          <p className="md:text-2xl text-xl font-semibold ">Declare Emergency Now</p>
        </div>
        <div ref={rightRef} className="right md:w-[55%] w-full">
          <p className="md:text-[24px] text-xl my-6 md:my-0  md:leading-8 opacity-85 w-[92%] pb-22">
            Design Declares is open to individuals and institutions working in
            industrial, digital, graphic, communication and service design. To
            declare here, you must be a company with an office in the UK
            employing at least one full-time designer. We also welcome
            declarations from practising freelance designers who are registered
            as self-employed in the UK, and global supporters from other
            countries. All declarations will be named and published on this
            site.
          </p>
           <Form/>
        </div>
    </>
  )
}

export default Page5