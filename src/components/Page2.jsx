
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Page2() {
  const [sec1Visiblity, setSec1Visiblity] = useState(false)
  const [sec2Visiblity, setSec2Visiblity] = useState(false)
  const [sec3Visiblity, setSec3Visiblity] = useState(false)

  const showSec1Ref = useRef(null)
  const showSec2Ref = useRef(null)
  const showSec3Ref = useRef(null)
  const icon1Ref = useRef(null)
  const icon2Ref = useRef(null)
  const icon3Ref = useRef(null)

  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useGSAP(() => {
    // Collapse sections initially
    gsap.set([showSec1Ref.current, showSec2Ref.current, showSec3Ref.current], {
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      overflow: 'hidden'
    });

    // Animate left section
    gsap.from(leftRef.current, {
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 100%",
        once: true,
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate right section
    gsap.from(rightRef.current, {
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top 100%",
        once: true,
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  const handleSectionClick = (sectionNum) => {
    const refs = {
      1: { content: showSec1Ref, icon: icon1Ref, state: sec1Visiblity, setState: setSec1Visiblity },
      2: { content: showSec2Ref, icon: icon2Ref, state: sec2Visiblity, setState: setSec2Visiblity },
      3: { content: showSec3Ref, icon: icon3Ref, state: sec3Visiblity, setState: setSec3Visiblity }
    }

    const { content, icon, state, setState } = refs[sectionNum]
    const newState = !state

    gsap.to(content.current, {
      paddingTop: newState ? 16 : 0,
      paddingBottom: newState ? 16 : 0,
      ease: 'power2.inOut',
      duration: 0.2,
    })

    gsap.to(content.current, {
      height: newState ? 'auto' : 0,
      duration: 0.5,
      ease: 'power2.inOut'
    })

    gsap.to(icon.current, {
      rotation: newState ? 180 : 0,
      duration: 0.5,
      ease: 'power2.inOut'
    })

    setState(newState)
  }

  return (
    <>
      <div ref={leftRef} className="left md:w-[40%] w-full">
        <h3 className="md:text-3xl text-xl font-bold md:p-4 py-2">This is Breakdown</h3>
      </div>
      <div ref={rightRef} className="right md:w-[55%] w-full pr-4">
        <h2 className="md:text-[3.8rem] text-3xl md:tracking-[-0.25rem] md:leading-16">
          The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...
        </h2>

        <div className="section1 py-4 border-t-2 border-b-2 border-white w-full mt-14 pb-10 ">
            <div className="title flex w-full justify-between cursor-pointer" onClick={() => handleSectionClick(1)}>
              <h1 className="text-2xl">The Role of Design</h1>
              <i ref={icon1Ref} className="ri-arrow-down-s-line text-3xl"></i>
            </div>
            <div ref={showSec1Ref} className='flex justify-between w-full opacity-85 text-lg'>
                <p className='w-[45%]'>
                As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.
                </p>
                <p className='w-[45%]'>Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It's not quite magic, but it feels like it.</p>
              </div>
          </div>
          <div className="section2 py-4  border-b-2 border-white w-full  pb-10 ">
            <div className="title flex w-full justify-between cursor-pointer" onClick={() => handleSectionClick(2)}>
              <h1 className="text-2xl">Time for Change</h1>
              <i ref={icon2Ref} className="ri-arrow-down-s-line text-3xl"></i>
            </div>
            <div ref={showSec2Ref} className='flex flex-col justify-center gap-4 w-full opacity-85 text-lg'>
                <div className='flex w-full justify-between'>
                <p className='w-[45%]'>
                Together with our clients, partners and colleagues across the supply chain, we are daring to reimagine the way we create every product, service, campaign and designed solution we put out into the world.
                </p>
                <p className='w-[45%]'>It means introducing principles of sustainability, circularity and - ultimately - regenerative design into our practice to recapture and repurpose resources and materials.</p>
                </div>
                <div className='flex w-full justify-between'>
                <p className='w-[45%]'>
                This means measuring and actively reducing the greenhouse gas emissions and resource use linked to our designs.
                </p>
                <p className='w-[45%]'>And it means acting systemically - seeing the bigger picture and working with others to sharpen design's incredible capacity to influence and accelerate climate repair and justice.</p>
                </div>
              </div>
          </div>
          <div className="section3 py-4   w-full  pb-10 ">
            <div className="title flex w-full justify-between cursor-pointer" onClick={() => handleSectionClick(3)}>
              <h1 className="text-2xl">Act with Urgency</h1>
              <i ref={icon3Ref} className="ri-arrow-down-s-line text-3xl"></i>
            </div>
            <div ref={showSec3Ref} className='flex justify-between w-full opacity-85 text-lg'>
                <p className='w-[45%]'>
                We know all we need to make this a reality. The information, the guidance, the inspiration and solutions are there. What design needs now is action - meaningful steps that can begin to connect what we know to what we do.
                </p>
                <p className='w-[45%]'>This is the most important brief of our lives. Join us as we begin to design a climate-positive future.</p>
              </div>
          </div>

        <button className="cursor-pointer p-2 px-8 rounded-full border-2 border-transparent font-semibold text-2xl mt-6 bg-white text-black hover:bg-[#FF6340] ">
          View our D! Intro Video
        </button>
      </div>
    </>
  )
}

export default Page2
