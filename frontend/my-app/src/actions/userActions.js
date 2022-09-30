import axios from "axios";
import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
  USER_DETAILS,
  USER_UPDATE_ADMIN,
  USER_UPDATE_PROFILE,
  ALL_USERS,
  USER_DELETE,
} from "../actionTypes";

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const { data } = await axios.post(
    "/api/login/",
    { username: email, password: password },
    config
  );

  dispatch({
    type: USER_LOGIN,
    payload: data,
  });

  localStorage.setItem("userInfo", JSON.stringify(data));
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");

  dispatch({
    type: USER_LOGOUT,
  });
};

export const register = (name, email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const { data } = await axios.post(
    "/api/register/",
    { name: name, email: email, password: password },
    config
  );

  dispatch({
    type: USER_REGISTER,
    payload: data,
  });
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  // get user by ID - Admin Access
  const { data } = await axios.get(`/api/user/${id}/`, config);

  dispatch({
    type: USER_DETAILS,
    payload: data,
  });
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const { data } = await axios.put(`/api/profile/update`, user, config);
  dispatch({
    type: USER_UPDATE_PROFILE,
    payload: data,
  });
};

export const getAllUsers = () => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  //  get all users - Admin Access
  const { data } = await axios.get(`/api/users/`, config);
  dispatch({
    type: ALL_USERS,
    payload: data,
  });
};

export const deleteUser = (id) => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  //  delete user - Admin Access
  const { data } = await axios.delete(`/api/delete/${id}`, config);

  dispatch({
    type: USER_DELETE,
    payload: data,
  });
};

export const updateUser = (user) => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  // update user by admin - Admin Access
  const { data } = await axios.put(`/api/update/${user._id}/`, user, config);

  dispatch({
    type: USER_UPDATE_ADMIN,
  });
};


// # user - views2
//     path('register/',views2.registerUser,name='register'),
//     path('profile/',views2.getUser,name="user_profile"),
//     path('profile/update',views2.updateUserByUser,name="user_profile_apdate"),
//     path('login/', views2.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
//     path('update/<id>/',views2.updateUserByAdmin,name="updateUser"),
//     path('delete/<id>/',views2.deleteUser,name="deleteUser"),
//     path('user/<id>', views2.getUserById, name='user'),
//     path('users/',views2.getUsers,name="users"),

// all users activity = DONE