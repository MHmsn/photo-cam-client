import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  useEffect(() => {
    document.title = "Photo Cam";
  }, []);
  return (
    <div>
      <div className="text-white bg-black rounded-xl max-h-fit">
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

      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            className="rounded-lg shadow-2xl"
            alt=""/>
          <div>
            <h1 className="text-2xl md:text-5xl font-bold">Welcome to PhotoCam, my photography services!</h1>
            <p className="py-6">
              I provide different photography services according to my clients needs, Such as Wedding photography, personal photography, and many more!
            </p>
            <a href="#footer"><button className="btn btn-primary">Get Started</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
