import axios from "axios";

import {
    ORDER_ADD,
    MY_ORDERS,
    ALL_ORDERS_ADMIN,
    ORDER_DELETE,

} from "../actionTypes"

export const addOrder = (order) => async (dispatch, getState) => {
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(`/api/add/`, order, config);
  
      dispatch({
        type: ORDER_ADD,
        payload: data,
      });
  };

export const getMyOrders = () => async (dispatch, getState) => {

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/tickets/`, config); 
                                    //  or "/api/order/" - need to check what we get

    dispatch({
      type: MY_ORDERS,
      payload: data,
    });
};

export const allOrdersAdmin = () => async (dispatch, getState) => { 
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      
      const { data } = await axios.get(`/api/order-all/`, config);
      dispatch({
        type: ALL_ORDERS_ADMIN,
        payload: data,
      });
  };

  export const deleteOrder = (id) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();
  
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    //  delete order - Admin Access
    const { data } = await axios.delete(`/api/order-delete/${id}`, config);
  
    dispatch({
      type: ORDER_DELETE,
      payload: data,
    });
  }; 


//   # order - views3
//     path('add/',views3.addOrderTicket,name="orders-add"),           (user) DONE
//     path('order/', views3.getMyOrder, name='my_order'),             (user)!!!DONE
    // path('order-all/', views3.getAllOrders, name='order'),          (admin)!!DONE
//     path('order-delete/<id>', views3.deleteOrder, name='del_order') (admin) DONE


// tickets Path in Ticket/Cart Actions 
//     path('tickets/', views3.getMyTickets, name='tickets'),          (user)->
//     path('tickets-all/', views3.getAllTickets, name='all-tickets'), (admin)
