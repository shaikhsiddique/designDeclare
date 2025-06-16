import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
function Page7() {

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
          <p className="text-[24px]  font-semibold md:w-[70%] w-full">The Design Declares Newsletter and Toolkit</p>
        </div>
        <div ref={rightRef} className="right md:w-[55%] md:full">
          <img src="./hero.png" alt="" />
          <h4 className="text-2xl w-full opacity-85 pt-14">
          Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.
          </h4>
          <p className="text-lg w-full opacity-85 py-6">
          Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit - just register below.
          </p>
          <div className="email-input flex p-4 border-1 mt-2">
                <h2 className="text-xl">Email:*</h2>
                <input
                  type="text"
                  className="border-none outline-none bg-transparent text-white placeholder-transparent text-xl font-semibold"
                />
          </div>
          <div className="flex items-center pt-6 gap-3 ">
                <div className="box p-6 border-1 border-white"></div>
                <p className="text-[13px] opacity-80 leading-4">I would like to be added to the Design Declares! newsletter and receive further updates.</p>
            </div>
            <p className="underline text-[13px] opacity-80 hover:text-[#FF6340] cursor-pointer py-5">View our Privacy Policy</p>
            <button className="text-xl px-6 py-3 border-0 rounded-full bg-white cursor-pointer hover:bg-[#FF6340] text-black font-semibold my-6">
              Subscribe
            </button>
        </div>
   </>
  )
}

export default Page7