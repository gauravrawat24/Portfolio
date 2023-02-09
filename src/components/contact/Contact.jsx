import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
function Contact() {

  
  
  return (
    <div>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact-container">
          <div className="contact-options">
            <article className="contact-option">
              <MdOutlineEmail className="contact-icons" />
              <h4>Email</h4>
              <h5>rawatji1528@gmail.com</h5>
              <a href="mailto:rawatji1528@gmail.com" target={"_blank"}>
                Send a Message
              </a>
            </article>

            <article className="contact-option">
              <AiOutlineWhatsApp className="contact-icons" />
              <h4>Whatsapp</h4>
              <h5>+91 9917202035</h5>
              <a href="https://web.whatsapp.com" target={"_blank"}>
                Send a Message
              </a>
            </article>
          </div>
          <form action="https://formspree.io/f/xzbqeeqq" method="POST" >
            <input
              type="name"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              {" "}
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
