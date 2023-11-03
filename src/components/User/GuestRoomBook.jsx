import React from "react";
import homeimg from "./../../assets/svg/Home-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const GuestRoomBook = () => {
  return (
    <>
      <div className="md:w-[85vw] w-[100%] sticky left-[20vw] bg-gray-800 text-white lg:p-8 p-1">
        {/* <center> */}
          <div
            style={{
              // width: "90%",
              // textAlign: "left",
              // fontSize: "x-large",
              // color: "white",
              padding:"0px 77px"
            }}
          >
            <div className="path p-2 flex items-center text-xl header">
              <img src={homeimg} alt="home" />
              <p className="pl-4 text-3xl">
                <Link to="/"> Home </Link>/ Guest Room Booking
              </p>
            </div>
          </div>
        {/* </center> */}
        <br />
        <div className="flex justify-center">
          <div
            className="w-[90%] bg-slate-100"
            style={{ borderRadius: "10px" }}
          >
            <div className="flex items-center p-3 text-black">
              &nbsp;&nbsp;
              <FontAwesomeIcon icon={faPen} />
              &nbsp;&nbsp;
              <div className="text-2xl">Room Booking Details</div>
            </div>
            <div
              style={{
                backgroundColor: "rgb(85, 88, 98)",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <div className="px-6 py-4" style={{ fontSize: "x-large" }}>
                <div>
                  <label htmlFor="hostel">Hostel:</label>
                  <select
                    name="hostel"
                    id="hostel"
                    style={{
                      textAlign: "center",
                      width: "25%",
                      marginLeft: "0.5vw",
                      minWidth: "122px",
                      borderRadius: "10px",
                      color: "black",
                    }}
                  >
                    <option value="" disabled selected hidden>
                      Choose your hostel
                    </option>
                    <option value="hall1">Hall 1</option>
                    <option value="hall3">Hall 3</option>
                    <option value="hall4">Hall 4</option>
                  </select>
                </div>
                <br />
                <div className="grid grid-cols-2 gap-6">
                  <div className=" flex ">
                    <label
                      htmlFor="firstName"
                      className="w-[25%]"
                      style={{ minWidth: "114px" }}
                    >
                      First Name:{" "}
                    </label>
                    <input
                      type="text"
                      style={{ borderRadius: "10px", width: "70%" }}
                      className="text-black p-1"
                    />
                  </div>
                  <div className=" flex ">
                    <label
                      htmlFor="middleName"
                      className="w-[25%]"
                      style={{ minWidth: "114px" }}
                    >
                      Middle Name:{" "}
                    </label>
                    <input
                      type="text"
                      style={{ borderRadius: "10px", width: "70%" }}
                      className="text-black p-1"
                    />
                  </div>
                  <div className=" flex ">
                    <label
                      htmlFor="lastName"
                      className="w-[25%]"
                      style={{ minWidth: "114px" }}
                    >
                      Last Name:{" "}
                    </label>
                    <input
                      type="text"
                      style={{ borderRadius: "10px", width: "70%" }}
                      className="text-black p-1"
                    />
                  </div>
                  <div className=" flex ">
                    <label
                      htmlFor="gender"
                      className="w-[25%]"
                      style={{ minWidth: "114px" }}
                    >
                      Gender:
                    </label>
                    <select
                      name="gender"
                      id="gender"
                      style={{
                        borderRadius: "10px",
                        color: "black",
                        width: "70%",
                      }}
                    >
                      <option value="" disabled selected hidden>
                        Select your gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="pnts">Prefer not to say</option>
                    </select>
                  </div>
                  <div className=" flex ">
                    <label
                      htmlFor="relationship"
                      className="w-[25%]"
                      style={{ minWidth: "114px" }}
                    >
                      Relationship:
                    </label>
                    <input
                      type="text"
                      style={{ borderRadius: "10px", width: "70%" }}
                      className="text-black p-1"
                    />
                  </div>
                  <div className=" flex ">
                    <label
                      htmlFor="noOfPersons"
                      className="w-[25%]"
                      style={{ minWidth: "114px" }}
                    >
                      No of persons:
                    </label>
                    <input
                      type="text"
                      style={{ borderRadius: "10px", width: "70%" }}
                      className="text-black p-1"
                    />
                  </div>
                  <div className="flex ">
                    <label
                      htmlFor="permAdd"
                      className="w-[25%]"
                      style={{ minWidth: "114px" }}
                    >
                      Permenent Address:
                    </label>
                    <textarea
                      name="permAdd"
                      id="permAdd"
                      rows="4"
                      className="w-[70%] text-black"
                      style={{ borderRadius: "10px" }}
                    ></textarea>
                  </div>
                  <div className="flex ">
                    <label
                      htmlFor="contAdd"
                      className="w-[25%]"
                      style={{ minWidth: "114px" }}
                    >
                      Contact Address:
                    </label>
                    <textarea
                      name="contAdd"
                      id="contAdd"
                      rows="4"
                      className="w-[70%] text-black"
                      style={{ borderRadius: "10px" }}
                    ></textarea>
                  </div>
                  <div className=" flex ">
                    <label
                      htmlFor="phNo"
                      className="w-[25%]"
                      style={{ minWidth: "114px" }}
                    >
                      Phone No:
                    </label>
                    <input
                      type="text"
                      style={{ borderRadius: "10px", width: "70%" }}
                      className="text-black p-1"
                    />
                  </div>
                  <div className=" flex ">
                    <label
                      htmlFor="email"
                      className="w-[25%]"
                      style={{ minWidth: "114px" }}
                    >
                      Email id:
                    </label>
                    <input
                      type="text"
                      style={{ borderRadius: "10px", width: "70%" }}
                      className="text-black p-1"
                    />
                  </div>
                  <div className=" flex ">
                    <label
                      htmlFor="checkIn"
                      className="w-[25%]"
                      style={{ minWidth: "114px" }}
                    >
                      Check in:
                    </label>
                    <input
                      type="text"
                      style={{ borderRadius: "10px", width: "70%" }}
                      className="text-black p-1"
                    />
                  </div>
                  <div className=" flex ">
                    <label
                      htmlFor="checkOut"
                      className="w-[25%]"
                      style={{ minWidth: "114px" }}
                    >
                      Check out:
                    </label>
                    <input
                      type="text"
                      style={{ borderRadius: "10px", width: "70%" }}
                      className="text-black p-1"
                    />
                  </div>
                </div>
                <br />
                <center>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700"
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      width: "15%",
                      minWidth: "94px",
                    }}
                  >
                    Submit
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestRoomBook;
