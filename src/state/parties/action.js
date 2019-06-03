import { toastr } from 'react-redux-toastr';
import axios, { setAxiosHeader } from '../../lib/axios';
import { PARTIES_REQUEST, PARTIES_SUCCESS, PARTIES_FAILURE } from './actionTypes';

export const partiesAction = (route = '/parties') => async dispatch => {
  try {
    dispatch({
      type: PARTIES_REQUEST
    });
    const allParties = await axios.get(route);
    dispatch({
      type: PARTIES_SUCCESS,
      payload: allParties.data.data
    });
  } catch (err) {
    dispatch({
      type: PARTIES_FAILURE,
      payload: err
    });
    toastr.error('Error', 'There was an error, try again in a bit');
  }
};
