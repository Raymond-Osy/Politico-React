import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';

const notFound = () => (<h1>Not found</h1>);
const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route component={notFound} />
        </Switch>
    </Router>
);

export default App;
