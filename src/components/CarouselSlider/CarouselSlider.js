import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const CarouselSlider = () => {
  return (
    <div className="text-white bg-black rounded-xl">
      <Carousel
        showStatus={false}
        showThumbs={false}
        className="my-5 rounded-xl "
        autoPlay={true}
        interval={400000}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2016/02/26/06/05/lens-1223583_1280.jpg"
            className="rounded-xl"
            alt=""
          />

          <div className="absolute flex flex-col items-center justify-end top-0 w-1/3 h-full bg-black bg-opacity-10 rounded-l-xl">
          
          <p className="hidden md:block md:text-3xl mb-9">
            Get Photography services at competitive prices.<br/>
          </p>
          <p className="md:hidden mb-4 text-xl">PhotoCam</p>
          <Link to='/services'><button className="btn btn-neutral w-20 mb-3">Get started</button></Link>
          
          </div>
        </div>
        <div>
          <img
            src="https://www.artemisiacollege.com/wp-content/uploads/2020/02/photography-banner.jpg"
            className="rounded-xl"
            alt=""
          />
          <p className="absolute left-0 bottom-0 h-full w-1/3 bg-black bg-opacity-10 p-20">
            Legend 2
          </p>
        </div>
        <div>
          <img
            src="https://asset.fujifilm.com/www/us/files/2020-08/b6ac73b4c955d47f78746827f3c8cd32/FUJIFILM-USA-hero-digitalcameras.jpg"
            className="rounded-xl"
            alt=""
          />
          <p className="absolute left-0 bottom-0 h-full w-1/3 bg-black bg-opacity-10 p-20">
            Legend 3
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
