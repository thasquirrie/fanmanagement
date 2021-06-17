import axios from 'axios';
import {
 USER_LOGIN_FAIL,
 USER_LOGIN_REQUEST,
 USER_LOGIN_SUCCESS,
} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
 try {
  dispatch({ type: USER_LOGIN_REQUEST });

  const config = {
   headers: {
    'Content-Type': 'application/json',
   },
  };
  const {
   data: {
    data: { user },
    token,
   },
  } = await axios({
   method: 'POST',
   url: 'http://localhost:8000/api/v1/users/login',
   data: { email, password },
   config,
  });

  dispatch({
   type: USER_LOGIN_SUCCESS,
   payload: { user, token },
  });

  localStorage.setItem('userInfo', JSON.stringify({ user, token }));
 } catch (error) {
  dispatch({
   type: USER_LOGIN_FAIL,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};

export const logout = () => (dispatch) => {
 localStorage.removeItem('userInfo');
 localStorage.removeItem('token');
 dispatch({});
};