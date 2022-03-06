import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CountryProgress = () => {
  const now = 93;
  const now1 = 73;
  const now2 = 13;
  return (
    <>
      <Container
        className="countryDetails"
        style={{ backgroundColor: "#fff", padding: "0" }}
      >
        <div
          className="d-flex justify-content-between align-items-center  p-3"
          style={{ backgroundColor: "#fcfcfc" }}
        >
          <h3 style={{ color: "rgba(54, 81, 122, 255)" }}>Comparison</h3>
          <h6
            style={{ color: "#90b0fc", fontSize: "0.9rem", fontWeight: "600" }}
          >
            View All
          </h6>
        </div>
        <div
          className="d-flex flex-column justify-content-center countryProgress"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="d-flex flex-column p-3">
            <div>
              <img
                src="./../images/USA.jpeg"
                alt="country"
                style={{ marginRight: "10px", marginTop: "-5px" }}
              />
              <span style={{ color: "#bdc0cc", fontWeight: "600" }}>
                United States
              </span>
            </div>
            <div style={{ margin: "5px 0 5px 10px" }}>
              <div className="d-flex align-items-center ">
                <ProgressBar
                  now={now1}
                  label={`${now}%`}
                  max={now1}
                  style={{ width: `${now}%` }}
                  visuallyHidden
                />
                <span style={{ marginLeft: "5px", color: "#bdc0cc" }}>93%</span>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column p-3">
            <div>
              <img
                src="./../images/Italy.png"
                alt="country"
                style={{
                  marginRight: "10px",
                  marginTop: "-5px",
                  marginLeft: "7px",
                }}
              />
              <span style={{ color: "#bdc0cc", fontWeight: "600" }}>Italy</span>
            </div>
            <div style={{ margin: "5px 0 5px 10px" }}>
              <div className="d-flex align-items-center ">
                <ProgressBar
                  now={now1}
                  label={`${now1}%`}
                  max={now1}
                  style={{ width: `${now1}%` }}
                  visuallyHidden
                />
                <span style={{ marginLeft: "5px", color: "#bdc0cc" }}>73%</span>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column p-3">
            <div>
              <img
                src="./../images/Spain.png"
                alt="country"
                style={{
                  marginRight: "10px",
                  marginTop: "-5px",
                  marginLeft: "5px",
                }}
              />
              <span style={{ color: "#bdc0cc", fontWeight: "600" }}>Spain</span>
            </div>
            <div style={{ margin: "5px 0 5px 10px" }}>
              <div className="d-flex align-items-center ">
                <ProgressBar
                  now={now2}
                  label={`${now2}%`}
                  max={now2}
                  style={{ width: `${now2}%` }}
                  visuallyHidden
                />
                <span style={{ marginLeft: "5px", color: "#bdc0cc" }}>13%</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CountryProgress;
