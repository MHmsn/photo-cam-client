import React, { useEffect } from "react";

//blog section

const Blogs = () => {
  useEffect(() => {
    document.title = "Blogs - Photo Cam";
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
              SQL databases are table based, but NoSQL databases are mostly object or key-value based. So SQL is better for structured data like tables. While NoSQL databases are better for unstructured data like JSON. Also, SQL databases are vertically scalable but NoSQL databases are horizontally scalable.
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
              JWT stands for JSON Web Token. It helps to encrypt the user data so that the data does not fall into the wrong hands. Also, it issues a token for authentication, which can be decrypted and used for authentication purposes. The token can be stored on local storage but it is not recommended. it is mostly stored on http only cookie. this token can be sent with API and then decoded to authenticate the user. 
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
              JavaScript is a simple scripting language which is used for creating interactive web pages. While node.js is a JavaScript runtime environment. Usually JavaScript can run only in the browser. but with node.js, now javascript code can be executed outside of the browser as well. JavaScript is used for frontend web development while Node.js is used for backend web development in the server side. 
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
              Node JS handle multiple request at the same time by one of it's main features, event loop. Event loop allows Node JS to run asynchronous functions. As it is normally single threaded, it handles one request at a time. but for asynchronous functions, it sets that asynchronous function aside from the call stack, and starts working on the next requests. This method allows node to do multiple tasks at the same time even though it is single threaded. 
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
