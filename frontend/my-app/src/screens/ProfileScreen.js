import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { getMyOrders } from "../actions/orderActions";

function ProfileScreen({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const updateProfile = useSelector((state) => state.updateProfile);
  const { success } = updateProfile;
  const ordersMy = useSelector((state) => state.ordersMy);
  const { orders } = ordersMy;

 
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
    
      if (!user || !user.name || success || userInfo._id !== user._id) {
        dispatch(getUserDetails("profile"));
        dispatch(getMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password incorrect");
    } else {
      dispatch(
        updateUserProfile({
          id: user.id,
          name: name,
          email: email,
          password: password,
        })
      );
      setMessage("");
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2>My Profile</h2>

        {message && <Message variant="danger">{message}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
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

          <Form.Group controlId="passwordConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="mt-3">
            Update
          </Button>
        </Form>
      </Col>

      <Col md={9}>
        <h2>My Orders</h2>
          <Table striped responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>
                    {order.createdAt ? order.createdAt.substring(0, 10) : null}
                  </td>
                  <td>${order.totalPrice}</td>
                  <td>
                     (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className="btn-sm">Details</Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
      </Col>
    </Row>
  );
}

export default ProfileScreen;
