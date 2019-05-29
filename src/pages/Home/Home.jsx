import React from 'react';
import './Home.scss';
import TopNav from '../../components/Navigations/TopNav/TopNav';
import Section from '../../components/MainContent/Content';
import Footer from '../../components/Footer/Footer';

const Home = () => (
    <div className="custom-container">
        <TopNav />
        <Section />
        <Footer />
    </div>
);

export default Home;
