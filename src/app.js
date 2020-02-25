import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './header';
import Body from './body';
import Footer from './footer';

const App = () => {
    const [user, setUser] = useState(null);
    const [authError, setAuthError] = useState('');

    return (
        <Router>
            <Header setUser={setUser} user={user} setAuthError={setAuthError}/>
            <CssBaseline />
                <Container maxWidth="md">
                    <Body user={user} authError={authError}/>
                    <Footer />
                </Container>
        </Router>
    )
}

export default App;