import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import AnimatedText from "./text";
import { Link as ScrollLink } from "react-scroll";
import { useGSAP } from "@gsap/react";

const NavLink = ({ title, link }) => (
  <ScrollLink
    to={link}
    smooth={true}
    duration={500}
    className="hover:p-2 text-2xl text-white hover:bg-enigma-green hover:text-black cursor-pointer"
  >
    <AnimatedText
      className="hover:p-2 text-2xl text-white hover:bg-enigma-green hover:text-black"
      text={title}
      customText="▂▄▆█"
    />
  </ScrollLink>
);

export default function CustomHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        width: "100%",
        duration: 0.5,
        ease: "back.out(1.6)",
      });
    } else {
      gsap.to(menuRef.current, {
        width: "auto",
        duration: 0.5,
        ease: "back.out(1.6)",
      });
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between w-full items-center font-neuebit text-3xl px-16 py-8">
      <span>
        <Link to="/" onClick={handleLinkClick} className="text-3xl">
          ENIGMA
        </Link>
      </span>
      <div className="hidden sm:flex">
        <ul className="flex flex-1 justify-between gap-11 uppercase">
          <li>
            <Link to="/prizes" onClick={handleLinkClick}>
              <AnimatedText
                className="hover:p-2 text-2xl text-white hover:bg-enigma-green hover:text-black"
                text="Leaderboard"
                customText="▂▄▆█"
              />
            </Link>
          </li>
          <li>
            <Link to="/rules" onClick={handleLinkClick}>
              <AnimatedText
                className="hover:p-2 text-2xl text-white hover:bg-enigma-green hover:text-black"
                text="Challenges"
                customText="▂▄▆█"
              />
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              <AnimatedText
                text="Team"
                className="hover:p-2 text-2xl text-white hover:bg-enigma-green hover:text-black"
                customText="▂▄▆█"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div
        ref={menuRef}
        className={`sm:hidden flex flex-col justify-end text-black bg-enigma-green font-neuebit uppercase ${isOpen ? "w-full" : "w-auto"}`}
      >
        <div
          className="hamburger-icon cursor-pointer text-2xl select-none text-right p-4 flex items-center justify-end"
          onClick={toggleMenu}
        >
          <AnimatedText text="MENU" className="mr-2" />
          <span className="text-xl mt-1">&#9776;</span> {/* Hamburger icon */}
        </div>
        {isOpen && (
          <div className="menu text-right text-3xl p-4">
            <ul>
              <li>
                <Link to="/rules" onClick={handleLinkClick}>
                  <AnimatedText
                    className="text-black hover:bg-white hover:text-black"
                    text="Rules"
                  />
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick}>
                  <AnimatedText
                    text="About"
                    className="text-black hover:bg-white hover:text-black"
                  />
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick}>
                  <AnimatedText
                    text="About"
                    className="text-black hover:bg-white hover:text-black"
                  />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
