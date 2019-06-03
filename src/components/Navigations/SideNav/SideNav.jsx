import React from 'react';
import './SideNav.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutUser } from '../../../state/auth/action';
import profileImg from '../../../asset/img/icon1.png';

const Sidebar = props => (
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
            <Link to={'/parties'}>Profile</Link>
            <Link to={'/vote'}>Vote Here</Link>
            <Link to={'/result'}>Result</Link>
            <Link to={'/aspirant'}>Aspirant</Link>
            <Link to={'#'} onClick = {() => props.signOutUser(props.history)}><span className="danger">Logout</span></Link>
        </div>
    </div>
);

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(mapStateToProps, { signOutUser },)(Sidebar);
