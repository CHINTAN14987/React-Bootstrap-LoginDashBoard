import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Team.css";

const Team = () => {
  const now = 93;
  const now1 = 73;
  const now2 = 13;
  return (
    <div className="teamDetails" style={{ padding: "0" }}>
      <div className="d-flex justify-content-between align-items-center m-3 ">
        <h3 style={{ color: "rgba(54, 81, 122, 255)" }}>Team Members</h3>
        <h6 style={{ color: "#90b0fc", fontSize: "0.9rem", fontWeight: "600" }}>
          {" "}
          View All
        </h6>
      </div>
      <div
        className=" d-flex align-items-center justify-content-between flex-wrap Individual"
        style={{ backgroundColor: "#fff" }}
      >
        <div
          className=" d-flex align-items-center justify-content-center"
          style={{ margin: "10px 10px 0 10px" }}
        >
          <div>
            <img
              style={{ borderRadius: "50%" }}
              src="./../images/AndrewImage.png"
              alt="man"
            />
            <span>Andrew Johnston</span>
          </div>
        </div>

        <div>
          <button className="teamButtonOne" style={{ margin: "10px" }}>
            Top Trader
          </button>
        </div>
      </div>

      <div
        className=" d-flex align-items-center justify-content-between flex-wrap Individual"
        style={{ backgroundColor: "#fff" }}
      >
        <div className=" d-flex align-items-center">
          <div>
            <img
              src="./../images/Anna.png"
              alt="man"
              style={{ borderRadius: "50%", marginLeft: "-1px" }}
            />
            <span>Anna Atkinsons</span>
          </div>
        </div>

        <div>
          <button className="teamButtonTwo" style={{ margin: "10px" }}>
            Banker
          </button>
        </div>
      </div>

      <div
        className=" d-flex align-items-center justify-content-between flex-wrap Individual"
        style={{ backgroundColor: "#fff" }}
      >
        <div className=" d-flex align-items-center">
          <div>
            <img
              src="./../images/Mark.png"
              alt="man"
              style={{ borderRadius: "50%", marginLeft: "2px" }}
            />
            <span>Mark Atkinsons</span>
          </div>
        </div>

        <div>
          <button className="teamButtonOne" style={{ margin: "10px" }}>
            Top Trader
          </button>
        </div>
      </div>

      <div
        className=" d-flex align-items-center justify-content-between flex-wrap Individual"
        style={{ backgroundColor: "#fff" }}
      >
        <div className=" d-flex align-items-center">
          <div>
            <img
              src="./../images/Johanna.png"
              alt="man"
              style={{ borderRadius: "50%" }}
            />
            <span>Johanna Tairons</span>
          </div>
        </div>

        <div>
          <button className="teamButtonTwo" style={{ margin: "10px" }}>
            Banker
          </button>
        </div>
      </div>
    </div>
  );
};
export default Team;
