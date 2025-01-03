import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const GetStarted = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col justify-center items-center">
      {location.pathname !== "/get_started/signup" && (
        <Link
          className="bg-blue-900 text-white px-4 py-2 rounded-md text-xl hover:bg-transparent hover:text-blue-900 hover:border-2 hover:border-blue-900"
          to="/get_started/signup"
        >
          Sign Up
        </Link>
      )}
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default GetStarted;
