import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-between align-items-center navContainer">
        <div className="d-flex flex-column">
          <div className="m-3">
            <img
              src="././images/Dashboard.png"
              className=" icon dashBoardIcon"
              alt="icon"
            />
          </div>
          <div className="m-3">
            {" "}
            <img src="././images/Analytics.png" alt="icon" className="icon" />
          </div>
          <div className="m-3">
            {" "}
            <img src="././images/TradingIcon.png" alt="icon" className="icon" />
          </div>
          <div className="m-3">
            <img
              src="././images/Notifications.png"
              alt="icon"
              className="icon"
            />
          </div>
        </div>
        <div className="m-3">
          {" "}
          <img src="././images/Logout.png" className="icon" />
        </div>
      </div>
    </>
  );
};
export default Navigation;
