import React from 'react';
import { Link } from 'react-router-dom';
import './Content.scss';

const Section = () => (
    <section className="container">
        <div className="row">
            <div className="main-info col-100">
                <h1>Welcome to <span className="logo">Politico</span>, where the Citizens speak!</h1>
                <p>What more could anyone ask for? It's convinient, free and transparent!</p>
                <Link to={'/signup'} id="bigRegisterBtn"><span>Get Started</span></Link>
            </div>
        </div>
    </section>
);

export default Section;
