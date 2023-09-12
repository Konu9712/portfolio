import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./Card.css";
import FullStack from "../../../svg/full-stack.svg";
import CrossPlatformIcon from "../../../svg/crossPlatform.svg";
import UI from "../../../svg/ui-design.svg";
import CRM from "../../../svg/crm.svg";
import vidoEditing from "../../../svg/video-edition.svg";
import API from "../../../svg/miscellaneous.svg";

const Service = () => {
  return (
    <div className="mainContainer">
      <h3 className="serviceTitle">Services</h3>
      <Row className="row-cols-2 row-cols-md-3 row-cols-sm-2 ">
        <Col className="mb-4">
          <Card className="serviceCard">
            <Card.Body className="cardBody">
              {/* <FullStack className="icon_Service" /> */}
              <img
                className="icon_Service mt-3"
                src={FullStack}
                alt="Full stack"
              />
              <Card.Title className="serviceCardTitle mt-3 mt-md-4">
                FullStack
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card className="serviceCard">
            <Card.Body className="cardBody">
              <img
                className="icon_Service"
                src={CrossPlatformIcon}
                alt="CrossPlatform"
              />
              <Card.Title className="serviceCardTitle">
                CrossPlatform
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card className="serviceCard">
            <Card.Body className="cardBody">
              <img className="icon_Service" src={UI} alt="UI" />
              <Card.Title className="serviceCardTitle">UI/UX Design</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card className="serviceCard">
            <Card.Body className="cardBody">
              <img className="icon_Service" src={CRM} alt="CRM" />
              <Card.Title className="serviceCardTitle">CRM Solution</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card className="serviceCard">
            <Card.Body className="cardBody">
              <img
                className="icon_Service"
                src={vidoEditing}
                alt="vidoEditing"
              />
              <Card.Title className="serviceCardTitle">
                Video Editing
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card className="serviceCard">
            <Card.Body className="cardBody">
              <img className="icon_Service" src={API} alt="API" />
              <Card.Title className="serviceCardTitle">
                Custom API development
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Service;
