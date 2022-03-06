import React from "react";

import { Line } from "react-chartjs-2";
import Data from "./Data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Graph.css";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

export default function Graph() {
  return (
    <Container className="graphContainer">
      <Row lg={6} md={6} sm={3} xs={2}>
        {Data?.map((item, index) => {
          const { mydata, myborderColor, country, value } = item;
          return (
            <div className="d-flex flex-column align-items-center justify-content-between graphCol">
              <h6 className="country">{country}</h6>
              <div className="d-flex align-items-center">
                <h4 className="colValue" style={{ fontWeight: "600" }}>
                  {value}
                </h4>
                {myborderColor === "#01e38c" ? (
                  <GoTriangleUp className="colourGreen" />
                ) : (
                  <GoTriangleDown className="colourRed" />
                )}
              </div>

              <Line
                className="chart"
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

                  datasets: [
                    {
                      data: mydata,
                      borderColor: myborderColor,
                      borderWidth: 1.5,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  elements: {
                    point: {
                      radius: 0,
                    },
                  },
                  scales: {
                    x: {
                      display: false,
                      grid: {
                        display: false,
                      },
                    },
                    y: {
                      display: false,
                      grid: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            </div>
          );
        })}
      </Row>
    </Container>
  );
}
