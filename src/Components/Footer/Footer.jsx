import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <span className="footer-icon">
        <FontAwesomeIcon icon={faGithub} />
        <p className="footer-icon-description">Follow Me</p>
      </span>
      <span className="footer-icon">
        <FontAwesomeIcon icon={faEnvelope} />
        <p className="footer-icon-description">Email Me</p>
      </span>
      <span className="footer-icon">
        <FontAwesomeIcon icon={faLinkedin} />
        <p className="footer-icon-description">Contact Me</p>
      </span>
      <span className="footer-icon">
        <FontAwesomeIcon icon={faDownload} />
        <p className="footer-icon-description">Downlaod my CV</p>
      </span>
    </div>
  );
}

export default Footer;
