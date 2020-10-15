import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Admin from './views/admin';
import ChowonList from './views/admin/chowon';
import ChowonDetail from './views/admin/chowon/chowonDetail';
import MokjangList from './views/admin/mokjang';
import MokjangDetail from './views/admin/mokjang/mokjangDetail';
import FamilyList from './views/admin/family';
import FamilyDetail from './views/admin/family/familyDetail';
import UserList from './views/admin/user/userList';
import VisitorList from './views/admin/visitor';
import VisitorDetail from './views/admin/visitor/visitorDetail';
import Message from './views/admin/message';
import NoMatch from './views/noMatch';

const routeConfigs = [
    {
        path: '/',
        exact: true,
        component: Home,
        roles: ['관리자', '담임목사', '초원장', '목자', '부교역자']
    },
    {
        path: '/admin',
        exact: true,
        component: Admin,
        roles: ['관리자']
    },
    {
        path: '/chowon/:name',
        component: ChowonDetail,
        roles: ['관리자', '담임목사', '초원장', '목자', '부교역자']
    },
    {
        path: '/mokjang/:name',
        component: MokjangDetail,
        roles: ['관리자', '담임목사', '초원장', '목자', '부교역자']
    },
    {
        path: '/family/:id',
        component: FamilyDetail,
        roles: ['관리자', '담임목사', '초원장', '목자', '부교역자']
    },
    {
        path: '/visitor/:id',
        component: VisitorDetail,
        roles: ['관리자', '담임목사', '초원장', '목자', '부교역자']
    },
    {
        path: '/chowon',
        component: ChowonList,
        roles: ['관리자', '담임목사', '초원장', '목자', '부교역자']
    },
    {
        path: '/mokjang',
        component: MokjangList,
        roles: ['관리자', '담임목사', '초원장', '목자', '부교역자']
    },
    {
        path: '/family',
        component: FamilyList,
        roles: ['관리자', '담임목사', '초원장', '목자', '부교역자']
    },
    {
        path: '/visitor',
        component: VisitorList,
        roles: ['관리자', '담임목사', '초원장', '목자', '부교역자']
    },
    {
        path: '/user',
        component: UserList,
        roles: ['관리자']
    },
    {
        path: '/message',
        component: Message,
        roles: ['관리자', '담임목사', '부교역자']
    },

]

const Routes = ({ user, setUser }) => {
    return (
        <Switch>
            { routeConfigs.map(({ path, exact, component: Component, roles}, index) => {
                if (roles.includes(user.role)) {
                    return (
                        <Route key={index} path={path} exact={exact}>
                            <Component user={user} />
                        </Route>
                    )
                }
                return null;
            })}
            <Route>
                <NoMatch />
            </Route>
        </Switch>
    )
};

export default Routes;
