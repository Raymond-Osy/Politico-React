import React from 'react';
import './Profile.scss';
import ReduxToastr from 'react-redux-toastr';
import Sidebar from '../../../components/Navigations/SideNav/SideNav';
import Party from '../../../components/UserContent/Party/Party';

const UserProfile = () => (
    <div>
        <ReduxToastr
        timeOut={5000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick/>
        <Sidebar />
        <Party />
    </div>
);

export default UserProfile;
