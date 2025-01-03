import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const isActive = "text-blue-800 underline-2";
  return (
    <div className="w-full px-10 py-5 flex justify-between items-center">
      <Link to={"/"}>
        <img
          className="w-28"
          src="https://purepng.com/public/uploads/large/purepng.com-disney-logologobrand-logoiconslogos-251519939495wtv86.png"
          alt="Logo"
        />
      </Link>
      <div className="flex gap-10 text-lg items-center justify-center">
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-blue-800 hover underline" : ""} 
          font-semibold hover:text-blue-900 hover:underline`
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-blue-800 hover underline" : ""} 
          font-semibold hover:text-blue-900 hover:underline`
          }
          to={"/contacts"}
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-blue-800 hover underline" : ""} 
          font-semibold hover:text-blue-900 hover:underline`
          }
          to={"/services"}
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-blue-800 hover underline" : ""} 
          font-semibold hover:text-blue-900 hover:underline`
          }
          to={"/about"}
        >
          About us
        </NavLink>
      </div>

      <div className="flex gap-5 items-center justify-center">
        <button className="px-4 py-2 bg-blue-900 text-white  rounded-md">
          <Link to={"/get_started"}>Get started</Link>
        </button>
        <button className="px-4 py-2 border-2 text-black border-blue-900 rounded-md">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
