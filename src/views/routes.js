import React from 'react';
import Home from "./home";
import AuthenticatedRoute from './authenticateRoute';
import MokjangList from './admin/mokjang'
import ChowonList from './admin/chowon'
import ChowonDetail from './admin/chowon/chowonDetail';
import MokjangDetail from './admin/mokjang/mokjangDetail';

const generateRouteConfigs = (user) => (
    [
        {
            name: 'Home',
            path: "/",
            exact: true,
            render: (props) => <Home user={user} {...props} />
        },
        {
            name: 'Chowon Detail',
            path: '/chowon/:id',
            render: (props) => <ChowonDetail user={user} {...props} />
        },
        {
            name: 'Mokjang Detail',
            path: '/mokjang/:id',
            render: (props) => <MokjangDetail user={user} {...props} />
        },
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
