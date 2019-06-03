import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';
import App from './pages/App';
import store from './state/store';
import { Provider } from 'react-redux';
import { setAxiosHeader } from './lib/axios';
import { LOGIN_SUCCESS } from './state/auth/actionTypes';

if (localStorage.getItem('users-token')) {
    store.dispatch({
      type: LOGIN_SUCCESS,
      payload: jwtDecode(localStorage.getItem('users-token')),
    });
    setAxiosHeader(localStorage.getItem('users-token'));
  }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root')
);
