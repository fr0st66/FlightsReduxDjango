import axios from "axios";
import { Outlet  } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React,{ useState, useEffect } from "react";

const Flight = (id) => {
  const [flight, setFlight] = useState([]);

  const getFlight = async () => {
    const result = await axios.get(`http://localhost:8000/api/flight/${id}`);
    setFlight(result.data);
  };

  useEffect(() => {
    getFlight();
  }, );

  return (
    <Card className="my-3 p-3 rounded">
          <Card.Body>
        <Link to={`/flight/${flight.from}`}>
          <Card.Title as="div">
            <strong>{flight.from}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h3">₹{flight.to}</Card.Text>
          </Card.Body>
          <Outlet />
        </Card>
    );
}

export default Flight;


