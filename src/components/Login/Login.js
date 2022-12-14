import React, { useContext, useEffect, useState } from "react";
import {  FaGoogle } from "react-icons/fa";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { AllContext } from "../../contexts/AllContextProvider";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const { login, providerLogin } = useContext(AllContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    document.title = "Login - Photo Cam";
},[])

    const loginHandle = (event) => {
        event.preventDefault();
        setLoading(true);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, { replace: true });
            setLoading(false);
          })
          .catch((e) => {
            setError(e.message);
            setLoading(false);
            form.reset();
          });
      };
      const googleHandle = (event) => {
        event.preventDefault();
        setLoading(true);
        providerLogin(googleProvider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
            setLoading(false);
          })
          .catch((e) => {
            setError(e.message)
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
        <form onSubmit={loginHandle}>
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
              Log In
            </button>
          </div>

          <div className="my-4 text-red-600">{error}</div>
          <div className="mt-4">
            New to this website?{" "}
            <Link to="/register" className="underline">
              Register here
            </Link>
          </div>
          <div className="text-center flex flex-col items-center">
            <hr className="bg-black h-1 mt-4 w-5/6" />
            <button
              className="btn btn-primary w-4/6 mt-4"
              onClick={googleHandle}
            >
              Log in with Google <FaGoogle className=" ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
