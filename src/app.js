import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './header';
import Body from './body';
import Footer from './footer';
import { Box } from '@material-ui/core';

const App = () => {
    const [user, setUser] = useState(null);
    const [authError, setAuthError] = useState('');

    return (
        <Router>
            <Header setUser={setUser} user={user} setAuthError={setAuthError}/>
            <CssBaseline />
                <Container maxWidth="md">
                    <Box m={1}>
                        <Body user={user} authError={authError}/>
                        <Footer />
                    </Box>
                </Container>
        </Router>
    )
}

export default App;