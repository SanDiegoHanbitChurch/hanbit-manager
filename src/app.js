import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './header';
import Body from './body';
import Footer from './footer';

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <Header setUser={setUser}/>
            <Body user={user}/>
            <Footer />
        </Router>
    )
}

export default App;