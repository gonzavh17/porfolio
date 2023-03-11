import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-information">
        <p className="contact-title">Contact Me</p>
        <p className="contact-description">Feel free to contact me:</p>
        <p className="contact-mail">nombre123@gmail.com</p>
      </div>
      <div className="curriculum-vitae-container">
        <p className="contact-title">Download my CV</p>
      </div>
    </div>
  );
}

export default Contact;
