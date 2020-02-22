import React, { useState } from 'react';
import ErrorBoundary from './errorBoundary'
import Header from './header';
import Body from './body';
import Footer from './footer';

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <ErrorBoundary>
            <Header setUser={setUser}/>
            <Body user={user}/>
            <Footer />
        </ErrorBoundary>
    )
}

export default App;