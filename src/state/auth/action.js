import { toastr } from 'react-redux-toastr';
import axios, { setAxiosHeader } from '../../lib/axios';
import { decodeToken, setLocalStorage } from '../../lib/auth';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actionTypes';

export const signup = userData => async dispatch => {
  try {
    dispatch({
      type: SIGNUP_REQUEST
    });
    const registeredUser = await axios.post('/auth/signup/', userData);
    const { token } = registeredUser.data.data[0];
    const decodedToken = decodeToken(token);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: decodedToken
    });
    toastr.success('Success', 'Your registration was successful!');
    setLocalStorage('users-token', token);
    setAxiosHeader(token);
  } catch (err) {
    dispatch({
      type: SIGNUP_FAILURE,
      payload: err
    });
    toastr.error('Error', err.response.data.error);
  }
};

export const login = formData => async dispatch => {
  try {
    dispatch({
      type: LOADING,
    });
    const authenticatedUser = await axios.post('/auth/login', formData);
    const { token } = authenticatedUser.data.data[0];
    const decoded = decodeToken(token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: decoded
    });
    toastr.success('Success', 'Account verification was successful!');
    setLocalStorage('users-token', token);
    setAxiosHeader(token);
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err
    });
    toastr.error('Error', 'Incorrect email or password');
  }
};

export const signOutUser = redirect => async dispatch => {
  localStorage.removeItem('users-token');
  redirect.push('/');
  await dispatch({
    type: LOGOUT
  });
  toastr.success('Success', 'Logout successful, see you around!');
};
