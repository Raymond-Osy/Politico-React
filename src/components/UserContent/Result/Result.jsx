import React from 'react';
import { Link } from 'react-router-dom';
import './Result.scss';
import './Toggle';

const Result = () => (
    <div className="content">
        <div className="content-wrapper">
            <div className="menu-text">
                <div className="text-center">
                    <h2>Results from all voted offices</h2>
                </div>
            </div>

            <div className="collapse-btns">
                <button className="collapse-btn"><strong>Counselour</strong></button>
                <div className="collapse-content">
                    <table id="table-content">
                        <tr>
                            <th>Candidates</th>
                            <th>Results</th>
                        </tr>
                        <tr className="won">
                            <td>Hon. Patrick Harrison</td>
                            <td>589</td>
                        </tr>
                        <tr>
                            <td>Sir. Joseph Peterson</td>
                            <td>302</td>
                        </tr>
                        <tr>
                            <td>Mrs. Joy Highlander</td>
                            <td>256</td>
                        </tr>
                    </table>
                </div>

                <button className="collapse-btn"><strong>Vice Counselour</strong></button>
                <div className="collapse-content">
                    <table id="table-content">
                        <tr>
                            <th>Candidates</th>
                            <th>Results</th>
                        </tr>
                        <tr className="won">
                            <td>Mrs. Joy Highlander</td>
                            <td>589</td>
                        </tr>
                        <tr>
                            <td>Sir. Joseph Peterson</td>
                            <td>302</td>
                        </tr>
                        <tr>
                            <td>Hon. Patrick Harrison</td>
                            <td>256</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div className="footer">
            <p>Copyright &copy; 2019, Raymond Akalonu.</p>
        </div>
    </div>
);

export default Result;
