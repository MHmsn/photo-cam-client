import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AllContext } from "../contexts/AllContextProvider";
import logo from "../../src/Cam.png"

const Header = () => {
  const {user, logOut} = useContext(AllContext);


  const logOutHandle = () => {
    logOut()
    .then()
    .catch(err => console.log(err))
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to='/services'>Services</NavLink>
              </li>
              <li>
                <NavLink to='/blogs'>Blogs</NavLink>
              </li>
              {user?<li><NavLink to='/reviews'>My Reviews</NavLink></li>:<></>}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} className="max-h-full mr-2" alt=""/>PhotoCam</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className="mx-3">
              <NavLink to='/services'>Services</NavLink>
            </li>
            <li className="mx-3">
              <NavLink to='/blogs'>Blogs</NavLink>
            </li>
            {user?<><li className="mx-3"><NavLink to='/reviews'>My Reviews</NavLink></li><li className="mx-3"><NavLink to='/addservice'>Add Service</NavLink></li></>:<></>}
          </ul>
        </div>
        <div className="navbar-end">
          {user?<><img src={user.photoURL} className=" rounded-full w-9 text-sm" alt={user.displayName} title={user.displayName}/><button onClick={logOutHandle} className="btn btn-ghost">Log Out</button></>:<Link to='/login'><button className="btn btn-ghost">Log In</button></Link>}
        </div>
      </div>
    </div>
  );
};

export default Header;
