import React from 'react';
import Sidebar from '../../components/Navigations/SideNav/SideNav';
import Result from '../../components/UserContent/Result/Result';
// import { Link } from 'react-router-dom';

const ElectionResult = props => (
    <div>
        <Sidebar {...props}/>
        <Result />
    </div>
);

export default ElectionResult;
