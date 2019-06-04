import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reduxStore from 'redux-mock-store';
import { cleanup, render } from 'react-testing-library';
import { mockStoreData } from '../../__mocks__/mockStore';
import { Signup } from '../Signup/Signup';

const mockStore = reduxStore();
const store = mockStore(mockStoreData);

const props = {
  auth: {
    signupError: {},
  }
};

afterEach(cleanup);

test('Should render the <signup /> component', () => {
  const SignupComponent = render(
    <Provider store={store}>
        <BrowserRouter>
            <Signup {...props}/>
        </BrowserRouter>
    </Provider>
  );
  expect(SignupComponent).toBeTruthy();
  expect(SignupComponent).toMatchSnapshot();
});

test('Renders <Signup /> form', () => {
  const { getByPlaceholderText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Signup {...props} />
      </BrowserRouter>)
    </Provider>
  );
  expect(getByPlaceholderText('Enter First Name')).toBeTruthy();
  expect(getByPlaceholderText('Enter Last Name')).toBeTruthy();
  expect(getByPlaceholderText('Enter Other Name')).toBeTruthy();
  expect(getByPlaceholderText('Enter Email Address')).toBeTruthy();
  expect(getByPlaceholderText('Enter Password')).toBeTruthy();
  expect(getByPlaceholderText('Confirm Password')).toBeTruthy();
});
