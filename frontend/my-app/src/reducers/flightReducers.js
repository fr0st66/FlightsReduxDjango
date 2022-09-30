import {
  GET_FLIGHT_LIST,
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

export const flightsListHomeReducer = (state = { flights: [] }, action) => {
  switch (action.type) {
    case GET_FLIGHT_LIST:
      return {
        flights: action.payload.flights,
        page: action.payload.page,
      };
    default:
 
      return state;
  }
};

export const flightsListReducer = (state = { flights: [] }, action) => {
  switch (action.type) {
    case GET_FLIGHT_LIST:
      return {
        flights: action.payload.flights,
      };
    default:
      return state;
  }
};

export const flightDetailsReducer = (state = { flight: {} }, action) => {
  switch (action.type) {
    case GET_FLIGHT_DETAILS:
      return {
        flight: action.payload,
      };
    default:
      return state;
  }
};

export const deleteFlightReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_FLIGHT:
      return {
        success: true,
      };
    default:
      return state;
  }
};

export const addFlightReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_FLIGHT:
      return {
        success: true,
        flight: action.payload,
      };
    default:
      return state;
  }
};

export const updateFlightReducer = (state = { flight: {} }, action) => {
  switch (action.type) {
    case UPDATE_FLIGHT:
      return {
        success: true,
        flight: action.payload,
      };

    default:
      return state;
  }
};

export const countryListReducer = (state = { countries: [] }, action) => {
  switch (action.type) {
    case GET_COUNTRY_LIST:
      return {
        countries: action.payload.countries,
      };
    default:
      return state;
  }
};

export const countryOneReducer = (state = { country: {} }, action) => {
  switch (action.type) {
    case GET_ONE_COUNTRY:
      return {
        country: action.payload,
      };
    default:
      return state;
  }
};

export const airlineListReducer = (state = { airlines: [] }, action) => {
  switch (action.type) {
    case GET_AIRLINE_LIST:
      return {
        airlines: action.payload.countries,
      };
    default:
      return state;
  }
};

export const airlineOneReducer = (state = { airline: {} }, action) => {
  switch (action.type) {
    case GET_ONE_AIRLINE:
      return {
        airline: action.payload,
      };
    default:
      return state;
  }
};

export const addAirlineReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_AIRLINE:
      return {
        success: true,
        airline: action.payload,
      };
    default:
      return state;
  }
};

export const deleteAirlineReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_AIRLINE:
      return {
        success: true,
      };
    default:
      return state;
  }
};
