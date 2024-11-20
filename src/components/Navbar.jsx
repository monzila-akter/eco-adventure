import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css"
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);
  // console.log(user);

  return (
    <div className="bg-lime-900  py-4">
        <div className="navbar w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52  shadow text-black text-lg font-medium p-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/adventures">Adventures</NavLink>
        <NavLink to="/myProfile">My Profile</NavLink>
        <NavLink to="/updateProfile">Update Profile</NavLink>
        {
          user && user?.email ? <img title={user?.displayName} className="w-12 h-12 rounded-full border-2 border-lime-800 object-cover cursor-pointer" src={user?.photoURL}></img> : <span className="w-12 h-12 rounded-full bg-white flex justify-center items-center text-xl border-4 border-lime-900 mt-4"><FaUser></FaUser></span>
        }
    {
      user && user?.email ? <button onClick={logOut} className="btn  px-6 text-lg font-bold  border-none text-white mt-4 mb-4 bg-lime-900">Log Out</button> : <Link to="/login" className="btn   px-6 text-lg font-bold  border-none text-white mt-4 mb-4 bg-lime-900">Login</Link>
    }
      </ul>
    </div>
    <Link to="/" className="font-bold btn btn-ghost text-xl text-white"><span>ECO ADVENTURE</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 text-white font-medium text-base space-x-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/adventures">Adventures</NavLink>
        <NavLink to="/myProfile">My Profile</NavLink>
        <NavLink to="/updateProfile">Update Profile</NavLink>
    </ul>
  </div>
  <div className="navbar-end space-x-3  items-center hidden lg:flex">
   {
    user && user?.email ? <div><img title={user?.displayName} className="w-12 h-12 rounded-full object-cover border-2 border-white cursor-pointer" src={user?.photoURL} alt="" /></div> :  <span className="w-12 h-12 rounded-full border-2 border-white bg-transparent flex justify-center items-center text-xl text-white"><FaUser></FaUser></span>
   }
    {
      user && user?.email ? <button onClick={logOut}  className="btn   px-6 text-lg font-bold text-white border-2 border-white bg-transparent">Log Out</button> : <Link to="/login" className="btn   px-6 text-lg font-bold text-white border-2 border-white bg-transparent">Login</Link>
    }
  </div>
</div>
    </div>
  );
};

export default Navbar;
