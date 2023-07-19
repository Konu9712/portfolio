import React from "react";
import Sidebar from "./Components/SideBar/SideBar";
import Circle from "./Components/SideBar/MainBar/ME/Circle";
import { Me } from "./Components/SideBar/MainBar/ME/Me";
import "./App.css";
import { Navbar } from "react-bootstrap";

export default function MacbookPro161() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div
            className="col-lg-4 col-md-12 sidebar"
            style={{ zIndex: 1, position: "fixed", height: "100vh" }}
          >
            <Sidebar />
          </div>
          <div className="col"></div>
          <div className="col-lg-8 col-md-12 mainContainer">
            <Circle />
            <Me />
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            {/* Rest of your main content */}
            {/* ... */}
          </div>
        </div>
      </div>
    </>
  );
}
