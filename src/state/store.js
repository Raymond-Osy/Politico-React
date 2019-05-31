/* eslint-disable no-underscore-dangle */

import {
  createStore, applyMiddleware, compose, combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { auth } from './auth';

const middleware = process.env.NODE_ENV !== 'production' ? [logger, thunk] : [thunk];
const rootReducer = combineReducers({
  auth: auth.authReducer,
  toastr: toastrReducer
});

const reduxDevTools = process.env.NODE_ENV === 'production' ? p => p : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middleware),
    reduxDevTools,
  )
);

export default store;
