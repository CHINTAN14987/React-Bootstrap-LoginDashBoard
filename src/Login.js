import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("DezzexTech@gmail.com");
  const [password, setPassword] = useState("**********");
  let navigate = useNavigate();

  const SubmitHandle = (e) => {
    e.preventDefault();
    navigate("/Dashboard");
  };
  return (
    <Container>
      <h3 className="credentials">Please Enter Your Credentials..</h3>
      <form className="myForm">
        <label>Email Adress</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>

        <Button className="mt-4" onClick={SubmitHandle} type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};
export default Login;
