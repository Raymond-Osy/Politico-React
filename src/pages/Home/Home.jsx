import React from 'react';
import './Home.scss';
import ReduxToastr from 'react-redux-toastr';
import TopNav from '../../components/Navigations/TopNav/TopNav';
import Section from '../../components/MainContent/Content';
import Footer from '../../components/Footer/Footer';

const Home = () => (
    <div className="custom-container">
        <TopNav />
        <ReduxToastr
        timeOut={5000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick/>
        <Section />
        <Footer />
    </div>
);

export default Home;
