import React from "react";
import photo0 from "../../../../Static/photographs/0.jpg";
import photo1 from "../../../../Static/photographs/1.jpg";
import photo2 from "../../../../Static/photographs/2.jpg";
import photo3 from "../../../../Static/photographs/3.jpg";

import "./Section2.css";

function Section2() {
  return (
    <section className="section2" id="section2">
      {/* <p className="section2-title">Works:</p> */}
      <div className="works-container">
        <div className="work">
          <div className="work-description-container">
            <p className="work-title">Lorem</p>
            <p className="work-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quos beatae non maiores? Eaque, ad error nihil ea commodi
              inventore at? Veritatis esse molestias quas eum deserunt repellat
              fuga neque!
            </p>
          </div>
          <img className="work-img" src={photo0} alt="" />
        </div>

        <div className="work">
          <div className="work-description-container">
            <p className="work-title">Lorem</p>
            <p className="work-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quos beatae non maiores? Eaque, ad error nihil ea commodi
              inventore at? Veritatis esse molestias quas eum deserunt repellat
              fuga neque!
            </p>
          </div>
          <img className="work-img" src={photo1} alt="" />
        </div>

        <div className="work">
          <div className="work-description-container">
            <p className="work-title">Lorem</p>
            <p className="work-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quos beatae non maiores? Eaque, ad error nihil ea commodi
              inventore at? Veritatis esse molestias quas eum deserunt repellat
              fuga neque!
            </p>
          </div>
          <img className="work-img" src={photo2} alt="" />
        </div>

         <div className="work">
          <div className="work-description-container">
            <p className="work-title">Lorem</p>
            <p className="work-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quos beatae non maiores? Eaque, ad error nihil ea commodi
              inventore at? Veritatis esse molestias quas eum deserunt repellat
              fuga neque!
            </p>
          </div>
          <img className="work-img" src={photo3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Section2;
