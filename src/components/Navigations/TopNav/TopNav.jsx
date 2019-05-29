import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.scss';

const TopNav = () => (
    <nav className="row">
        <div className="logo-div">
            <Link to={'/'}><h1>Politico</h1></Link>
        </div>
        <div className="signup-signin-div">
            <h4>
                <Link to={'/signup'} style={{ color: 'inherit', textDecoration: 'none' }}>Sign Up</Link>
                <span className="m-side">|</span>
                <Link to={'/login'} style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link>
            </h4>
        </div>
    </nav>
);

export default TopNav;
