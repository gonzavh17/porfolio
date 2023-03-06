import React from "react";
import "./Section1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import minimalist2 from "../../../../assets/img/minimalist2.webp";
import minimalist1 from "../../../../assets/img/minimalist1.jpg";

function Section1() {
  return (
    <section className="section1">
      <div className="about-me">
        <div className="description-container">
          <p className="section-title">¿Who I am?</p>
          <p className="section-description">
            Hello I am Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Qui, iusto nobis quibusdam, cumque dolores vel fugiat, voluptate
            asperiores veniam reprehenderit placeat voluptatibus pariatur quas
            laudantium voluptatum! Reiciendis expedita optio voluptatem?
          </p>
        </div>

        <div className="img-container">
          <img className="section-img" src={minimalist1} alt="" />
        </div>
      </div>
      <div className="section1-container">
        <div className="description-container">
          <p className="section-title">¿What lenguages I know?</p>
          <div className="lenguage-container">
            <a
              href="https://www.coderhouse.com/certificados/62b11847d1ed6800241e96c5"
              className="lenguage-icon"
            >
              <FontAwesomeIcon icon={faHtml5} className="icon" />
              <p className="lenguage-name">Html5</p>
            </a>
            <a href="" className="lenguage-icon">
              <FontAwesomeIcon icon={faCss3} className="icon" />
              <p className="lenguage-name">Css3</p>
            </a>
            <a href="" className="lenguage-icon">
              <FontAwesomeIcon icon={faJs} className="icon" />
              <p className="lenguage-name">JavaScript</p>
            </a>
            <a href="" className="lenguage-icon">
              <FontAwesomeIcon icon={faReact} className="icon" />
              <p className="lenguage-name">React</p>
            </a>
          </div>
        </div>
        <div className="img2-container">
          <img src={minimalist2} alt="" className="section-img2" />
        </div>
      </div>
    </section>
  );
}

export default Section1;
