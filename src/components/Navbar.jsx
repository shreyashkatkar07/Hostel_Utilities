import React from "react";
import userf from "./../assets/svg/User_fill(1).svg";

const Navbar = () => {
  return (
    <div>
      {/* Topnav */}
      <nav className="bg-blue-500 md:px-20 px-6 py-4 flex items-center justify-between">
        <div>
          <h1
            className="text-white md:text-5xl text-3xl font-semibold lobster"
            style={{
              fontFamily: "'Lobster', cursive",
            }}
          >
            HostelUtilities
          </h1>
        </div>
        <div className="flex items-center space-x-4">
        <img src={userf} alt="userf" />
          <span
            className="text-white text-2xl"
            style={{
              fontFamily: "'EB Garamond', serif",
            }}
          >
            Login
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
