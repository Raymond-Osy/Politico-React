import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { signup } from '../../state/auth/action';
import './Signup.scss';
import TopNav from '../../components/Navigations/TopNav/TopNav';

export const Signup = props => {
  const formData = {
    firstname: '',
    lastname: '',
    othername: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '09099999999',
    passportUrl: 'https://picsum.photos/200/300'
  };
  useEffect(() => {
    if (props.auth.signupSuccess === true) {
      props.history.push('/userProfile');
    }
  });
  return (
    <div className="custom-container signup-page">
      <ReduxToastr
        timeOut={5000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick/>
      <TopNav />
        <section className="container">
            <div className="row">
                <div className="main-info col-100 pt-0 bottom-space-15">
                    <h1><span>Signup</span></h1>
                </div>
            </div>
        </section>
        <footer className="footer-container-form">
          <Formik
            initialValues = {formData}
            onSubmit={values => props.signup(values)}
                validationSchema={Yup.object().shape({
                  firstname: Yup.string()
                    .required(),
                  lastname: Yup.string()
                    .required(),
                  othername: Yup.string()
                    .required(),
                  email: Yup.string()
                    .email()
                    .required('Required'),
                  password: Yup.string()
                    .required('No password provided.')
                    .min(5, 'Password is too short - should be 5 characters minimum.')
                    .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
                  confirmPassword: Yup.string()
                    .required()
                    // eslint-disable-next-line func-names
                    .test('passwords-match', 'Passwords must match', function (value) {
                      return this.parent.password === value;
                    }),
                })}
            >
                  {data => {
                    const {
                      values, touched, errors, isSubmitting,
                      handleBlur, handleSubmit, handleChange
                    } = data;
                    return (
                        <form className="container" onSubmit={handleSubmit}>
                          <div className="form-container">
                              <label><b>First Name</b></label>
                              <input
                                type="text"
                                placeholder="Enter First Name"
                                name="firstname"
                                onChange={handleChange}
                                value={values.firstname}
                                onBlur={handleBlur}
                                className={errors.firstname && touched.firstname && 'error'}
                                required
                              />
                              {errors.firstname && touched.firstname && (
                                <div className="input-feedback">{errors.firstname}</div>
                              )}

                              <label><b>Last Name</b></label>
                              <input
                                type="text"
                                placeholder="Enter Last Name"
                                name="lastname"
                                onChange={handleChange}
                                value={values.lastname}
                                onBlur={handleBlur}
                                className={errors.lastname && touched.lastname && 'error'}
                                required
                              />
                                {errors.lastname && touched.lastname && (
                                <div className="input-feedback">{errors.lastname}</div>
                                )}

                              <label><b>Other Name</b></label>
                              <input
                                type="text"
                                placeholder="Enter Other Name"
                                name="othername"
                                onChange={handleChange}
                                value={values.thername}
                                onBlur={handleBlur}
                                className={errors.othername && touched.othername && 'error'}
                                required
                              />
                              {errors.othername && touched.othername && (
                                <div className="input-feedback">{errors.othername}</div>
                              )}

                              <label><b>Email Address</b></label>
                              <input
                                type="email"
                                placeholder="Enter Email Address"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                                onBlur={handleBlur}
                                className={errors.email && touched.email && 'error'}
                                required
                              />
                              {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                              )}

                              <label><b>Password</b></label>
                              <input
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                onChange={handleChange}
                                value={values.password}
                                onBlur={handleBlur}
                                className={errors.password && touched.password && 'error'}
                                required
                              />
                              {errors.password && touched.password && (
                                <div className="input-feedback">{errors.password}</div>
                              )}

                              <label><b>Confirm Password</b></label>
                              <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                onChange={handleChange}
                                value={values.confirmPassword}
                                onBlur={handleBlur}
                                className={errors.confirmPassword && touched.confirmPassword && 'error'}
                                required
                                />
                                {errors.confirmPassword && touched.confirmPassword && (
                                  <div className="input-feedback">{errors.confirmPassword}</div>
                                )}

                              <button className="btn-form" type="submit" disabled={isSubmitting}>Signup</button>
                              <p className="text-center">Already have an account? login <Link to={'/login'} style={{ color: '#2F7A17', textDecoration: 'none' }}>here</Link></p>
                          </div>
                      </form>
                    );
                  }
                  }
            </Formik>
            <div className="footer-container-2">
              <p>Copyright &copy; 2019, Raymond Akalonu.</p>
            </div>
        </footer>
    </div>
  );
};

Signup.propTypes = {
  singup: PropTypes.func,
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth
});

export const ConnectedSignup = connect(mapStateToProps, { signup },)(Signup);
