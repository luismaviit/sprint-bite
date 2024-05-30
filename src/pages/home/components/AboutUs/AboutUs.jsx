import React from "react";
import "./AboutUs.style.css";
function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="row">
        <div className="col">Column 1</div>
        <div className="col">
          <h2 className="tittle-about-us">Acerca de nosotros</h2>
          <h1>
            Best Burger <br />
            in your City
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
