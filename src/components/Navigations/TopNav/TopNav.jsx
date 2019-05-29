import React from 'react';
import './TopNav.scss';


const TopNav = () => (
    <nav className="row">
        <div className="logo-div">
            <a href="index.html"><h1>Politico</h1></a>
        </div>
        <div className="signup-signin-div">
            <h4>
                <a href="signup.html">Sign Up</a>
                <span className="m-side">|</span>
                <a href="signin.html">Login</a>
            </h4>
        </div>
    </nav>
);

export default TopNav;
