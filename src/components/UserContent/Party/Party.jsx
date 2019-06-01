import React from 'react';
import { Link } from 'react-router-dom';
import './Party.scss';
import PDPlogo from '../../../asset/img/PDPlogo.jpg';
import sdplogo from '../../../asset/img/sdplogo.png';

const Party = () => (
    <div className="content">
        <div className="content-wrapper">
            <div className="menu-text">
                <div className="text-center">
                    <h2>All Available Parties</h2>
                </div>
            </div>
            <div className="card-group">
                <div className="card">
                    <img className="img-responsive" src={PDPlogo} alt="Party Image"/>
                    <div className="party-info">
                        <h3>Name: <span className="grey">PDP</span></h3>
                        <h3>Head Quarters: <span className="grey">123, Akintola williams.</span></h3>
                    </div>
                </div>
                <div className="card">
                    <img className="img-responsive" src={sdplogo} alt="Party Image"/>
                    <div className="party-info">
                        <h3>Name: <span className="grey">APC</span></h3>
                        <h3>Head Quarters: <span className="grey">123, Akintola williams.</span></h3>
                    </div>
                </div>
                <div className="card">
                    <img className="img-responsive" src={PDPlogo} alt="Party Image"/>
                    <div className="party-info">
                        <h3>Name: <span className="grey">APC</span></h3>
                        <h3>Head Quarters: <span className="grey">123, Akintola williams.</span></h3>
                    </div>
                </div>
                <div className="card">
                    <img className="img-responsive" src={sdplogo} alt="Party Image"/>
                    <div className="party-info">
                        <h3>Name: <span className="grey">APC</span></h3>
                        <h3>Head Quarters: <span className="grey">123, Akintola williams.</span></h3>
                    </div>
                </div>
                <div className="card">
                    <img className="img-responsive" src={PDPlogo} alt="Party Image"/>
                    <div className="party-info">
                        <h3>Name: <span className="grey">APC</span></h3>
                        <h3>Head Quarters: <span className="grey">123, Akintola williams.</span></h3>
                    </div>
                </div>
                <div className="card">
                    <img className="img-responsive" src={sdplogo} alt="Party Image"/>
                    <div className="party-info">
                        <h3>Name: <span className="grey">APC</span></h3>
                        <h3>Head Quarters: <span className="grey">123, Akintola williams.</span></h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <p>Copyright &copy; 2019, Raymond Akalonu.</p>
        </div>
    </div>
);

export default Party;
