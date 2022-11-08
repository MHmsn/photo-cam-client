import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    return (
        <div>
             <Carousel showStatus={false} showThumbs={false} className='my-5 rounded-xl ' autoPlay={true} interval={400000} infiniteLoop={true}>
                <div>
                    <img src="https://www.cpreney.org.uk/wp-content/uploads/sites/12/2021/02/Untitled-design-5-1110x460.png" className='rounded-xl h-full' alt=''/>
                    <div></div>
                    <p className="absolute left-0 bottom-0 h-full w-1/3 bg-black bg-opacity-10 p-20">Legend 1</p>
                </div>
                <div>
                    <img src="https://www.artemisiacollege.com/wp-content/uploads/2020/02/photography-banner.jpg" className='rounded-xl' alt=''/>
                    <p className="absolute left-0 bottom-0 h-full w-1/3 bg-black bg-opacity-10 p-20">Legend 2</p>
                </div>
                <div>
                    <img src="https://asset.fujifilm.com/www/us/files/2020-08/b6ac73b4c955d47f78746827f3c8cd32/FUJIFILM-USA-hero-digitalcameras.jpg" alt=''/>
                    <p className="absolute left-0 bottom-0 h-full w-1/3 bg-black bg-opacity-10 p-20">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Home;