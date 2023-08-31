import React from "react";
import "./Main.css";
import Sidebar from "../Components/SideBar/SideBar";
import { Me } from "../Components/SideBar/MainBar/ME/Me";
import { Circle } from "../Components/SideBar/MainBar/ME/Circle";
import { useSelector } from "react-redux";
import Project from "../Components/SideBar/Project/Project";
import PageScroll from "react-page-scroll";

const Main = () => {
  const navSelector = useSelector((state) => state.nav);
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
              <>
                <div className=" mainContainer">
                  <Circle />
                  <PageScroll>
                    <div id="page1" className="page ">
                      <Me />
                    </div>
                    <div id="page2" className="page ">
                      <Project />
                    </div>
                  </PageScroll>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
