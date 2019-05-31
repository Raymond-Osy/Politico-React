import { initialState } from './state';
import {
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOADING, LOGIN_SUCCESS, LOGIN_FAILURE
} from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        signupLoading: true,
        signupFailure: false,
        signupSuccess: false
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupSuccess: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signupFailure: true,
        signupError: action.payload.response.data
      };
    case LOADING:
      return {
        ...state,
        loginLoading: true,
        loginSuccess: false,
        loginFailure: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginFailure: true,
      };
    default:
      return state;
  }
};
