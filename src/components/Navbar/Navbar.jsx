import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (

    <div>
      <nav className="bg-[#E21E2D]  px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          {/* Logo */}
          <Link to="/">
            <div className="text-black font-bold md:text-2xl lg:text-3xl ml-20  font-aug ">
              House Of Movies
            </div>
          </Link>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            {/* items */}
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
