import { useState } from "react";
import "./App.css";
import ApplyLeave from "./components/User/ApplyLeave";
import FileComplaint from "./components/User/FileComplaint";
import GuestRoomBook from "./components/User/GuestRoomBook";
import Home from "./components/User/Home";
import MyComplaints from "./components/User/MyComplaints";
import Navbar from "./components/User/Navbar";
import SideNav from "./components/User/SideNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";

function App() {
  const [isOp, setIsOp] = useState(true);
  const getIsOpen = (isOpen) => {
    // console.log(isOpen);
    setIsOp(isOpen);
  };
  console.log(isOp);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Router>
          <Navbar onclic={getIsOpen} isOp={!isOp} />
          <div
            className="flex min-h-[calc(100vh-80px)] w-[100%]"
            style={{
              fontFamily: "'EB Garamond', serif",
              minHeight: "calc(100vh-80px)",
            }}
          >
            <SideNav isOpen={!isOp} setIsOp={setIsOp} />
            <Routes>
              <Route exact path="/user/home" Component={Home} />
              <Route exact path="/user/login" Component={Login} />
              <Route exact path="/user/signup" Component={Signup} />
              <Route
                exact
                path="/user/filecomplaint"
                Component={FileComplaint}
              />
              <Route
                exact
                path="/user/guestroombook"
                Component={GuestRoomBook}
              />
              <Route exact path="/user/applyforleave" Component={ApplyLeave} />
              <Route exact path="/user/mycomplaints" Component={MyComplaints} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
