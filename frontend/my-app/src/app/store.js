import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  flightsListHomeReducer,
  flightsListReducer,
  flightDetailsReducer,
  deleteFlightReducer,
  addFlightReducer,
  updateFlightReducer,
  countryListReducer,
  countryOneReducer,
  airlineListReducer,
  airlineOneReducer,
  addAirlineReducer,
  deleteAirlineReducer,
} from "../reducers/flightReducers";

import {
  addOrderReducer,
  getMyOrdersReducer,
  allOrdersAdminReducer,
  deleteOrderReducer
} from "../reducers/orderReducers";

import {
  userLoginReducer,
  RegisterReducer,
  getUserDetailsReducer,
  updateUserProfileReducer,
  getAllUsersReducer,
  deleteUserReducer,
  updateUserReducer,
} from "../reducers/userReducers";

import {
  cartReducer
} from "../reducers/cartReducers";

const reducer = combineReducers({
  flightsList1: flightsListHomeReducer,
  flightsListAll: flightsListReducer,
  flightDetail: flightDetailsReducer,
  flightDelete: deleteFlightReducer,
  flightAdd: addFlightReducer,
  flightUpdate: updateFlightReducer,
  countriesList: countryListReducer,
  countryDetail:countryOneReducer,
  airlinesList: airlineListReducer,
  airlineDetail: airlineOneReducer,
  airlineAdd: addAirlineReducer,
  airlineDelete: deleteAirlineReducer,
  odrerAdd: addOrderReducer,
  ordersAllMy:getMyOrdersReducer,
  ordersAllAdmin: allOrdersAdminReducer,
  orderDelete: deleteOrderReducer,
  userLogin: userLoginReducer,
  userRegister: RegisterReducer,
  userDetails: getUserDetailsReducer,
  userUpdateProfile: updateUserProfileReducer,
  usersAllAdmin: getAllUsersReducer,
  userDelete: deleteUserReducer,
  userUpdateAdmin: updateUserReducer,
  cart: cartReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware, thunk))

);
export default store;