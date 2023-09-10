import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
// import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5mh73tw",
        "template_o676rhi",
        form.current,
        "TODLjfkYRWL7QVT7S"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mohamed_abdul@icloud.com</h5>
            <a href="mailto:mohamed_abdul@icloud.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaPhoneAlt className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>(804) 243-1747</h5>
            <a href="tel:+18042431747">Give me a call</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>(804) 243-1747</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+18042431747"
              target="_blank"
              rel="noreferrer"
            >
              Send me a message
            </a>
          </article>
          {/* <article className="contact__option">
            <BsTwitter />
            <h4>Twitter</h4>
            <h5>@moe_lvz</h5>
            <a href="https://twitter.com/messages/compose?recipient_id=1597002674507075584"
  class="twitter-dm-button" data-screen-name="@moe_lvz">
DM Me!</a>
          </article> */}
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message required"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
