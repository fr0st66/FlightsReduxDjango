import {
    CART_ADD_FLIGHT,
    CART_REMOVE_FLIGHT,
} from "../actionTypes";


export const cartReducer = (
    state = {
      cartItems: [],
    },
    action
  ) => {
    switch (action.type) {
      case CART_ADD_FLIGHT: {
        const item = action.payload;
          return {
            ...state,
            cartItems: [...state.cartItems, item]
          };
        }
      
      case CART_REMOVE_FLIGHT: {
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.flight !== action.payload),
        };
      }
  
      default:
        return state;
      }
    };
    