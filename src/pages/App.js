import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import Home from './Home/Home';
import { ConnectedSignup } from './Signup/Signup';
import { ConnectedLogin } from './Login/Login';
import UserProfile from './Profile/User/Profile';


const notFound = () => (<h1>Not found</h1>);
const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={ConnectedLogin} />
            <Route exact path="/signup" component={ConnectedSignup} />
            <Route exact path="/userProfile" component={UserProfile} />
            <Route component={notFound} />
        </Switch>
    </Router>
);

export default App;
