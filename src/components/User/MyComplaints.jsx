import React from "react";
import homeimg from "./../../assets/svg/Home-white.png";
import { Link } from "react-router-dom";

const MyComplaints = () => {
  return (
    <>
      <div className="md:w-[85vw] w-[100%] sticky left-[20vw] bg-gray-800 text-white lg:p-8 p-1">
        <div style={{padding:"0px 99px"}}>
        <div className="path p-2 flex items-center text-xl header">
          <img src={homeimg} alt="home" />
          <p className="pl-4 text-3xl"><Link to="/"> Home </Link> / My Complaints</p>
        </div>
        </div>
        {/* To be done through map */}
        <div className="complaints lg:p-6 p-2 text-black lg:text-2xl flex items-center flex-col">
          <div className="comp lg:w-[90%] w-[90%] bg-slate-300 rounded-[30px] lg:p-8 lg:px-14 p-4 px-7 py-4 my-3 flex justify-between items-center md:flex-row flex-col">
            <div className="md:w-[60%] w-[100%] flex items-center ">
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">Complaint id</p>
                <p className="">Type</p>
              </div>
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">DD/MM/YYYY</p>
                <p className="">--:--:--</p>
              </div>
            </div>
            <div className="w-[40%] flex justify-center items-center lg:flex-row flex-row md:flex-col">
              <div className="del flex justify-center items-center bg-red-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <span>Delete</span>
              </div>
              <div className="chkof flex justify-center items-center bg-blue-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <span>Check Off</span>
              </div>
            </div>
          </div>
          <div className="comp lg:w-[90%] w-[90%] bg-slate-300 rounded-[30px] lg:p-8 lg:px-14 p-4 px-7 py-4 my-3 flex justify-between items-center md:flex-row flex-col">
            <div className="md:w-[60%] w-[100%] flex items-center ">
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">Complaint id</p>
                <p className="">Type</p>
              </div>
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">DD/MM/YYYY</p>
                <p className="">--:--:--</p>
              </div>
            </div>
            <div className="w-[40%] flex justify-center items-center lg:flex-row flex-row md:flex-col">
              <div className="del flex justify-center items-center bg-red-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <span>Delete</span>
              </div>
              <div className="chkof flex justify-center items-center bg-blue-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <span>Check Off</span>
              </div>
            </div>
          </div>
          <div className="comp lg:w-[90%] w-[90%] bg-slate-300 rounded-[30px] lg:p-8 lg:px-14 p-4 px-7 py-4 my-3 flex justify-between items-center md:flex-row flex-col">
            <div className="md:w-[60%] w-[100%] flex items-center ">
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">Complaint id</p>
                <p className="">Type</p>
              </div>
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">DD/MM/YYYY</p>
                <p className="">--:--:--</p>
              </div>
            </div>
            <div className="w-[40%] flex justify-center items-center lg:flex-row flex-row md:flex-col">
              <div className="del flex justify-center items-center bg-red-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <span>Delete</span>
              </div>
              <div className="chkof flex justify-center items-center bg-blue-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <span>Check Off</span>
              </div>
            </div>
          </div>
          <div className="comp lg:w-[90%] w-[90%] bg-slate-300 rounded-[30px] lg:p-8 lg:px-14 p-4 px-7 py-4 my-3 flex justify-between items-center md:flex-row flex-col">
            <div className="md:w-[60%] w-[100%] flex items-center ">
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">Complaint id</p>
                <p className="">Type</p>
              </div>
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">DD/MM/YYYY</p>
                <p className="">--:--:--</p>
              </div>
            </div>
            <div className="w-[40%] flex justify-center items-center lg:flex-row flex-row md:flex-col">
              <div className="del flex justify-center items-center bg-red-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <span>Delete</span>
              </div>
              <div className="chkof flex justify-center items-center bg-blue-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <span>Check Off</span>
              </div>
            </div>
          </div>
          <div className="comp lg:w-[90%] w-[90%] bg-slate-300 rounded-[30px] lg:p-8 lg:px-14 p-4 px-7 py-4 my-3 flex justify-between items-center md:flex-row flex-col">
            <div className="md:w-[60%] w-[100%] flex items-center ">
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">Complaint id</p>
                <p className="">Type</p>
              </div>
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">DD/MM/YYYY</p>
                <p className="">--:--:--</p>
              </div>
            </div>
            <div className="w-[40%] flex justify-center items-center lg:flex-row flex-row md:flex-col">
              <div className="del flex justify-center items-center bg-red-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <span>Delete</span>
              </div>
              <div className="chkof flex justify-center items-center bg-blue-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <span>Check Off</span>
              </div>
            </div>
          </div>
          <div className="comp lg:w-[90%] w-[90%] bg-slate-300 rounded-[30px] lg:p-8 lg:px-14 p-4 px-7 py-4 my-3 flex justify-between items-center md:flex-row flex-col">
            <div className="md:w-[60%] w-[100%] flex items-center ">
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">Complaint id</p>
                <p className="">Type</p>
              </div>
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">DD/MM/YYYY</p>
                <p className="">--:--:--</p>
              </div>
            </div>
            <div className="w-[40%] flex justify-center items-center lg:flex-row flex-row md:flex-col">
              <div className="del flex justify-center items-center bg-red-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <span>Delete</span>
              </div>
              <div className="chkof flex justify-center items-center bg-blue-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <span>Check Off</span>
              </div>
            </div>
          </div>
          <div className="comp lg:w-[90%] w-[90%] bg-slate-300 rounded-[30px] lg:p-8 lg:px-14 p-4 px-7 py-4 my-3 flex justify-between items-center md:flex-row flex-col">
            <div className="md:w-[60%] w-[100%] flex items-center ">
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">Complaint id</p>
                <p className="">Type</p>
              </div>
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">DD/MM/YYYY</p>
                <p className="">--:--:--</p>
              </div>
            </div>
            <div className="w-[40%] flex justify-center items-center lg:flex-row flex-row md:flex-col">
              <div className="del flex justify-center items-center bg-red-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <span>Delete</span>
              </div>
              <div className="chkof flex justify-center items-center bg-blue-600 text-white rounded-3xl px-8 py-1 my-1 mx-6">
                <span>Check Off</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyComplaints;
