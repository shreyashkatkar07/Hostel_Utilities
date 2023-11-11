import React from "react";
import homeimg from "./../../assets/svg/Home-white.png";
import { Link } from "react-router-dom";

const LeaveApproval = () => {
  return (
    <>
      <div className="md:w-[85vw] w-[100%] sticky left-[20vw] bg-gray-800 text-white lg:p-8 p-1">
        <div style={{padding:"0px 99px"}}>
        <div className="path p-2 flex items-center text-xl header">
          <img src={homeimg} alt="home" />
          <p className="pl-4 text-3xl"><Link to="/"> Home </Link> / Leave Approval</p>
        </div>
        </div>
        {/* To be done through map */}
        <div className="complaints lg:p-6 p-2 text-black lg:text-2xl flex items-center flex-col">
          <div className="comp lg:w-[90%] w-[90%] bg-slate-300 rounded-[30px] lg:p-8 lg:px-14 p-4 px-7 py-4 my-3 flex justify-between items-center md:flex-row flex-col">
            <div className="md:w-[60%] w-[100%] ">
            <p>Roll No : 22BCS101</p><br />
            <div className="flex justify-between"><p>From : DD/MM/YYYY</p><p className=" pr-20">To : DD/MM/YYYY</p></div><br />
            <p>Reason for leave : Ghari challo aahe mi....</p>

            </div>
            <div className="w-[40%] flex justify-center items-center lg:flex-row flex-row md:flex-col">
              <div className="del flex justify-center items-center bg-red-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <button>Reject</button>
              </div>
              <div className="chkof flex justify-center items-center bg-blue-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <button>Grant Permission</button>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default LeaveApproval;
