import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

const ComplaintRecords = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchAllComplaints = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user/mycomplaints");
        console.log(res.data);
        setComplaints(res.data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };
    fetchAllComplaints();
  }, []);

  return (
    <>
      <div className="md:w-[85vw] w-[100%] sticky left-[20vw] bg-gray-800 text-white lg:p-8 p-1">
        {complaints.map((complaint) => (
          <div
            key={complaint.c_id}
            className="comp lg:w-[90%] w-[90%] bg-slate-300 text-slate-900 rounded-[30px] lg:p-8 lg:px-14 p-4 px-7 py-4 my-3 flex justify-between items-center md:flex-row flex-col"
          >
            <div className="md:w-[60%] w-[100%] flex items-center ">
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">Complaint ID:{complaint.c_id}</p>
                <p className="">Complaint Type:{complaint.type}</p>
              </div>
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">DD/MM/YYYY</p>
                <p className="">--:--:--</p>
              </div>
              <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                <p className="">{complaint.description}</p>
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
        ))}
      </div>
    </>
  );
};

export default ComplaintRecords;
