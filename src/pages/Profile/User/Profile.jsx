import React from 'react';
import './Profile.scss';
import ReduxToastr from 'react-redux-toastr';
// import { Link } from 'react-router-dom';


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

        <h2>Welcome to this Page, this should be the USERS PAGE on authentication</h2>
    </div>
);

export default UserProfile;
