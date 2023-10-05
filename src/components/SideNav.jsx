import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      {/* sidenav */}
      <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
        <nav>
          <ul className="space-y-2">
            <li className="opcion-con-desplegable">
              <Link to="/">
                <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                  <div className="flex items-center">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    <span>Home</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="opcion-con-desplegable">
              <Link to="/filecomplaint">
                <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                  <div className="flex items-center">
                    <i className="fas fa-money-bill-wave mr-2"></i>
                    <span>File a complaint</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="opcion-con-desplegable">
              <Link to="/guestroombook">
                <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                  <div className="flex items-center">
                    <i className="fas fa-chart-bar mr-2"></i>
                    <span>Guest Room Booking</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="opcion-con-desplegable">
              <Link to="/applyforleave">
                <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                  <div className="flex items-center">
                    <i className="fas fa-file-alt mr-2"></i>
                    <span>Apply for leave</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="opcion-con-desplegable">
              <Link to="/mycomplaints">
                <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                  <div className="flex items-center">
                    <i className="fas fa-file-alt mr-2"></i>
                    <span>My Complaints</span>
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
