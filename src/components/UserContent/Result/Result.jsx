import React from 'react';
import { Link } from 'react-router-dom';
import './Result.scss';
import './Toggle';

const Result = () => (
    <div class="content">
        <div class="content-wrapper">
            <div class="menu-text">
                <div class="text-center">
                    <h2>Results from all voted offices</h2>
                </div>
            </div>

            <div class="collapse-btns">
                <button class="collapse-btn"><strong>Counselour</strong></button>
                <div class="collapse-content">
                    <table id="table-content">
                        <tr>
                            <th>Candidates</th>
                            <th>Results</th>
                        </tr>
                        <tr class="won">
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

                <button class="collapse-btn"><strong>Vice Counselour</strong></button>
                <div class="collapse-content">
                    <table id="table-content">
                        <tr>
                            <th>Candidates</th>
                            <th>Results</th>
                        </tr>
                        <tr class="won">
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
        <div class="footer">
            <p>Copyright &copy; 2019, Raymond Akalonu.</p>
        </div>
    </div>
);

export default Result;
