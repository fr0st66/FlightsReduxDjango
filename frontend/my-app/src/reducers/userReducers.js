import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
  USER_DETAILS,
  USER_UPDATE_PROFILE,
  ALL_USERS,
  USER_DELETE,
  USER_UPDATE_ADMIN,
} from "../actionTypes";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        userInfo: action.payload,
      };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
export const RegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        userInfo: action.payload,
      };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const getUserDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        user: action.payload,
      };
      
    default:
      return state;
  }
};

export const updateUserProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE:
      return {
        success: true,
        user: action.payload,
      };

    default:
      return state;
  }
};

export const getAllUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ALL_USERS:
      return {
        users: action.payload,
      };

    default:
      return state;
  }
};

export const deleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE:
      return {
        success: true,
      };

    default:
      return state;
  }
};

export const updateUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_UPDATE_ADMIN:
      return {
        success: true,
      };

    default:
      return state;
  }
};
