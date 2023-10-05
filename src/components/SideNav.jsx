import React from "react";
import { Link } from "react-router-dom";
import homeimg from "./../assets/svg/Home-black.png";
import comp from "./../assets/svg/File_dock_add_fill.svg";
import leaveico from "./../assets/svg/File_dock_fill.svg";
import guest from "./../assets/svg/UsersFour.svg";
import mcomp from "./../assets/svg/Folder_file_alt_diuotone_fill.svg";

const SideNav = () => {
  return (
    <>
      {/* sidenav */}
      <aside className="bg-white text-gray-800 w-64 min-h-screen hidden md:block">
        <nav>
          <ul className="space-y-2">
            <li className="opcion-con-desplegable">
              <Link to="/">
                <div className="flex items-center justify-between p-4 hover:bg-gray-300 hover:text-black text-xl">
                  <div className="flex items-center">
                    <img src={homeimg} alt="home" />
                    <span className=" px-4 font-bold text-xl">Home</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="opcion-con-desplegable">
              <Link to="/filecomplaint">
                <div className="flex items-center justify-between p-4 hover:bg-gray-300 hover:text-black text-xl">
                  <div className="flex items-center">
                    <img src={comp} alt="comp" />
                    <span className=" px-4 font-bold text-xl">File a complaint</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="opcion-con-desplegable">
              <Link to="/guestroombook">
                <div className="flex items-center justify-between p-4 hover:bg-gray-300 hover:text-black text-xl">
                  <div className="flex items-center">
                    <img src={guest} alt="guest" />
                    <span className=" px-4 font-bold text-xl">Guest Room Booking</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="opcion-con-desplegable">
              <Link to="/applyforleave">
                <div className="flex items-center justify-between p-4 hover:bg-gray-300 hover:text-black text-xl">
                  <div className="flex items-center">
                  <img src={leaveico} alt="leaveico" />
                    <span className=" px-4 font-bold text-xl">Apply for leave</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="opcion-con-desplegable">
              <Link to="/mycomplaints">
                <div className="flex items-center justify-between p-4 hover:bg-gray-300 hover:text-black text-xl">
                  <div className="flex items-center">
                  <img src={mcomp} alt="mcomp" />
                    <span className=" px-4 font-bold text-xl">My Complaints</span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideNav;
