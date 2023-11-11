import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homeimg from "./../../assets/svg/Home-white.png";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ApplyLeave = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div
        className={`md:w-[85vw] w-[100%] sticky left-[20vw] bg-gray-800 text-white lg:p-8 p-1 `}
      >
        <div className="px-16">
          <div className=" path p-2 flex items-center text-xl header">
            <img src={homeimg} alt="home" />
            <p className="pl-4 text-3xl">Home / Apply for leave</p>
          </div>
        </div>
        <div className="main-container flex justify-center items-center py-5">
          <div
            className="container w-[75vw] block justify-center items-center"
            style={{ borderRadius: "10px" }}
          >
            <div
              className="header flex bg-white h-[6vh] items-center "
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <FontAwesomeIcon
                icon={faPen}
                size="lg"
                className="py-3 pl-3 flex"
                style={{ color: "#000000" }}
              />
              <p className="text-black p-3 text-2xl">Entry/Exit at Main Gate</p>
            </div>
            <div
              className="content px-7 py-2"
              style={{
                backgroundColor: "rgb(85, 88, 98)",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <div className="main-content text-white p-2 text-2xl  !!!!!!!!!!!!!max-sm:{flex flex-col justify-center }">
                <form action="#" method="post">
                  <p className="py-3">Application No.: XYZ123</p>
                  <div className="n-rlno-rmno py-2 flex justify-between flex-wrap">
                    <div className="name my-5">
                      <label htmlFor="name">Name: </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        style={{ borderRadius: "10px" }}
                        className="rounded-md w-[19.5rem] p-2 mx-1 text-black"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="rollno my-5">
                      <label htmlFor="rollno">Roll No.: </label>
                      <input
                        type="text"
                        name="rollno"
                        id="rollno"
                        className="rounded-md p-2 w-[12rem] mx-1 text-black"
                        placeholder="e.g. 22bcs001"
                        required
                      />
                    </div>
                    <div className="roomno my-5">
                      <label htmlFor="roomno">Room No.: </label>
                      <input
                        type="text"
                        name="roomno"
                        id="roomno"
                        className="rounded-md p-2 w-[9rem] mx-1 text-black"
                        placeholder="e.g. X-101"
                        required
                      />
                    </div>
                  </div>
                  <div className="ge-pr-br flex justify-between flex-wrap">
                    <div className="gender my-5">
                      <label htmlFor="gender">Gender: </label>
                      <select
                        name="gender"
                        id="gender"
                        className="rounded-md p-2 w-[15rem] text-black mx-1"
                        required
                      >
                        <option value="none">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="transgender">Transgender</option>
                        <option value="none">Prefer not to say</option>
                      </select>
                    </div>
                    <div className="program my-5">
                      <label htmlFor="program">Program: </label>
                      <select
                        name="program"
                        id="program"
                        className="rounded-md p-2 w-[15rem] text-black mx-1"
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
                    <div className="branch my-5">
                      <label htmlFor="branch">Branch: </label>
                      <select
                        name="branch"
                        id="branch"
                        className="rounded-md p-2 w-[13rem] text-black mx-1"
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
                  <div className="realea flex my-7">
                    <label htmlFor="reason" className="me-2">
                      Reason for leave:
                    </label>
                    <textarea
                      name="reason"
                      id="reason"
                      placeholder="Type reason here..."
                      className="rounded-md p-2 text-black w-[85%] mx-1"
                      required
                    ></textarea>
                  </div>
                  <div className="leadur flex flex-wrap my-11 items-center">
                    <label htmlFor="leaveduratn max-md:my-5">
                      Leave Duration:
                    </label>
                    <div className="duratn flex flex-wrap max-md:justify-center">
                      <div className="ldfm md:mx-7 max-md:mx-2 max-md:my-3">
                        <label htmlFor="ldfrom">From </label>

                        <input
                          type="date"
                          name="ldfrom"
                          id="ldfrom"
                          className="rounded-md p-2 w-[12rem] text-black mx-1"
                          required
                        />
                      </div>
                      <div className="ldupto max-md:{my-2} max-md:mx-2">
                        <label htmlFor="ldupto">Upto </label>
                        <input
                          type="date"
                          name="ldupto"
                          id="ldupto"
                          className="rounded-md p-2 w-[12rem] text-black mx-1"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="realea flex my-9 me-2">
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
                  <div className="mobno my-10 flex flex-wrap ">
                    <div className="name me-[20rem] flex max-md:items-center">
                      <label htmlFor="contno">Contact No.: </label>
                      <input
                        type="text"
                        name="contno"
                        id="contno"
                        className="rounded-md p-2 w-[14rem] text-black mx-1 max-md:h-[3rem] max-md:mx-4 max-md:items-center"
                        placeholder="Enter mobile no."
                        required
                      />
                    </div>

                    <div className="contnopa max-md:my-6 ">
                      <label htmlFor="contnopa">Contact No. of Parents: </label>
                      <input
                        type="text"
                        name="contnopa"
                        id="contnopa"
                        className="rounded-md p-2 w-[14rem] text-black mx-1"
                        placeholder="Enter mobile no."
                        required
                      />
                    </div>
                  </div>
                  <div className="decla ">
                    <input
                      type="checkbox"
                      id="agreement"
                      name="agreement"
                      value="agreement"
                      required
                      style={{ width: "25px", height: "25px" }}
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
                      className="text-white text-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 my-5 w-150 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
