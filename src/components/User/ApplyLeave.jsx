import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ApplyLeave = () => {
  return (
    <>
      <div className="md:w-[85vw] w-[100%] sticky left-[20vw] bg-gray-800 text-white lg:p-8 p-1">
        <div className="img mx-4 my-3 w-[100%] flex items-center">
          <FontAwesomeIcon
            icon={faHouse}
            size="xl"
            style={{ color: "#ffffff" }}
          />
          <p className="px-3 text-2xl">Home / Apply for leave</p>
        </div>
        <div className="main-container flex justify-center items-center">
          <div className="container h-[75vh] w-[75vw] block justify-center items-center">
            <div className="header flex bg-white h-[5vh] items-center">
              <FontAwesomeIcon
                icon={faPen}
                size="lg"
                className="py-3 pl-3 flex"
                style={{ color: "#000000" }}
              />
              <p className="text-black py-2 px-3 text-lg">
                Entry/Exit at Main Gate
              </p>
            </div>
            <div className="content bg-slate-800 h-[65vh] px-7 py-2">
              <div className="main-content text-white p-2 !!!!!!!!!!!!!max-sm:{flex flex-col justify-center }">
                <form action="" method="post">
                  <p>Application No.: XYZ123</p>
                  <div className="n-rlno-rmno py-2 flex justify-between flex-wrap">
                    <div className="name my-2">
                      <label htmlFor="name">Name: </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="rounded-md px-2 mx-1"
                        placeholder="Enter your name here"
                      />
                    </div>
                    <div className="rollno my-2">
                      <label htmlFor="rollno">Roll No.: </label>
                      <input
                        type="text"
                        name="rollno"
                        id="rollno"
                        className="rounded-md px-2 w-[8rem] mx-1"
                        placeholder="e.g. 22BXX101"
                      />
                    </div>
                    <div className="roomno my-2">
                      <label htmlFor="roomno">Room No.: </label>
                      <input
                        type="text"
                        name="roomno"
                        id="roomno"
                        className="rounded-md px-2 w-[8rem] mx-1"
                        placeholder="e.g. X-101"
                      />
                    </div>
                  </div>
                  <div className="ge-pr-br flex justify-between flex-wrap">
                    <div className="gender my-2">
                      <label htmlFor="gender">Gender: </label>
                      <select
                        name="gender"
                        id="gender"
                        className="rounded-md px-2 w-[10rem] text-black mx-1"
                        required
                      >
                        <option value="none">Prefer not to say</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="program my-2">
                      <label htmlFor="program">Program: </label>
                      <select
                        name="program"
                        id="program"
                        className="rounded-md px-2 w-[9rem] text-black mx-1"
                        required
                      >
                        <option value="none">Select Discipline</option>
                        <option value="btech">B.Tech</option>
                        <option value="mtech">M.Tech</option>
                        <option value="bdes">B.Des</option>
                        <option value="mdes">M.Des</option>
                        <option value="phd">Ph.D</option>
                      </select>
                    </div>
                    <div className="branch my-2">
                      <label htmlFor="branch">Branch: </label>
                      <select
                        name="branch"
                        id="branch"
                        className="rounded-md px-2 w-[8rem] text-black mx-1"
                        required
                      >
                        <option value="none">Select Branch</option>
                        <option value="cse">CSE</option>
                        <option value="female">ECE</option>
                        <option value="female">Des</option>
                        <option value="female">ME</option>
                        <option value="female">SM</option>
                        <option value="female">NS</option>
                        <option value="female">LA</option>
                      </select>
                    </div>
                  </div>
                  <div className="realea flex my-3">
                    <label htmlFor="reason" className="me-2">
                      Reason for leave:
                    </label>
                    <textarea
                      name="reason"
                      id="reason"
                      placeholder="Type reason here..."
                      className="rounded-md p-2 text-black w-[85%] mx-1"
                    ></textarea>
                  </div>
                  <div className="leadur flex flex-wrap my-5">
                    <label htmlFor="leaveduratn max-md:my-2">
                      Leave Duration:
                    </label>
                    <div className="duratn flex flex-wrap">
                      <div className="ldfm md:mx-7 max-md:mx-2 max-md:my-2">
                        <label htmlFor="ldfrom">From </label>

                        <input
                          type="date"
                          name="ldfrom"
                          id="ldfrom"
                          className="rounded-md px-2 w-[9rem] text-black mx-1"
                        />
                      </div>
                      <div className="ldupto max-md:{my-2} max-md:my-2">
                        <label htmlFor="ldupto">Upto </label>
                        <input
                          type="date"
                          name="ldupto"
                          id="ldupto"
                          className="rounded-md px-2 w-[9rem] text-black mx-1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="realea flex my-3 me-2">
                    <label htmlFor="resadd" className="">
                      Residential Address:
                    </label>
                    <textarea
                      name="resadd"
                      id="resadd"
                      placeholder="Enter address here..."
                      className="rounded-md p-2 text-black w-[85%] mx-1"
                    ></textarea>
                  </div>
                  <div className="mobno py-2  flex flex-wrap">
                    <div className="name my-2 me-[20rem]">
                      <label htmlFor="contno">Contact No.: </label>
                      <input
                        type="text"
                        name="contno"
                        id="contno"
                        className="rounded-md px-2  w-[8rem] text-black mx-1"
                        placeholder="Enter mobile no."
                      />
                    </div>

                    <div className="contnopa my-2">
                      <label htmlFor="contnopa">Contact No. of Parents: </label>
                      <input
                        type="text"
                        name="contnopa"
                        id="contnopa"
                        className="rounded-md px-2 w-[8rem] text-black mx-1"
                        placeholder="Enter mobile no."
                      />
                    </div>
                  </div>
                  <div className="decla">
                    <input
                      type="checkbox"
                      id="agreement"
                      name="agreement"
                      value="agreement"
                    />
                    <label htmlFor="agreement">
                      {" "}
                      Declaration : Yes, I agree that I have taken the consent
                      of my parents for this leave and I will be responsible for
                      maintaining more than 75% attendance during current
                      semester.
                    </label>
                  </div>
                  <div className="btn flex justify-center items-center">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyLeave;
