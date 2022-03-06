import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const Countries = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    datasets: [
      {
        data: [33, 53, 85, 41, 44, 65],

        borderColor: "green",
      },
    ],
    options: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <Container>
      <Row>
        <Col>
          <h4 className={"country"}>Italy</h4>
          <h3>475</h3>

          <Line data={data} />
        </Col>
      </Row>
    </Container>
  );
};

export default Countries;
