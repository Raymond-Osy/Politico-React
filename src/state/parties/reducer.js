import { initialState } from './state';
import { PARTIES_REQUEST, PARTIES_SUCCESS, PARTIES_FAILURE } from './actionTypes';


export default (state = initialState, action) => {
  switch (action.type) {
    case PARTIES_REQUEST:
      return {
        ...state,
        partiesRequest: true,
        partiesSuccess: false,
        partiesFailure: false
      };
    case PARTIES_SUCCESS:
      return {
        ...state,
        partiesSuccess: true,
        partiesRequest: false,
        parties: action.payload
      };
    case PARTIES_FAILURE:
      return {
        ...state,
        partiesFailure: true,
        partiesRequest: false,
        partiesError: action.payload.response.data
      };
    default:
      return state;
  }
};
