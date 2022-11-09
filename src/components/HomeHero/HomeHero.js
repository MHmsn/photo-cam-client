import React from 'react';

const HomeHero = () => {
    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            className="rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-2xl md:text-5xl font-bold">
              Welcome to PhotoCam, my photography services!
            </h1>
            <p className="py-6">
              I provide different photography services according to my clients
              needs, Such as Wedding photography, personal photography, and many
              more!
            </p>
            <a href="#footer">
              <button className="btn btn-primary">About Me</button>
            </a>
          </div>
        </div>
      </div>
    );
};

export default HomeHero;