import React from 'react';
import { Link } from 'react-router-dom';
import './Aspirant.scss';

const Aspirant = () => (
        <div className="content">
            <div className="content-wrapper">
                <div className="menu-text">
                    <div className="text-center">
                        <h2>Fill in your credentials below</h2>
                    </div>
                </div>
                <div className="pt-150"></div>
                <div className="container pt-100">
                    <form action="#">
                        <div className="row">
                            <div className="col-25">
                                <label for="lname">Party</label>
                            </div>
                            <div className="col-75">
                                <select id="types" name="type">
                                    <option value="federal">PDP</option>
                                    <option value="legislative">APC</option>
                                    <option value="state">APGA</option>
                                    <option value="local">ACC</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="lname">Office</label>
                            </div>
                            <div className="col-75">
                                <select id="types" name="type">
                                    <option value="federal">House of Rep</option>
                                    <option value="legislative">House of Senate</option>
                                    <option value="state">Counselour</option>
                                    <option value="local">Vice Counselour</option>
                                </select>
                            </div>
                        </div>
                        <div className="row-end">
                            <input type="submit" value="Save" />
                        </div>
                    </form>
                  </div>
            </div>

            <div class="footer mt-200" >
                <p>Copyright &copy; 2019, Raymond Akalonu.</p>
            </div>
        </div>
);

export default Aspirant;
