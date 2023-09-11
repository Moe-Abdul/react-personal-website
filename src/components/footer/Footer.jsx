import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Moe
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
        <a href="https://discord.com">
          <BsDiscord />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mohamed Abdul Wahab. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
