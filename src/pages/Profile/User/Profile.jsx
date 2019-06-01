import React from 'react';
import './Profile.scss';
import ReduxToastr from 'react-redux-toastr';
import Sidebar from '../../../components/Navigations/SideNav/SideNav';
import Party from '../../../components/UserContent/Party/Party';

const UserProfile = () => (
    <div>
        <Sidebar />
        <Party />
    </div>
);

export default UserProfile;
