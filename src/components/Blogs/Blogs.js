import React, { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    document.title = "blogs - Photo Cam";
  }, []);
  return (
    <div>
      <div className=" mt-24 text-white font-extrabold">
        <div className="collapse w-3/4 rounded-md mx-auto">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium bg-gray-700">
            <h2>What is the difference between SQL and NoSQL?</h2>
          </div>
          <div className="collapse-content bg-slate-900">
            <p className="pt-4 font-bold">
              cors is cross-origin-resource-sharing. Usually when we deploy API
              with data from database, we cannot get the data from another
              device or platform because of security measures for that data.
              cors allows us to relax this security and get the data through
              fetch API. As a result, any origins can get access to that data.
              we can use it by npm install cors in the command line and then
              using require function and use function in the index.js file.{" "}
            </p>
          </div>
        </div>
        <div className="collapse w-3/4 rounded-md mx-auto my-10">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium bg-gray-700">
            <h2>What is JWT, and how does it work?</h2>
          </div>
          <div className="collapse-content bg-slate-900">
            <p className="pt-4 font-bold">
              firebase is a tool which we can use for implementing different
              types of authentication systems in a website. We can also use it
              for deploying our web-app. It also has various other features to
              add to our web-app. It helps us to manage our project well. It
              also has a cloud database. We can use Parse as alternative to
              Firebase.{" "}
            </p>
          </div>
        </div>
        <div className="collapse w-3/4 rounded-md mx-auto my-10">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium bg-gray-700">
            <h2>What is the difference between javascript and NodeJS?</h2>
          </div>
          <div className="collapse-content bg-slate-900">
            <p className="pt-4 font-bold">
              Private route is basically just a route which is designed to check
              the authentication of user before displaying the content of a
              route. If we have any route inside the privateRoute as children we
              can check inside the privateRoute if there is any user logged in.
              if there is a user the child component will be shown, otherwise
              will be navigated to the login page.
            </p>
          </div>
        </div>
        <div className="collapse w-3/4 rounded-md mx-auto my-10">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium bg-gray-700">
            <h2>How does NodeJS handle multiple requests at the same time?</h2>
          </div>
          <div className="collapse-content bg-slate-900">
            <p className="pt-4 font-bold">
              Node is a JavaScript Runtime software that allows us to directly
              run JavaScript code in the terminal, without the need of a
              browser. Node.JS is used to build server side fully functional
              applications. It also has access to files and system which is
              required to build those applications. This is written with
              JavaScript but it works as a server-side language. It uses chrome
              v8 engine to convert javascript code into machine code.
            </p>
          </div>
        </div>
        {/* The button to open modal */}
        <label htmlFor="my-modal" className="btn">
          open modal
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
