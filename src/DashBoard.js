import React from "react";
import Ledger from "./components/Ledger/Ledger";
import Countries from "./components/Countries/Country";
import Graph from "./components/Graph/Graph";
import "bootstrap/dist/css/bootstrap.min.css";
import Team from "./components/Team/Team";
import CountryProgress from "./components/Team/CountryProgress";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation/Navigation";
const Dashboard = () => {
  return (
    <div className="d-flex  DashBoardHome">
      <Navigation />
      <div className="displayedDashBoard">
        <Ledger />
        <Graph />

        <Container style={{ width: "85%" }}>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Team />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <CountryProgress />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Dashboard;
