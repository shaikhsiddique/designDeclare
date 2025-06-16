import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Form() {
  
  const [activeCheckbox, setActiveCheckbox] = useState(null);

  
  const [isConsent, setIsConsent] = useState(false);
  const [isNewsletter, setIsNewsletter] = useState(false);

 
  const svgRefBusiness = useRef(null);
  const svgRefIndividual = useRef(null);
  const svgRefInstitution = useRef(null);
  const svgRefTeam = useRef(null);
  const svgRefConsent = useRef(null);
  const svgRefNewsletter = useRef(null);

 
  useGSAP(() => {
    gsap.to(svgRefBusiness.current, {
      scale: activeCheckbox === 'business' ? 2 : 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [activeCheckbox]);

  useGSAP(() => {
    gsap.to(svgRefIndividual.current, {
      scale: activeCheckbox === 'individual' ? 2 : 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [activeCheckbox]);

  useGSAP(() => {
    gsap.to(svgRefInstitution.current, {
      scale: activeCheckbox === 'institution' ? 2 : 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [activeCheckbox]);

  useGSAP(() => {
    gsap.to(svgRefTeam.current, {
      scale: activeCheckbox === 'team' ? 2 : 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [activeCheckbox]);

  useGSAP(() => {
    gsap.to(svgRefConsent.current, {
      scale: isConsent ? 2 : 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [isConsent]);

  useGSAP(() => {
    gsap.to(svgRefNewsletter.current, {
      scale: isNewsletter ? 2 : 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [isNewsletter]);

  return (
    <div className="form w-full border-white border-1 flex flex-col items-start pl-12">
      <h3 className="md:text-[52px] text-3xl text-white font-semibold py-8">
        I am Declaring Emergency
      </h3>

      <div className="md:flex items-center gap-4 opacity-85">
        {/* BUSINESS */}
        <div className="checkbox-input flex items-center gap-2 py-2">
          <div
            onClick={() => setActiveCheckbox('business')}
            className="box w-[50px] h-[50px] border border-white cursor-pointer flex items-center justify-center"
          >
            <svg
              ref={svgRefBusiness}
              width="25"
              height="25"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="1"
              xmlns="http://www.w3.org/2000/svg"
              style={{ scale: 0 }}
            >
              <path strokeLinecap="square" d="M18 6L6 18M6 6l12 12" />
            </svg>
          </div>
          <p className="text-lg">As a business</p>
        </div>

        {/* INDIVIDUAL */}
        <div className="checkbox-input flex items-center gap-2 py-2">
          <div
            onClick={() => setActiveCheckbox('individual')}
            className="box w-[50px] h-[50px] border border-white cursor-pointer flex items-center justify-center"
          >
            <svg
              ref={svgRefIndividual}
              width="25"
              height="25"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="1"
              xmlns="http://www.w3.org/2000/svg"
              style={{ scale: 0 }}
            >
              <path strokeLinecap="square" d="M18 6L6 18M6 6l12 12" />
            </svg>
          </div>
          <p className="text-lg">As an individual</p>
        </div>

        {/* PUBLIC INSTITUTION */}
        <div className="checkbox-input flex items-center gap-2 py-2">
          <div
            onClick={() => setActiveCheckbox('institution')}
            className="box w-[50px] h-[50px] border border-white cursor-pointer flex items-center justify-center"
          >
            <svg
              ref={svgRefInstitution}
              width="25"
              height="25"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="1"
              xmlns="http://www.w3.org/2000/svg"
              style={{ scale: 0 }}
            >
              <path strokeLinecap="square" d="M18 6L6 18M6 6l12 12" />
            </svg>
          </div>
          <p className="text-lg">As a public institution</p>
        </div>
      </div>

      {/* TEAM */}
      <div className="checkbox-input flex items-center gap-2 py-2">
        <div
          onClick={() => setActiveCheckbox('team')}
          className="box w-[50px] h-[50px] border border-white cursor-pointer flex items-center justify-center"
        >
          <svg
            ref={svgRefTeam}
            width="25"
            height="25"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="1"
            xmlns="http://www.w3.org/2000/svg"
            style={{ scale: 0 }}
          >
            <path strokeLinecap="square" d="M18 6L6 18M6 6l12 12" />
          </svg>
        </div>
        <p className="text-lg">As a team or department</p>
      </div>

      {/* Inputs */}
      <div className="form-inputs border-1 border-white w-[94%] opacity-85 my-6">
        <div className="name-input flex p-4 border-b-1">
          <h2 className="text-xl">
            {activeCheckbox === 'team' 
              ? 'Business Name' 
              : activeCheckbox 
                ? activeCheckbox.charAt(0).toUpperCase() + activeCheckbox.slice(1) + ' Name'
                : 'Business Name'
            }:*
          </h2>
          <input
            type="text"
            className="border-none outline-none bg-transparent text-white placeholder-transparent text-xl font-semibold"
          />
        </div>

        {activeCheckbox === 'team' && (
          <div className="name-input flex p-4 border-b-1">
            <h2 className="text-xl">Team Name:*</h2>
            <input
              type="text"
              className="border-none outline-none bg-transparent text-white placeholder-transparent text-xl font-semibold"
            />
          </div>
        )}

        <div className="website-input flex p-4 border-b-1">
          <h2 className="text-xl">Website:*</h2>
          <input
            type="text"
            className="border-none outline-none bg-transparent text-white placeholder-transparent text-xl font-semibold"
          />
        </div>

        <div className="country-input flex items-center p-4 border-b border-white">
          <div className="md:flex md:gap-4">
            <h2 className="text-xl text-white">Country:*</h2>
            <select
              className="appearance-none border-none outline-none bg-transparent md:text-xl text-sm font-semibold md:px-5 p-1"
              defaultValue="UK"
            >
              <option className="text-white bg-black" value="UK">United Kingdom</option>
              <option className="text-white bg-black" value="US">United States</option>
              <option className="text-white bg-black" value="IN">India</option>
              <option className="text-white bg-black" value="CA">Canada</option>
              <option className="text-white bg-black" value="AU">Australia</option>
              <option className="text-white bg-black" value="DE">Germany</option>
              <option className="text-white bg-black" value="FR">France</option>
              <option className="text-white bg-black" value="JP">Japan</option>
              <option className="text-white bg-black" value="CN">China</option>
              <option className="text-white bg-black" value="BR">Brazil</option>
            </select>
          </div>
          <i className="ri-arrow-down-s-line text-xl pl-[365px]"></i>
        </div>

        <div className="discipline-input flex items-center justify-baseline p-4 border-b border-white">
          <div className="md:flex md:gap-4 items-center">
            <h2 className="text-xl text-white">Discipline:*</h2>
            <select
              className="appearance-none border-none outline-none bg-transparent md:text-xl text-sm font-semibold md:px-5 text-white"
              defaultValue=""
            >
              <option value="" disabled hidden></option>
              <option className="text-white bg-black" value="product-design">Product Design</option>
              <option className="text-white bg-black" value="service-design">Service Design</option>
              <option className="text-white bg-black" value="communication-design">Communication Design</option>
              <option className="text-white bg-black" value="digital-design">Digital Design</option>
            </select>
          </div>
          <i className="ri-arrow-down-s-line text-xl pl-72"></i>
        </div>

        <div className="email-input flex p-4 border-b-1">
          <h2 className="text-xl">Email:*</h2>
          <input
            type="text"
            className="border-none outline-none bg-transparent text-white placeholder-transparent text-xl font-semibold"
          />
        </div>

        <div className="email-input flex p-4 border-b border-white">
          <textarea
            placeholder="Why are you declaring? In a sentence or two, tell us why you're joining Design Declares."
            className="resize-none border-none outline-none bg-transparent text-white placeholder:text-lg placeholder:text-white text-xl font-semibold w-full h-[200px] overflow-y-auto"
          ></textarea>
        </div>
      </div>

      {/* CONSENT */}
      <div className="flex items-center pt-6 gap-3">
        <div
          onClick={() => setIsConsent(!isConsent)}
          className="box w-[80px] h-[50px] border border-white cursor-pointer flex items-center justify-center"
        >
          <svg
            ref={svgRefConsent}
            width="25"
            height="25"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="1"
            xmlns="http://www.w3.org/2000/svg"
            style={{ scale: 0 }}
          >
            <path strokeLinecap="square" d="M18 6L6 18M6 6l12 12" />
          </svg>
        </div>
        <p className="text-[13px] opacity-80 leading-4">
          I consent for my data to be used for the purpose of the Declaration,
          and for my name and reason for joining to be used in the promotion of
          the Declaration on this site and across our social channels.
        </p>
      </div>

      {/* NEWSLETTER */}
      <div className="flex items-center py-6 gap-3">
        <div
          onClick={() => setIsNewsletter(!isNewsletter)}
          className="box w-[50px] h-[50px] border border-white cursor-pointer flex items-center justify-center"
        >
          <svg
            ref={svgRefNewsletter}
            width="25"
            height="25"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="1"
            xmlns="http://www.w3.org/2000/svg"
            style={{ scale: 0 }}
          >
            <path strokeLinecap="square" d="M18 6L6 18M6 6l12 12" />
          </svg>
        </div>
        <p className="text-[13px] opacity-80 leading-4">
          I would like to be added to the Design Declares! newsletter and
          receive further updates.
        </p>
      </div>

      <p className="underline text-[13px] opacity-80 hover:text-[#FF6340] cursor-pointer">
        View our Privacy Policy
      </p>

      <button className="text-xl px-6 py-3 border-0 rounded-full bg-white cursor-pointer hover:bg-[#FF6340] text-black font-semibold my-12">
        Declare Emergency Now
      </button>
    </div>
  );
}

export default Form;
