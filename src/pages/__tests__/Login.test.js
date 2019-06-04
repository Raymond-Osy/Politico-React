import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reduxStore from 'redux-mock-store';
import { cleanup, render } from 'react-testing-library';
import { mockStoreData } from '../../__mocks__/mockStore';
import { Login } from '../Login/Login';

const mockStore = reduxStore();

const store = mockStore(mockStoreData);

const props = {
  auth: {
    loginError: {}
  }
};

afterEach(cleanup);

test('should renders <Login /> component', () => {
  const LoginComponent = render(
    <Provider store={store}>
      <BrowserRouter>
        <Login { ...props } />
      </BrowserRouter>
    </Provider>
  );
  expect(LoginComponent).toBeTruthy();
  expect(LoginComponent).toMatchSnapshot();
});
