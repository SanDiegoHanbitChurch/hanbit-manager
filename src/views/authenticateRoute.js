import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({user, ...rest}) => {
    
    console.log('user', user);
    return (
        user ? <Route {...rest} /> : <Redirect to="/login" />
    )
}

export default AuthenticatedRoute;