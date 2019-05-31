import { toastr } from 'react-redux-toastr';
import axios from '../../lib/axios';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const signup = userData => async dispatch => {
  try {
    dispatch({
      type: SIGNUP_REQUEST
    });
    const registeredUser = await axios.post('/auth/signup/', userData);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: registeredUser.data[0]
    });
    toastr.success('Success', 'Signup Success');
  } catch (err) {
    dispatch({
      type: SIGNUP_FAILURE,
      payload: err
    });
    toastr.error('Error', err.response.data.error);
  }
};

export const login = (formData, redirect) => async dispatch => {
  try {
    console.log('The Login actiom is Loading--------------------------------');
    dispatch({
      type: LOADING,
    });
    const authenticatedUser = await axios.post('/auth/login', formData);
    console.log('data of logged in user------', authenticatedUser);
    // dispatch({
    //   type: LOGIN_SUCCESS,
    //   payload: authenticatedUser
    // });
    // const decoded = decodeToken(login.data.data.token);
    // setLocalStorage('ah-token', login.data.data.token);
    // dispatch(signInSuccess(decoded));
    // setAxiosHeader(login.data.data.token);
    // redirect.push('/userProfile');
  } catch (err) {
    dispatch({
      type: SIGNUP_FAILURE,
      payload: err
    });
  }
};
