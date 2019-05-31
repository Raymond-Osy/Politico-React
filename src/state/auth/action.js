import { toastr } from 'react-redux-toastr';
import axios from '../../lib/axios';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actionTypes';

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
