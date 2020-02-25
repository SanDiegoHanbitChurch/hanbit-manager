import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './header';
import Body from './body';
import Footer from './footer';

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <CssBaseline />
            <Header user={user}/>
            <Body user={user} setUser={setUser} />
            <Container maxWidth="sm">
              <Footer />
            </Container>
        </Router>
    )
}

export default App;