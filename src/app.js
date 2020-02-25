import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/GridListTileBar';
import Header from './header';
import Body from './body';
import Footer from './footer';
import SideNav from './sideNav';
import Unauthenticated from './views/unAuthenticated';

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <CssBaseline />
            <Header user={user}/>
            <SideNav user={user} />
            <Box m={1}>
              { user 
                ? <Body user={user} setUser={setUser}/>
                : <Unauthenticated setUser={setUser} />
              }
            </Box>
            <Footer />
        </Router>
    )
}

export default App;