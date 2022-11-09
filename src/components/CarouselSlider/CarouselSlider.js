import React from "react";
import { Carousel } from "react-responsive-carousel";

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

          <p className="absolute left-0 bottom-0 h-full w-1/3 bg-black bg-opacity-10 p-20 rounded-l-xl">
            Legend 1
          </p>
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
