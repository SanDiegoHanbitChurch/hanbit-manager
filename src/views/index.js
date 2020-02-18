import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './navigation'
import Login from './login';
import generateRoutes from './routes';

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
            <Navigation />
            <Switch>
                { generateRoutes(user) }
                <Route path="/login" render={() => (<Login setUser={setUser}/>)} />
            </Switch>
        </Router>
    )
}

export default Views;