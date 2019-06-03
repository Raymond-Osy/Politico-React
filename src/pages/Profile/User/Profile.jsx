import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import './Profile.scss';
import Sidebar from '../../../components/Navigations/SideNav/SideNav';
import Parties from '../../../components/UserContent/Party/Party';

const UserProfile = props => (
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
        <Sidebar {...props}/>
        <Parties {...props}/>
    </div>
);

export default UserProfile;
