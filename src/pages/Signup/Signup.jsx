import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';
import TopNav from '../../components/Navigations/TopNav/TopNav';

const Signup = () => (
    <div className="custom-container">
        <TopNav />
        <section className="container">
            <div className="row">
                <div className="main-info col-100 pt-0 bottom-space-15">
                    <h1><span>Signup</span></h1>
                </div>
            </div>
        </section>

        <footer className="footer-container-form">
            <form className="container" id="signupForm" role="form" method="POST">
                <div className="form-container">
                    <span id="success"></span>
                    <label><b>First Name</b></label>
                    <span id="invalidF"></span>
                    <input type="text" id="fName" placeholder="Enter First Name" name="fname" required/>

                    <label><b>Last Name</b></label>
                    <span id="invalidL"></span>
                    <input type="text" id="lName"placeholder="Enter Last Name" name="lname" required/>

                    <label><b>Other Name</b></label>
                    <span id="invalidO"></span>
                    <input type="text" id="oName"placeholder="Enter Other Name" name="oname" required/>

                    <label><b>Email Address</b></label>
                    <span id="invalidE"></span>
                    <input type="email" id="email" placeholder="Enter Email Address" name="email" required/>

                    <label><b>Password</b></label>
                    <span id="invalidP"></span>
                    <input type="password" id="password" placeholder="Enter Password" name="psw" required/>

                    <label><b>Confirm Password</b></label>
                    <span id="confirmPass"></span>
                    <input type="password" id="cPassword" placeholder="Confirm Password" name="psw" required/>

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

export default Signup;
