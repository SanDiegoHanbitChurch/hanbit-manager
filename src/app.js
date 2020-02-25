import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './header';
import Body from './body';
import Footer from './footer';

const App = () => {
    const [user, setUser] = useState(null);
    const [authError, setAuthError] = useState('');

    return (
        <Router>
            <Header setUser={setUser} user={user} setAuthError={setAuthError}/>
            <Body user={user} authError={authError}/>
            <Footer />
        </Router>
    )
}

export default App;