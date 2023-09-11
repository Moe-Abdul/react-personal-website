import React, { useEffect, useState } from "react";
import "./nav.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
// import { LiaHandshake } from "react-icons/lia";
import { BiConversation } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  const handleScroll = () => {
    const sections = ["#home", "#about", "#experience", "#contact"];
    let current;

    for (const section of sections) {
      const element = document.querySelector(section);
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.25 && rect.bottom >= 0) {
        current = section;
      }
    }

    if (current) {
      setActiveNav(current);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <a
        href="#home"
        title="Home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <BiHomeAlt2 />
      </a>
      <a
        href="#about"
        title="About"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineInfoCircle />
      </a>
      <a
        href="#experience"
        title="Experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      {/* <a href="#services" title='Services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><LiaHandshake /></a> */}
      <a
        href="#contact"
        title="Contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiConversation />
      </a>
    </nav>
  );
};

export default Nav;
