import React from "react";
import "./Main.css";
import Sidebar from "../Components/SideBar/SideBar";
import { Me } from "../Components/SideBar/MainBar/ME/Me";
import { Circle } from "../Components/SideBar/MainBar/ME/Circle";
import { useSelector } from "react-redux";

const Main = () => {
  const navSelector = useSelector((state) => state.nav);
  console.log("navSelector", navSelector);
  const { isNav } = navSelector;
  return (
    <div>
      <div>
        <div className="container">
          <div className="row ">
            <div
              className="col-lg-3 col-md-12 sidebar"
              style={{ zIndex: 1, position: "fixed", height: "100vh" }}
            >
              <Sidebar />
            </div>
            <div className="col"></div>
            {!isNav && (
              <div className="col-lg-9 col-md-12 col-sm-12 mainContainer">
                <Circle />
                <Me />
                <div class="main-content-loader">
                  <div class="spinner">
                    <div class="spinner__progress"></div>
                  </div>
                </div>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
