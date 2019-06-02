import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../state/auth/action';
import './Login.scss';
import TopNav from '../../components/Navigations/TopNav/TopNav';

export const Login = props => {
  const formData = {
    email: '',
    password: ''
  };
  useEffect(() => {
    if (props.auth.loginSuccess === true) {
      props.history.push('/userProfile');
    }
  });
  return (
    <div className="custom-container">
        <TopNav />
        <section className="container">
            <div className="row">
                <div className="main-info col-100 pt-0">
                    <h1><span>Login</span></h1>
                </div>
            </div>
        </section>

        <footer className="footer-container-form">
            <Formik
                initialValues = {formData}
                onSubmit={values => props.login(values)}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email()
                    .required('Required'),
                  password: Yup.string()
                    .required('No password provided.')
                    .min(5, 'Password is too short - should be 5 characters minimum.')
                    .matches(/(?=.*[0-9])/, 'Password must contain a number.')
                })}
                >
                  {data => {
                    const {
                      values, touched, errors, isSubmitting, handleBlur, handleSubmit, handleChange
                    } = data;
                    return (
                      <form className="container" id="signinForm" onSubmit={handleSubmit}>
                        <div className="form-container">
                          <span id="response"></span>
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

                          <button className="btn-form" type="submit" disabled={isSubmitting}>Signin</button>
                          <p>Don't have an account? Signup <Link to="/signup" style={{ color: '#2F7A17', textDecoration: 'none' }}>here</Link></p>
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

Login.propTypes = {
  login: PropTypes.func,
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth
});

export const ConnectedLogin = connect(mapStateToProps, { login },)(Login);
