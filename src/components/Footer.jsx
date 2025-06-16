import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

function Footer() {
  const [click, setClick] = useState(false);
  const svgRef = useRef();

  useGSAP(() => {
    gsap.to(svgRef.current, {
      scale: click ? 2 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [click]);

  return (
    <>
      <div className="section1 md:flex w-full py-4">
        <div className="title text-black font-bold md:text-[5.3vw] text-[20vw] leading-16">
          <h4 className="uppercase">Design</h4>
          <h4 className="uppercase">Declares</h4>
        </div>

        <div className="text-lg flex md:flex-col gap-1 font-normal md:ml-[20%] my-10 md:my-0 md:w-[10vw] w-full justify-between">
          <div className="md:flex flex-col">
            <p className="cursor-pointer">Contact</p>
            <p className="cursor-pointer">Instagram</p>
          </div>
          <div className="md:flex flex-col">
            <p className="cursor-pointer">Linkedin</p>
            <p className="cursor-pointer">Privacy Policy</p>
          </div>
        </div>

        <div className="md:w-[30%] w-full md:ml-[20%]">
          <h2 className="text-xl font-bold pb-2">
            Sign up to the D! Newsletter
          </h2>
          <div className="email-input flex py-3 px-4 border-1 border-black">
            <h2 className="text-xl">Email:*</h2>
            <input
              type="text"
              className="border-none outline-none bg-transparent text-white placeholder-transparent text-xl font-semibold"
            />
          </div>
          <div className="md:flex w-full items-center justify-between mt-4">
            <div className="left w-[63%]">
              <div className="flex items-center gap-3">
                <div
                  onClick={() => setClick(!click)}
                  className="box w-[100px] h-[50px] border border-black cursor-pointer flex items-center justify-center "
                >
                  <svg
                    ref={svgRef}
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform rotate-[45deg] "
                  >
                    <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>

                <p className="text-[12px] leading-4 text-black">
                  I would like to be added to the Design Declares! newsletter
                  and receive further updates
                </p>
              </div>
              <p className="underline text-[13px] cursor-pointer py-2">
                View our Privacy Policy
              </p>
            </div>
            <div className="right">
              <button className="text-xl w-full md:w-auto px-8 py-3 border-0 rounded-full bg-white cursor-pointer hover:bg-black hover:text-white text-black font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 md:w-[65%] w-full text-[13px] font-normal md:ml-[35%]">
        <p>
          This website has been built following low-carbon principles of web
          development and hosted using serverless computing, by only allocating
          energy when needed and on demand. Learn more about our carbon
          footprint.
        </p>
        <p className="md:pt-12 py-4 font-medium">
          Empowered by <span className="underline">Driftime®</span>
        </p>
      </div>
      <img
        className="absolute bottom-5 right-6 bg-white"
        src="./logo_48.png"
        alt=""
      />
    </>
  );
}

export default Footer;
