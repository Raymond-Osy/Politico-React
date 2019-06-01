import React from 'react';
import './Profile.scss';
import ReduxToastr from 'react-redux-toastr';
import Sidebar from '../../../components/Navigations/SideNav/SideNav';
import Content from '../../../components/UserContent/Content';

const UserProfile = () => (
    <div>
        <Sidebar />
        <Content />
    </div>
);

export default UserProfile;
