import {
    ORDER_ADD,
    MY_ORDERS,
    ALL_ORDERS_ADMIN,
    ORDER_DELETE,
} from "../actionTypes"

export const addOrderReducer = (state = {}, action) => {
    switch (action.type) {

      case ORDER_ADD:
        return {
          success: true,
          order: action.payload,
        };
  
      default:
        return state;
    }
  };
  export const getMyOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
      case MY_ORDERS:
        return {
          orders: action.payload,
        };
  
      default:
        return state;
    }
  };

  export const allOrdersAdminReducer = (state = { orders: [] }, action) => {
    switch (action.type) {

      case ALL_ORDERS_ADMIN:
        return {
          orders: action.payload,
        };
  
      default:
        return state;
    }
  };

  export const deleteOrderReducer = (state = {}, action) => {
    switch (action.type) {
      case ORDER_DELETE:
        return {
          success: true,
        };
      default:
        return state;
    }
  }; 