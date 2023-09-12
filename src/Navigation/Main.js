import React from "react";
import "./Main.css";
import Sidebar from "../Components/SideBar/SideBar";
import { Me } from "../Components/SideBar/MainBar/ME/Me";
import { Circle } from "../Components/SideBar/MainBar/ME/Circle";
import { useSelector } from "react-redux";
import Project from "../Components/SideBar/Project/Project";
import PageScroll from "react-page-scroll";
import Service from "../Components/SideBar/Service/Service";

const Main = () => {
  const navSelector = useSelector((state) => state.nav);
  const { isNav } = navSelector;

  return (
    <div>
      <div>
        <div className="container">
          <div className="row ">
            <div className="col-lg-3 col-md-12 sidebar">
              <Sidebar />
            </div>
            <div className="col"></div>
            {!isNav && (
              <>
                <div className="mainContainer">
                  <div>
                    <Circle className="circle" />
                  </div>
                  <PageScroll>
                    <div
                      id="page1"
                      className="page"
                      style={{ height: "100vh" }}
                    >
                      <Me />
                    </div>
                    <div
                      id="page2"
                      className="page"
                      style={{ height: "100vh" }}
                    >
                      <Service />
                    </div>
                    <div
                      id="page3"
                      className="page"
                      style={{ height: "100vh" }}
                    >
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
