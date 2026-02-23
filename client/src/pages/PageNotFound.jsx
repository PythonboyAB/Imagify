import React from "react";
import Oops from "../assets/Oops.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-[77vh] md:min-h-[70vh]">
      <img src={Oops} className="w-xl" />
      <p className="text-xl text-gray-500 mt-2">
        {" "}
        <span className="text-4xl text-black font-medium">404 </span> Page Not
        Found
      </p>
      <Link to="/">
        <button className="bg-blue-600 text-white rounded-full px-4 py-2 mt-4 cursor-pointer text-xl font-medium">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
