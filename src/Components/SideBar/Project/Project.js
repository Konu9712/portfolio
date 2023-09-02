import React from "react";
import { useScroll, useSpring, animated } from "@react-spring/web";
import Iphone1 from "../../../svg/Group 10.svg";
import Iphone2 from "../../../svg/Group 8.svg";
import { ReactComponent as Icon } from "../../../svg/Frame.svg";
import "./Project.css";

const Project = () => {
  const { scrollYProgress } = useScroll();
  const fadeInOutAnimation = useSpring({
    opacity: scrollYProgress.to([0, 1], [0, 1]),
  });

  return (
    <div>
      <div className="first row">
        <div className="col-md-6">
          <animated.img
            className="firstImage"
            src={Iphone1}
            alt="Your SVG Icon"
            style={fadeInOutAnimation}
          />
        </div>
        <div className="col-md-6">
          <Icon className="icon" style={fadeInOutAnimation} />
        </div>
      </div>
      <div className=" second row">
        <div className="col-md-6 contentWrapper">
          <p className="salescampContent col-md-6">
            Salescamp is a comprehensive sales suite designed to optimize and
            streamline the sales cycle for businesses. It offers a range of
            customizable tools and features that empower users to enhance their
            customer service, increase sales performance, and foster stronger
            customer loyalty.{" "}
          </p>
        </div>
        <div className="col-md-6 col-sm-12">
          <animated.img
            className="secondImage col-md-6 col-sm-12"
            src={Iphone2}
            alt="Your SVG Icon"
            style={fadeInOutAnimation}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
