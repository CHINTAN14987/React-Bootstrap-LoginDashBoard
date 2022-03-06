import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./DashBoard";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
