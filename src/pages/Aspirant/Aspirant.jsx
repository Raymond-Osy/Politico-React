import React from 'react';
import Sidebar from '../../components/Navigations/SideNav/SideNav';
import Aspirant from '../../components/UserContent/Aspirant/Aspirant';
// import { Link } from 'react-router-dom';

const Context = props => (
    <div>
        <Sidebar {...props}/>
        <Aspirant />
    </div>
);

export default Context;
