import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
 

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true); // Mount first
      setTimeout(() => {
        const tl = gsap.timeline();
        tl.fromTo(
          navRef.current,
          { scaleX: 0 },
          {
            scaleX: 10,
            duration: 0.2,
            transformOrigin: "left",
            ease: "power2.out",
          }
        )
          .to(navRef.current, {
            scaleX: 1,
            duration: 0.2,
            ease: "power2.out",
          })
          .fromTo(
            navRef.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              duration: 0.25,
              transformOrigin: "top",
              ease: "power2.out",
            }
          );
      }, 10);
    } else {
      const tl = gsap.timeline();
      tl.to(navRef.current, {
        scaleY: 0,
        duration: 0.25,
        transformOrigin: "top",
        ease: "power2.in",
      })
        .to(navRef.current, {
          scaleX: 0,
          duration: 0.25,
          transformOrigin: "left",
          ease: "power2.in",
        })
        .add(() => {
          setIsOpen(false); // Unmount
        });
    }
  };
  

  const links = [
    ["ri-home-line", "Home"],
    ["ri-information-line", "About"],
    ["ri-mail-line", "Contact"],
    ["ri-global-line", "Choose Global Chapter"],
  ];

  return (
    <>
      {/* Top menu bar */}
      <div className="flex w-[200px] border-1 border-black">
        <p className="text-2xl  border-black w-[80%] p-2">Menu</p>
        <i
          onClick={toggleMenu}
          className={`${
            isOpen ? "ri-close-line" : "ri-add-line"
          } border-l border-black w-[20%] flex items-center justify-center text-4xl font-light cursor-pointer`}
        ></i>
      </div>

      {/* Conditional links container */}
      {isOpen && (
        <div 
        ref={navRef}
          className="links p-2 origin-top-left scale-0 overflow-hidden"
        >
          {links.map(([icon, label], i) => (
            <div
              key={i}
              className="home flex items-center gap-2 text-2xl opacity-0"
              style={{ transform: "scale(0)" }}
              ref={(el) => {
                if (el) {
                  gsap.fromTo(
                    el,
                    { scale: 0, opacity: 0 },
                    {
                      scale: 1,
                      opacity: 1,
                      duration: 0.3,
                      delay: 0.5 + i * 0.1,
                      ease: "back.out(1.7)",
                    }
                  );
                }
              }}
            >
              <i className={icon}></i>
              <p className="hover:underline cursor-pointer">{label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Bottom fixed text */}
      <div className="flex items-center p-2 border-1 border-t-0">
        <p className="text-2xl">Declare Now</p>
      </div>
    </>
  );
}

export default Navbar;
