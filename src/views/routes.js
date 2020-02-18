import React from 'react';
import Home from "./home";
import AuthenticatedRoute from './authenticateRoute';
import MokjangList from './admin/mokjangList'
import ChowonList from './admin/chowonList'

const generateRouteConfigs = (user) => (
    [
        {
            name: 'Home',
            path: "/",
            exact: true,
            render: (props) => <Home user={user} {...props} />
        },
        // {
        //     name: 'Admin',
        //     path: "/admin",
        //     render: (props) => <Admin user={user} {...props} />
        // },
        {
            name: 'Chowon',
            path: "/chowon",
            render: (props) => <ChowonList user={user} {...props} />
        },
        {
            name: 'Mokjang',
            path: "/mokjang",
            render: (props) => <MokjangList user={user} {...props} />
        }
    ]
)

const generateRoutes = (user) => {
    const routeConfigs = generateRouteConfigs(user);

    return routeConfigs.map(({ exact, path, render }) => <AuthenticatedRoute user={user} exact={exact} path={path} render={render} redirectTo={path}/> )
}

export default generateRoutes;
