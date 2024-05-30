import React from "react";
import Carousel from "./components/carousel/Carousel";
import AboutUs from "./components/AboutUs/AboutUs";
import Video from "./components/Video/Video";
function Home() {
  return (
    <>
      <Carousel />
      <AboutUs />
      <Video/>
    </>
  );
}

export default Home;
