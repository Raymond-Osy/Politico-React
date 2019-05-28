import React from 'react';
import './Content.scss';

const Section = () => (
    <section className="container">
        <div className="row">
            <div className="main-info col-100">
                <h1>Welcome to <span className="logo">Politico</span>, where the Citizens speak!</h1>
                <p>What more could anyone ask for? It's convinient, free and transparent!</p>
                <a href="signin.html" id="bigRegisterBtn"><span>Get Started</span></a>
            </div>
        </div>
    </section>
);

export default Section;
