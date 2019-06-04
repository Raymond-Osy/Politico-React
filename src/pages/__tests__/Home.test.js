import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reduxStore from 'redux-mock-store';
import { cleanup, render } from 'react-testing-library';
import { mockStoreData } from '../../__mocks__/mockStore';
import Home from '../Home/Home';

const mockStore = reduxStore();

const store = mockStore(mockStoreData);

afterEach(cleanup);

test('should renders <Home /> component', () => {
  const homePage = render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
  expect(homePage).toBeTruthy();
  expect(homePage).toMatchSnapshot();
});
