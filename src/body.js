import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/home';
import Admin from './views/admin';
import ChowonList from './views/admin/chowon';
import ChowonDetail from './views/admin/chowon/chowonDetail';
import MokjangList from './views/admin/mokjang';
import MokjangDetail from './views/admin/chowon/chowonDetail';
import FamilyList from './views/admin/family';
import FamilyDetail from './views/admin/family/familyDetail';
import Unauthenticatd from './views/unAuthenticated';
import NoMatch from './views/noMatch';

const Body = ({ user }) => {
    
    if (user) {
        return (
            <Router>
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
                    <Router path='/family'>
                        <FamilyList user={user}/>
                    </Router>
                    <Router>
                        <NoMatch />
                    </Router>
                </Switch>
            </Router>
        )
    }

    return <Unauthenticatd />
};

export default Body;
