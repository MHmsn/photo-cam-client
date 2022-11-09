import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import HomeHero from "../HomeHero/HomeHero";
import HomeServices from "../HomeServices/HomeServices";
import HomeSubscribe from "../HomeSubscribe/HomeSubscribe";

const Home = () => {
  useEffect(() => {
    document.title = "Photo Cam";
  }, []);

  
  return (
    <div>
      <CarouselSlider/>
      <HomeHero/>
      <HomeServices/>
      <HomeSubscribe/>
    </div>
  );
};

export default Home;
