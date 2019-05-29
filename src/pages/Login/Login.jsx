import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import TopNav from '../../components/Navigations/TopNav/TopNav';

const Login = () => (
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
            <form className="container" id="signinForm" role="form" method="POST">
                <div className="form-container">
                    <span id="response"></span>
                    <label><b>Email Address</b></label>
                    <input type="email" id="email" placeholder="Enter Email Address" name="uname" required/>

                    <label><b>Password</b></label>
                    <input type="password" id="password" placeholder="Enter Password" name="psw" required/>

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

export default Login;
