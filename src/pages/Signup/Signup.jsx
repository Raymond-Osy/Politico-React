import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { signup } from '../../state/auth/action';
import './Signup.scss';
import TopNav from '../../components/Navigations/TopNav/TopNav';
import validateSignupInput from '../../utils/userValidator';

export const Signup = props => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    othername: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '09099999999',
    passportUrl: 'https://picsum.photos/200/300'
  });
  useEffect(() => {
    if (props.auth.loginSuccess === true) {
      props.history.push('/userProfile');
    }
  });
  const handleSubmit = event => {
    event.preventDefault();
    props.signup(formData);
  };
  const handleChange = event => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const { firstname, lastname, othername, email, password, confirmPassword } = formData;
  return (
    <div className="custom-container signup-page">
      <TopNav />
        <section className="container">
            <div className="row">
                <div className="main-info col-100 pt-0 bottom-space-15">
                    <h1><span>Signup</span></h1>
                </div>
            </div>
        </section>
        <footer className="footer-container-form">
            <form className="container" onSubmit={handleSubmit}>
                <div className="form-container">
                    <label><b>First Name</b></label>
                    <span id="invalidF"></span>
                    <input type="text" placeholder="Enter First Name" name="firstname" onChange={handleChange} value={firstname} />

                    <label><b>Last Name</b></label>
                    <span id="invalidL"></span>
                    <input type="text" placeholder="Enter Last Name" name="lastname" onChange={handleChange} value={lastname} />

                    <label><b>Other Name</b></label>
                    <span id="invalidO"></span>
                    <input type="text" placeholder="Enter Other Name" name="othername" onChange={handleChange} value={othername} />

                    <label><b>Email Address</b></label>
                    <span id="invalidE"></span>
                    <input type="email" placeholder="Enter Email Address" name="email" onChange={handleChange} value={email} />

                    <label><b>Password</b></label>
                    <span id="invalidP"></span>
                    <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={password} />

                    <label><b>Confirm Password</b></label>
                    <span id="confirmPass"></span>
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} value={confirmPassword} />

                    <button className="btn-form" type="submit">Signup</button>
                    <p className="text-center">Already have an account? login <Link to={'/login'} style={{ color: '#2F7A17', textDecoration: 'none' }}>here</Link></p>
                </div>
            </form>
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
