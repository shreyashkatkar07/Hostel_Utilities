import React from "react";
import comp from "./../assets/svg/Subtract.svg";
import leave from "./../assets/svg/Subtract(1).svg";
import guest from "./../assets/svg/UsersFour(1).svg";
import mcomp from "./../assets/svg/Folder_file_alt_diuotone_fill(1).svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home w-[100%] bg-gray-800 text-white flex">
        <div className="flex flex-wrap flex-row w-[100%] justify-center lg:justify-normal">
          <div className="h-[420px] p-12">
            <Link to="/filecomplaint">
              <div className=" max-w-sm rounded-[40px] overflow-hidden shadow-lg h-[100%] bg-white text-gray-800 min-w-[300px] flex justify-between items-center flex-col">
                <div className="px-6 py-4 h-full pt-[55px]">
                  <img src={comp} alt="comp" className=" h-[150px]" />
                </div>
                <div className="px-6  bg-[#9752c2] w-[100%] h-[50px] flex justify-center items-center text-white text-3xl">
                  <p>File a Complaint</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="cards h-[420px] p-12">
            <Link to="/guestroombook">
              <div className=" max-w-sm rounded-[40px] overflow-hidden shadow-lg h-[100%] bg-white text-gray-800 min-w-[300px] flex justify-between items-center flex-col">
                <div className="px-6 py-4 h-full pt-[55px]">
                  <img src={guest} alt="guest" className=" h-[150px]" />
                </div>
                <div className="px-6  bg-[#C35608] w-[100%] h-[50px] flex justify-center items-center text-white text-2xl">
                  <p>Guest Room Booking</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="cards h-[420px] p-12">
            <Link to="/guestroombook">
              <div className=" max-w-sm rounded-[40px] overflow-hidden shadow-lg h-[100%] bg-white text-gray-800 min-w-[300px] flex justify-between items-center flex-col">
                <div className="px-6 py-4 h-full pt-[55px]">
                  <img src={leave} alt="leave" className=" h-[150px]" />
                </div>
                <div className="px-6  bg-[#f03a71] w-[100%] h-[50px] flex justify-center items-center text-white text-2xl">
                  <p>Apply For Leave</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="cards h-[420px]  p-12">
            <Link to="/guestroombook">
              <div className=" max-w-sm rounded-[40px] overflow-hidden shadow-lg h-[100%] bg-white text-gray-800 min-w-[300px] flex justify-between items-center flex-col">
                <div className="px-6 py-4 h-full pt-[55px]">
                  <img src={mcomp} alt="mcomp" className=" h-[150px]" />
                </div>
                <div className="px-6  bg-[#0bc1fb] w-[100%] h-[50px] flex justify-center items-center text-white text-2xl">
                  <p>My Complaints</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
