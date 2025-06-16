import React, { useRef } from "react";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import "./output.css";
import Page1 from "./components/Page1";
import Navbar from "./components/Navbar";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";
import Page9 from "./components/Page9";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from "gsap";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger)
function App() {
 const navRef = useRef(null);
  useGSAP(()=>{
    gsap.from(navRef.current,{
      y:200,
      opacity:0,
      duration:0.4,
      delay:3,
    })
  })
  useGSAP(() => {
    // Fast scroll for Page9
    gsap.to(".page9", {
      scrollTrigger: {
        trigger: ".page9",
        start: "top bottom",
        end: "bottom top",
        scrub: 1, // Fast scrub
      },
      y: -100, 
      ease: "power2.out",
    });
  
    // Slow scroll for Footer
    gsap.to(".footer", {
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
        end: "bottom top",
        scrub: 5, // Slow scrub (higher value = slower perception)
      },
      y: 20, // Moves slowly
      ease: "power1.out",
    });
  }, []);
  
  return (
    <div className="bg-[#FF6340] w-screen overflow-x-hidden">
      <div ref={navRef} className="fixed w-[200px] bg-white z-50 bottom-4 right-6">
        <Navbar />
      </div>

      <div className="page1 h-screen w-full bg-black flex  relative ">
        <Page1 />
      </div>
      <div className="page2  w-full bg-black md:flex  justify-between  relative text-white  p-6 -mt-1">
        <Page2 />
      </div>
      <div className="page3 h-screen  w-full bg-black md:flex justify-between   relative text-white  p-8 pt-48 -mt-1">
        <Page3 />
      </div>
      <div className="page4 w-full bg-black md:flex justify-between   relative text-white  p-8 pb-48 ">
        <Page4 />
      </div>
      <div className="page5 w-full bg-black md:flex justify-between   relative text-white  p-8  ">
        <Page5 />
      </div>
      <div className="page6 w-full  bg-black md:flex justify-between  relative text-white p-8 pt-48 -mt-1">
        <Page6 />
      </div>

      <div className="page7 w-full  bg-black md:flex justify-between  relative text-white p-8 pt-48">
        <Page7 />
      </div>
      <div className="page8 w-full  bg-black   relative text-white p-8 pt-48">
       <Page8/>
      </div>
      <div className="page9 w-full  bg-black rounded-b-4xl  relative text-white p-8 ">
       <Page9/>
      </div>
      <div className="footer w-full  relative md:p-8 p-4 translate-y-[-300px]">
        <Footer/>
       </div>

    </div>
  );
}

export default App;
