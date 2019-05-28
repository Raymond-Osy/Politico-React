import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Home from './Home/Home';

const notFound = () => (<h1>Not found</h1>);
const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route component={notFound} />
        </Switch>
    </Router>
);

export default App;
