import React from "react";
import Carousel from "./components/carousel/Carousel";
import AboutUs from "./components/AboutUs/AboutUs";
import Video from "./components/Video/Video";
import "./Home.style.css";
function Home() {
  return (
    <div className="wrapper-home">
      <div>
        <Carousel />
      </div>
      <div>
        <div className="row wrapper-home-aboutus">
          <div className="col-lg-6 col-md-12 col-1-aboutus ">
            <img
              src="https://res.cloudinary.com/rawwshak/image/upload/v1717170211/Sin_ti%CC%81tulo_5_l5rin2.png"
              alt="Logo"
              className="responsive-image"
            />
          </div>
      
          <div className="col-lg-6  col-md-12">
            <AboutUs />
          </div>
        </div>
        <div className="row">
          <div className="col"><Video/></div>
        </div>
        <div className="row">
          <div className="col">comentarios</div>
        </div>
        <div className="row">
          <div className="col">footer</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
