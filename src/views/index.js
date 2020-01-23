import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Login from './login';
import AuthenticatedRoute from './authenticateRoute';

const Views = () => {

    const [authState, setAuthState] = useState({});
    const { user } = authState;
    
    const setUser = (user) => {
        setAuthState({
            user
        });
    }
    
    return (
        <Router>
            <Switch>
                <AuthenticatedRoute exact path="/" user={user} render={() => (<Home user={user} />)} />
                <Route path="/login" render={() => (<Login setUser={setUser}/>)} />
            </Switch>
        </Router>
    )
}

export default Views;