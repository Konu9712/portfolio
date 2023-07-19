import React from "react";
import "./Me.css";

export const Me = () => {
  return (
    <div>
      <div className="nameWrapper">
        <div className="name">
          <p>Konark Dave</p>{" "}
        </div>
      </div>
      <div className="bioWrapper">
        <div>
          <p className="intro">Hey, I am a Software Developer</p>
          <p className="bio">
            focus in the MERN stack and React Native. I enjoy bringing ideas to
            life by creating intuitive web and mobile applications. With a
            passion for innovation and a knack for problem-solving, I strive to
            deliver engaging user experiences. Let's collaborate and build
            something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};
