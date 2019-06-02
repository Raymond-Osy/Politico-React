import React from 'react';
import { Link } from 'react-router-dom';
import './Vote.scss';

const Vote = () => (
    <div className="content">
            <div className="menu-text">
                <div className="text-center">
                    <h2>Vote for your favourite candidate</h2>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="card-group">
                    <div className="card">
                        <div className="party-info">
                            <form>
                                <div className="centered success">
                                    <h2>President</h2>
                                </div>
                                <div className="row">
                                    <div className="col-90">
                                        <label><h3>Hon. Patrick Harrison</h3></label>
                                    </div>
                                    <div className="col-10 pt-20">
                                        <input type="radio" name="gender" value="male" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-90">
                                        <label><h3>Sir. Joseph Peterson</h3></label>
                                    </div>
                                    <div className="col-10 pt-20">
                                        <input type="radio" name="gender" value="male" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-90">
                                        <label><h3>Mrs. Joy Highlander</h3></label>
                                    </div>
                                    <div className="col-10 pt-20">
                                        <input type="radio" name="gender" value="male" />
                                    </div>
                                </div>
                                <div className="row-end">
                                    <input type="submit" value="Save vote" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card">
                        <div className="party-info">
                            <form>
                                <div className="centered success">
                                    <h2>Governor</h2>
                                </div>
                                <div className="row">
                                    <div className="col-90">
                                        <label><h3>Hon. Patrick Harrison</h3></label>
                                    </div>
                                    <div className="col-10 pt-20">
                                        <input type="radio" name="gender" value="male" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-90">
                                        <label><h3>Sir. Joseph Peterson</h3></label>
                                    </div>
                                    <div className="col-10 pt-20">
                                        <input type="radio" name="gender" value="male" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-90">
                                        <label><h3>Mrs. Joy Highlander</h3></label>
                                    </div>
                                    <div className="col-10 pt-20">
                                        <input type="radio" name="gender" value="male" />
                                    </div>
                                </div>
                                <div className="row-end">
                                    <input type="submit" value="Save vote" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer">
                <p>Copyright &copy; 2019, Raymond Akalonu.</p>
            </div>
        </div>
);

export default Vote;
