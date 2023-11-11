import { useState, useEffect } from "react";
import "./App.css";
import ApplyLeave from "./components/User/ApplyLeave";
import FileComplaint from "./components/User/FileComplaint";
import GuestRoomBook from "./components/User/GuestRoomBook";
import Home from "./components/User/Home";
import MyComplaints from "./components/User/MyComplaints";
import Navbar from "./components/User/Navbar";
import SideNavUser from "./components/User/SideNav";
import SideNavAdmin from "./Admin/SideNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Admin from "./Admin/Homepage";

const USER_TYPES = {
  PUBLIC_USER: "public",
  NORMAL_USER: "student",
  ADMIN_USER: "Admin",
};

const CURRENT_USER_TYPE = USER_TYPES.NORMAL_USER;

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
            {CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER ? (
              <SideNavUser isOpen={!isOp} setIsOp={setIsOp} />
            ) : (
              <SideNavAdmin isOpen={!isOp} setIsOp={setIsOp} />
            )}

            <Routes>
              <Route
                exact
                path="/"
                element={
                  <UserElement>
                    <Home />
                  </UserElement>
                }
              />

              <Route
                exact
                path="/admin"
                element={
                  <AdminElement>
                    <Admin />
                  </AdminElement>
                }
              />
              <Route exact path="/login" Component={Login} />
              <Route exact path="/signup" Component={Signup} />
              <Route exact path="/filecomplaint" Component={FileComplaint} />
              <Route exact path="/guestroombook" Component={GuestRoomBook} />
              <Route exact path="/applyforleave" Component={ApplyLeave} />
              <Route exact path="/mycomplaints" Component={MyComplaints} />
              <Route exact path="*" Component={<div>Page not found</div>} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

const UserElement = ({ children }) => {
  if (CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER) {
    return <>{children}</>;
  } else {
    <div>error</div>;
  }
};

const AdminElement = ({ children }) => {
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
    return <>{children}</>;
  } else {
    <div>error</div>;
  }
};

export default App;
