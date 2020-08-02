import React from "react";
import "./InfoBar.css";

const InfoBar = (props) => {
  return (
    <div className="infobar">
      <div className="leftInnerContainer">
        <img
          className="onlineIcon"
          src="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/onlineIcon.png"
          alt="online image"
        />
        <h3>{props.room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/closeIcon.png"
            alt="close image"
          />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
