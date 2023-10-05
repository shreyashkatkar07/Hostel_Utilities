import React from "react";

const Navbar = () => {
  return (
    <div>
        {/* Topnav */}
      <nav className="bg-blue-500 md:px-20 px-6 py-4 flex items-center justify-between">
        <div>
          <h1
            className="text-white md:text-5xl text-3xl font-semibold lobster"
            style={{
              fontFamily: "'Lobster', cursive"
            }}
          >
            HostelUtilities
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white">
            Bienvenido</span>
          <i className="fas fa-user-circle text-white text-2xl"></i>
        </div>
      </nav>

        
    </div>
  );
};

export default Navbar;

