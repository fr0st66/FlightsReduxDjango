import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet  } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen({ match, history }) {
  const flightId = match.params._id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (flightId) {
      dispatch(addToCart(flightId));
    }
  }, [dispatch, flightId]);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?");
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant="info">
            Your cart is empty. <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.flight}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.to} fluid rounded />
                  </Col>

                  <Col m={3}>
                    <Link to={`/flight/${item.id}`}>{item.to}</Link>
                  </Col>


                  <Col md={3}>
                    <Form.Control
                      as="select"
                      value={item}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.flight, Number(e.target.value))
                        )
                      }
                    >
                    </Form.Control>
                  </Col>

                  <Col md={1}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.flight)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc , 0)})
                items
              </h2>
              ₹
              {cartItems
                .reduce((acc, item) => acc  * item.id, 0)
                .toFixed(2)}
            </ListGroup.Item>
          </ListGroup>

          <ListGroup.Item>
            <Button
              type="button"
              className="w-100"
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Proceed To Checkout
            </Button>
          </ListGroup.Item>
        </Card>
      </Col>
      <Outlet />
    </Row>
    
  );
}

export default CartScreen;
