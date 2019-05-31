import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../state/auth/action';
import './Login.scss';
import TopNav from '../../components/Navigations/TopNav/TopNav';

export const Login = props => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    props.login(formData);
  };

  const handleChange = event => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const { email, password } = formData;
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
        {console.log('>>>>>>>>>>>>>>>>', props)}
            <form className="container" id="signinForm" onSubmit={handleSubmit}>
                <div className="form-container">
                    <span id="response"></span>
                    <label><b>Email Address</b></label>
                    <input type="email" placeholder="Enter Email Address" name="email" onChange={handleChange} value={email} required/>

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={password} required/>

                    <button className="btn-form" type="submit">Signin</button>
                    <p>Don't have an account? Signup <Link to="/signup" style={{ color: '#2F7A17', textDecoration: 'none' }}>here</Link></p>
                    {/* <p>
                        Forgotten your password? don't panic, reset it
                        <a href="#" className="link">here</a>
                    </p> */}
                </div>
            </form>
            <div className="footer-container-2">
                <p>Copyright &copy; 2019, Raymond Akalonu.</p>
            </div>
        </footer>
    </div>
  );
};


const mapStateToProps = state => ({
  auth: state.auth
});

export const ConnectedLogin = connect(mapStateToProps, { login },)(Login);
