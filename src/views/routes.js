import React from 'react';
import Home from "./home";
import Admin from './admin';
import AuthenticatedRoute from './authenticateRoute';

const generateRouteConfigs = (user) => (
    [
        {
            name: 'Home',
            path: "/",
            exact: true,
            render: (props) => <Home user={user} {...props} />
        },
        {
            name: 'Admin',
            path: "/admin",
            render: (props) => <Admin user={user} {...props} />
        }
    ]
)

const generateRoutes = (user) => {
    const routeConfigs = generateRouteConfigs(user);

    return routeConfigs.map(({ exact, path, render }) => <AuthenticatedRoute user={user} exact={exact} path={path} render={render} redirectTo={path}/> )
}

export default generateRoutes;
