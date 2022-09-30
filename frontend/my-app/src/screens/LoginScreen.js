import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

const LoginScreen = (location, history) => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch();
    const redirect = location.search ? location.search.split("=")[1] : "/";
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo, } = userLogin;
  
    useEffect(() => {
      if (userInfo) {
        history.push(redirect);
      }
    }, [history, userInfo, redirect]);
  
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(login(email, password));
    };

    return (
     <div>
            <br>
            </br>
            <br></br>
        <h3>Sign In</h3>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </Form.Group>
  
          <Button type="submit" variant="primary" className="mt-3">
            Sign In
          </Button>
        </Form>
  
        <Row className="py-3">
          <Col>
            New Customer ?{" "}
            <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
              Register
            </Link>
          </Col>
        </Row>
        </div>
    );
  }

export default LoginScreen