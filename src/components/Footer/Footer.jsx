import React from 'react';
import './Footer.scss';
import tap from '../../asset/img/tap.png';
import consent from '../../asset/img/consent.png';
import vote from '../../asset/img/vote.png';


const Footer = () => (
    <footer className="footer-container">
        <div className="abt-header">
            <h2>How Do I Vote?</h2>
        </div>
        <div className="footer-item-container">
            <div className="align-3">
                <div className="abt-body">
                    <img src={tap}/>
                    <p>Click the Get Started button</p>
                </div>
            </div>
            <div className="align-4">
                <div class="abt-body">
                    <img src={consent}/>
                    <p>Fill in your credentials in the designated fields</p>
                </div>
            </div>
            <div className="align-3">
                <div class="abt-body">
                    <img src={vote}/>
                    <p>Select & vote your prefered candidate!</p>
                </div>
            </div>
        </div>
        <div class="footer-container-2">
                <p>Copyright &copy; 2018, Raymond Akalonu.</p>
            </div>
    </footer>
);

export default Footer;
