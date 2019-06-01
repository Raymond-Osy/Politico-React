import React from 'react';
import './SideNav.scss';
import { Link } from 'react-router-dom';
import profileImg from '../../../asset/img/icon1.png';

const Sidebar = () => (
    <div className="sidebar">
        <div className="center">
            <div className = "nav-header">
            <Link to={'/'}><h1>Politico</h1></Link>
            </div>
            <div className="name-circle">
                <img className="profile-img" src={profileImg} />
            </div>
            <p className="d-none">Osynachi</p>
        </div>

        <div className="sb-links">
            <Link to={'/userProfile'}>Profile</Link>
            <Link to={'/vote'}>Vote Here</Link>
            <Link to={'/result'}>Result</Link>
            <Link to={'/aspirant'}>Aspirant</Link>
            <Link to={'/login'}><span className="danger">Logout</span></Link>
        </div>
    </div>
);

export default Sidebar;
