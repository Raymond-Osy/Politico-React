import { initialState } from './state';
import partiesReducer from './reducer';

export const parties = {
  initialState,
  partiesReducer,
  stateKey: 'parties',
};
