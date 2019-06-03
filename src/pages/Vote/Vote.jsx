import React from 'react';
import Sidebar from '../../components/Navigations/SideNav/SideNav';
import Vote from '../../components/UserContent/Vote/Vote';
// import { Link } from 'react-router-dom';

const Elect = props => (
    <div>
        <Sidebar {...props}/>
        <Vote />
    </div>
);

export default Elect;
