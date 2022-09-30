import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Flight from "../components/Flight";
import { useDispatch, useSelector } from "react-redux";
import { flightsList } from "../actions/flightActtions";


const HomeScreen = () => {
  const dispatch = useDispatch();
  const flightsList1 = useSelector((state) => state.flightsList1);
  
  const { flights } = flightsList1;

  useEffect(() => {
    dispatch(flightsList());
  }, [dispatch]);
 

  return (
    <div>
      <br>
      </br>
      <br>
      </br>
      <h1>Flights</h1>
        <div>
          <Row>
            {flights.map((flight) => {
              return (
                <Col key={flight.id} sm={12} md={6} lg={4} xl={3}>
                  <Flight> flight={flight.to} </Flight>
                 
                </Col>
              );
            })}
          </Row>
        </div>
       
    </div>
  );
}
export default HomeScreen