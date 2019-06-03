import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import App from '../App';
import { mockStoreData } from '../../__mocks__/mockStore';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);


afterEach(cleanup);

test('<App /> component', () => {
  const app = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  expect(app).toBeTruthy();
  expect(app).toMatchSnapshot();
});
