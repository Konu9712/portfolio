import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Nav, Navbar } from "react-bootstrap";
import "./SideBar.css";
import { setNavbar } from "../../actions/navbarAction";

const Sidebar = () => {
  const dispatch = useDispatch();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    const updatedNavbarState = !isNavbarOpen;
    setIsNavbarOpen(updatedNavbarState);
    dispatch(setNavbar(updatedNavbarState));
  };
  return (
    <>
      <Navbar expand="sm xs " onToggle={handleNavbarToggle}>
        <Navbar.Toggle aria-controls="sidebarContent" />
        <Navbar.Collapse id="sidebarContent">
          <Nav className="ml-auto" style={{ alignItems: "center" }}>
            <div className="mainContainer ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/tjmvk4dtp78-104%3A10?alt=media&token=6ccd431c-8989-4823-93f6-f2bd6f422782"
                alt="Not Found"
                className="ellipse-1"
              />
              <Card className="cardContainer container1 mt-5">
                <div className="group-1">
                  <p className="me">ME</p>
                </div>
              </Card>
              <Card className="cardContainer container2 mt-3">
                <div className="group-2">
                  <p className="services">Services</p>
                </div>
              </Card>
              <Card className="cardContainer container3 mt-3">
                <div className="group-3">
                  <p className="projects">Projects</p>
                </div>
              </Card>
              <Card className="cardContainer container4 mt-3">
                <div className="group-4">
                  <p className="contact">Contact</p>
                </div>
              </Card>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Sidebar;
