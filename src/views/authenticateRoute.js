import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({user, redirectTo, ...rest}) => {
    
    const to = redirectTo ? `/login?redirectTo=${redirectTo}` : '/login';
    return (
        user ? <Route {...rest} /> : <Redirect to={to} />
    )
}

export default AuthenticatedRoute;