/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { partiesAction } from '../../../state/parties/action';
import './Party.scss';

const Parties = props => {
  useEffect(() => {
    props.partiesAction();
  }, []);
  const renderParties = parties => parties.map(party => (
    <div key={party.id} className="card">
        <img className="img-responsive" src={party.logourl} alt="Party Image"/>
        <div className="party-info">
            <h3>Name: <span className="grey">{party.name}</span></h3>
            <h3>Head Quarters: <span className="grey">{party.hqaddress}</span></h3>
        </div>
    </div>
  ));
  return (
    <div className="content">
        <div className="content-wrapper">
            <div className="menu-text">
                <div className="text-center">
                    <h2>All Available Parties</h2>
                </div>
            </div>
            <div className="card-group">
                {renderParties(props.parties)}
            </div>
        </div>
        <div className="footer">
            <p>Copyright &copy; 2019, Raymond Akalonu.</p>
        </div>
    </div>
  );
};

const mapStateToProps = state => ({
  parties: state.parties.parties,
});

export default connect(mapStateToProps, { partiesAction })(Parties);
