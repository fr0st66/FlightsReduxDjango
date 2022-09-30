import axios from "axios";
import {
    CART_ADD_FLIGHT,
    CART_REMOVE_FLIGHT
}from "../actionTypes";

export const addToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/flight/${id}`);
    dispatch({
      type: CART_ADD_FLIGHT,
      payload: {
        flight: data.id,
        airline_company: data.airline_company.name,
        origin_country: data.origin_country.name,
        destination_country:data.destination_country.name,
      },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };

  export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: CART_REMOVE_FLIGHT,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  

  


  
  