import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AllContext } from "../../contexts/AllContextProvider";
import { ClipLoader } from "react-spinners";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AllContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Register - Photo Cam";
  }, []);

  const registerHandle = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then(() => {
        updateUserProfile({ displayName: name, photoURL: photoURL });
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };
  return (
    <div>
    <div className={loading?'block':'hidden'}>
      <ClipLoader color="red" />
      </div>
        <div className="my-5 md:flex md:items-center">
      <div>
        <img
          src="https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?w=826&t=st=1667924782~exp=1667925382~hmac=5b8922ec805503e208a1fe35d1476c2f242311496ad97343172691ef46534c11"
          alt=""
          className="md:w-3/4"
        />
      </div>
      <div className=" bg-black bg-opacity-80 p-2 md:p-5 rounded-xl text-white md:w-3/4 lg:w-1/4">
        <form onSubmit={registerHandle}>
          <div className="my-4">
            <label htmlFor="inputName">Full Name</label>
            <br />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="p-2 rounded-lg w-full text-black"
              required
            ></input>
          </div>
          <div className="my-4">
            <label htmlFor="inputPassword">Photo URL</label>
            <br />
            <input
              name="photoURL"
              type="text"
              placeholder="Enter your PhotoURL"
              className="p-2 rounded-lg w-full text-black"
              required
            ></input>
          </div>
          <div className="my-4">
            <label htmlFor="inputEmail">Email</label>
            <br />
            <input
              name="email"
              type="email"
              placeholder="Enter your Email"
              className="p-2 rounded-lg w-full text-black"
              required
            ></input>
          </div>
          <div className="my-4">
            <label htmlFor="inputPassword">Password</label>
            <br />
            <input
              name="password"
              type="password"
              placeholder="Enter your Password"
              className="p-2 rounded-lg w-full text-black"
              required
            ></input>
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>

          <div className="my-4 text-red-600">{error}</div>
          <div className="mt-4">
            Already have an account?{" "}
            <Link to="/login" className=" underline">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Register;
