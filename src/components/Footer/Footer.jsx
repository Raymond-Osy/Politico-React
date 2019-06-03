import React from 'react';
import './Footer.scss';
import archive from '../../asset/img/archive.svg';
import balance from '../../asset/img/balance.svg';
import campaign from '../../asset/img/campaign.svg';


const Footer = () => (
    <div>
    <footer className="footer-container">
        <div className="item-postion-2">
            <div className="align-one">
                <div className="abt-body">
                    <img src={archive}/>
                </div>
            </div>
            <div className="align-two">
                <div className="abt-body">
                    <p>Fill in your credentials in the designated fieldsFill in your credentials
                        in the designated fiated fields. Fill in your credentials in the designated
                        fieldsFill in your credentials in the designated fields.
                    </p>
                </div>
            </div>
        </div>
        <div className="item-postion-2">
            <div className="align-one">
                <div className="abt-body">
                    <p>Fill in your credentials in the designated fieldsFill in your credentials
                        in the designated fiated fields. Fill in your credentials in the designated
                        fieldsFill in your credentials in the designated fields.
                    </p>
                </div>
            </div>
            <div className="align-two">
                <div className="abt-body">
                    <img src={balance}/>
                </div>
            </div>
        </div>
        <div className="item-postion-2">
            <div className="align-one">
                <div className="abt-body">
                    <img src={campaign}/>
                </div>
            </div>
            <div className="align-two">
                <div className="abt-body">
                    <p>Fill in your credentials in the designated fieldsFill in your credentials
                        in the designated fiated fields. Fill in your credentials in the designated
                        fieldsFill in your credentials in the designated fields.
                    </p>
                </div>
            </div>
        </div>
    </footer>
    </div>
);

export default Footer;
