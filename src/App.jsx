import { useState } from "react";
import "./App.css";
import ApplyLeave from "./components/ApplyLeave";
import FileComplaint from "./components/FileComplaint";
import GuestRoomBook from "./components/GuestRoomBook";
import Home from "./components/Home";
import MyComplaints from "./components/MyComplaints";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          <Navbar onclic={getIsOpen} />
          <div
            className="flex min-h-[calc(100vh-80px)] w-[100%]"
            style={{
              fontFamily: "'EB Garamond', serif",
              minHeight: "calc(100vh-80px)",
            }}
          >
            <SideNav isOpen={!isOp} />
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route exact path="/filecomplaint" Component={FileComplaint} />
              <Route exact path="/guestroombook" Component={GuestRoomBook} />
              <Route exact path="/applyforleave" Component={ApplyLeave} />
              <Route exact path="/mycomplaints" Component={MyComplaints} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
