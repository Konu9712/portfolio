import React from "react";
import Sidebar from "./Components/SideBar/SideBar";

export default function MacbookPro161() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 sidebar" style={{ marginTop: "10%" }}>
          <Sidebar />
        </div>
        <div className="col-lg-7 mainContainer">mainTab</div>
      </div>
    </div>
  );
}
