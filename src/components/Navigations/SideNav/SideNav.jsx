import React from 'react';
import './SideNav.scss';
import profileImg from '../../../asset/img/icon1.png';
// ;import { Link } from 'react-router-dom';

const Sidebar = () => (
    <div className="sidebar">
        <div className="center">
            <div className = "nav-header">
                <a href="index.html">Politico</a>
            </div>
            <div className="name-circle">
                <img className="profile-img" src={profileImg} />
            </div>
            <p className="d-none">Osynachi</p>
        </div>

        <div className="sb-links">
            <a href="userParty.html" className="active">Profile</a>
            <a href="vote.html">Vote Here</a>
            <a href="result.html">Result</a>
            <a href="aspirant.html">Aspirant</a>
            <a href="signin.html"><span className="danger">Logout</span></a>
        </div>
    </div>
);

export default Sidebar;
