import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Ledger.css";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BsCurrencyEuro, BsCurrencyDollar } from "react-icons/bs";
import { BiYen } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const Ledger = () => {
  return (
    <div>
      <Row
        className="justify-content-between align-items-center row1"
        style={{ margin: "2rem" }}
      >
        <Col className="buttonRowOne" lg={6} md={6} sm={12}>
          <h2 style={{ color: "rgba(54, 81, 122, 255)" }}>DashBoard</h2>
          <h6 style={{ color: "#aeb3c7" }}>Welcome Back Andrew</h6>
        </Col>
        <Col className="p-3" lg={6} md={6} sm={12}>
          <div className="d-flex align-items-center justify-content-center buttonRow">
            <div>
              <Button
                style={{
                  backgroundColor: "#01e38c",
                  border: "transparent",
                }}
              >
                + Add Unit
              </Button>
            </div>
            <img
              src="./../images/AndrewImage.png"
              alt="man"
              style={{
                borderRadius: "50%",
                marginLeft: "15px",
                marginRight: "15px",
              }}
            />
            <span style={{ color: "#aeb3c7" }}>Andrew Johnstons</span>
          </div>
        </Col>
      </Row>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col className="ledgerContainer" sm={6} xs={12} md={3} lg={3}>
            <h6 className={"ledgerKey"}>BALANCE</h6>
            <h3>$59000</h3>
          </Col>
          <Col className="ledgerContainer" sm={6} xs={12} md={3} lg={3}>
            <h6 className="ledgerKey">PROFITS</h6>
            <div className="d-flex  align-items-center justify-content-center ">
              <h3 style={{ marginRight: "5px" }}>$950.00</h3>
              <div style={{ color: "#01e38c" }}>
                <GoTriangleUp />
                <span>+56%</span>
              </div>
            </div>
          </Col>

          <Col className="ledgerContainer" sm={6} xs={12} md={3} lg={3}>
            <h6 className="ledgerKey">LOSSESS</h6>
            <div className="d-flex justify-content-center align-items-center">
              <h3 style={{ marginRight: "5px" }}>$450.00</h3>
              <div style={{ color: "#ff4f78" }}>
                <GoTriangleDown />
                <span>+56%</span>
              </div>
            </div>
          </Col>
          <Col
            className=" ledgerContainer ledgerContainerLast "
            sm={6}
            xs={12}
            md={3}
            lg={3}
          >
            <h6 className="ledgerKey">CURRENCIES</h6>
            <h3>$450.00</h3>
            <button className="currency">
              <BsCurrencyBitcoin className="currencySign" />
            </button>
            <button className="currency">
              <BsCurrencyDollar className="currencySign" />
            </button>
            <button className="currency">
              <BsCurrencyEuro className="currencySign" />
            </button>
            <button className="currency">
              <BiYen className="currencySign" />
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ledger;
