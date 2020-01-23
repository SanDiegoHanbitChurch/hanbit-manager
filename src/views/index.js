import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
            <Switch>
                { generateRoutes(user) }
                <Route path="/login" render={() => (<Login setUser={setUser}/>)} />
            </Switch>
        </Router>
    )
}

export default Views;