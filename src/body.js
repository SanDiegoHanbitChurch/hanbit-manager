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
import Unauthenticatd from './views/unAuthenticated';
import NoMatch from './views/noMatch';

const buildRoutesForSeniorPastorOrChowonLeader = (user) => {
    return (
        <Switch>
            <Route path='/' exact>
                <Home user={user} />
            </Route>
            <Route path='/chowon/:name'>
                <ChowonDetail user={user}/>
            </Route>
            <Route path='/mokjang/:name'>
                <MokjangDetail user={user}/>
            </Route>
            <Route path='/family/:id'>
                <FamilyDetail user={user}/>
            </Route>
            <Route path='/chowon'>
                <ChowonList user={user}/>
            </Route>
            <Route path='/mokjang'>
                <MokjangList user={user}/>
            </Route>
            <Route path='/family'>
                <FamilyList user={user}/>
            </Route>
            <Route>
                <NoMatch />
            </Route>
        </Switch>
    )
}

const buildRoutesForMokja = (user) => {
    return (
        <Switch>
            <Route path='/' exact>
                <Home user={user} />
            </Route>
            <Route path='/mokjang/:name'>
                <MokjangDetail user={user}/>
            </Route>
            <Route path='/family/:id'>
                <FamilyDetail user={user}/>
            </Route>
            <Route path='/mokjang'>
                <MokjangList user={user}/>
            </Route>
            <Route path='/family'>
                <FamilyList user={user}/>
            </Route>
            <Route>
                <NoMatch />
            </Route>
        </Switch>
    )
}

const buildRoutesForAdmin = (user) => {
    return (
        <Switch>
            <Route path='/' exact>
                <Home user={user} />
            </Route>
            <Route path='/admin'>
                <Admin user={user}/>
            </Route>
            <Route path='/chowon/:name'>
                <ChowonDetail user={user}/>
            </Route>
            <Route path='/mokjang/:name'>
                <MokjangDetail user={user}/>
            </Route>
            <Route path='/family/:id'>
                <FamilyDetail user={user}/>
            </Route>
            <Route path='/chowon'>
                <ChowonList user={user}/>
            </Route>
            <Route path='/mokjang'>
                <MokjangList user={user}/>
            </Route>
            <Route path='/family'>
                <FamilyList user={user}/>
            </Route>
            <Route path='/user'>
                <UserList user={user}/>
            </Route>
            <Route>
                <NoMatch />
            </Route>
        </Switch>
    )
}
const Body = ({ user, authError }) => {
    
    if (user) {
        if (user.role === '담임목사' || user.role === '초원장') {
            return buildRoutesForSeniorPastorOrChowonLeader(user);
        } else if (user.role === '목자') {
            return buildRoutesForMokja(user);
        } else {
            return buildRoutesForAdmin(user);
        }
    }
    return <Unauthenticatd authError={authError} />
};

export default Body;
