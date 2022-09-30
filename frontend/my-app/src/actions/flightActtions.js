import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_FLIGHT_LIST,
  GET_FLIGHT_LIST1,
  GET_FLIGHT_DETAILS,
  DELETE_FLIGHT,
  ADD_FLIGHT,
  UPDATE_FLIGHT,
  GET_COUNTRY_LIST,
  GET_ONE_COUNTRY,
  GET_AIRLINE_LIST,
  GET_ONE_AIRLINE,
  ADD_AIRLINE,
  DELETE_AIRLINE,
} from "../actionTypes";


export const flightsListHome = createAsyncThunk(
  "flights list",
  async (dispatch) => {
    const { data } = await axios.get(`/api/`);
    // console.log(data);
    dispatch({
      type: GET_FLIGHT_LIST,
      payload: data,
    });
  }
);

export const flightsList = (id = "") =>
  createAsyncThunk("flights list1", async (dispatch) => {
    // if we dont have ID - get all Flights - second URL - same data return
    const { data } = await axios.get(`/api/flight/${id}`);
    console.log(data);
    dispatch({
      type: GET_FLIGHT_LIST1,
      payload: data,
    });
  }
  );

export const flightDetails = (id) =>
  createAsyncThunk("flights details", async (dispatch) => {
    const { data } = await axios.get(`/api/flight/${id}`);
    console.log(data);
    dispatch({
      type: GET_FLIGHT_DETAILS,
      payload: data,
    });
  }
  );

//  only  Admin
export const deleteFlight = (id) =>
  createAsyncThunk("flight delete", async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(`/api/delete-flight/${id}/`, config);
    dispatch({
      type: DELETE_FLIGHT,
    });
  }
  );

//  only with Admin(staff)+super user
export const addFlight = () =>
  createAsyncThunk("flight add", async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`/api/create-flight/`, {}, config);
    dispatch({
      type: ADD_FLIGHT,
      payload: data,
    });
  }
  );

//  only with Authication
export const updateFlight = (id) =>
  createAsyncThunk("flights update", async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/api/update-flight/${id}/`, config);

    dispatch({
      type: UPDATE_FLIGHT,
      payload: data,
    });
  }
  );

export const countryList = createAsyncThunk(
  "country list",
  async (dispatch) => {
    const { data } = await axios.get(`/api/country/`);
    console.log(data);
    dispatch({
      type: GET_COUNTRY_LIST,
      payload: data,
    });
  }
);

export const countryOne = (id) =>
  createAsyncThunk("country one", async (dispatch) => {
    const { data } = await axios.get(`/api/country/${id}`);
    dispatch({
      type: GET_ONE_COUNTRY,
      payload: data,
    });
  });

export const airlineList = (id = "") =>
  createAsyncThunk("airline list", async (dispatch) => {
    // if we dont have ID - get all airlines
    const { data } = await axios.get(`/api/airline${id}`);
    dispatch({
      type: GET_AIRLINE_LIST,
      payload: data,
    });
  });

export const airlineOne = (id) =>
  createAsyncThunk("airline one", async (dispatch) => {
    const { data } = await axios.get(`/api/airline/${id}`);
    dispatch({
      type: GET_ONE_AIRLINE,
      payload: data,
    });
  });

//  only with Authication
export const addAirline = () =>createAsyncThunk(
  "airline add",
 async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  const { data } = await axios.post(`/api/add-airline/`, {}, config);
  dispatch({
    type: ADD_AIRLINE,
    payload: data,
  });
});

//  only with Authication
export const deleteAirline = (id) =>
createAsyncThunk(
  "airline delete", async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  const { data } = await axios.delete(`/api/delete-airline/${id}/`, config);
  dispatch({
    type: DELETE_AIRLINE,
  });
});

// # bace - views1
//     path('', views1.getAllFlights, name='flight_list'),
//     path('country/', views1.getAllCountries, name='country'),
//     path('country/<id>', views1.getCountry, name='country'),
//     path('airline/', views1.getAllAirCompanies, name='airline-company'),
//     path('airline/<id>', views1.getAirCompany, name='airline-company'),
//     path('flight/', views1.getAllFlights, name='all_flights'),
//     path('flight/<id>', views1.getFlight, name='flight'),

// # aircompanies - views4
//     path('create-flight/',views4.createFlight,name="create_flight"),
//     path('update-flight/<id>',views4.updateFlight,name="update_flight"),
//     path('delete-flight/<id>',views4.deleteFlight,name="delete_flight"),
//     path('add-airline/',views4.addAirCompany,name="add_airline"),
//     path('delete-airline/<id>',views4.deleteAirCompany,name="delete_airline"),

//  12 actions - All action DONE
