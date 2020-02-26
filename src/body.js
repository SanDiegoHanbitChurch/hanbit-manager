import React from 'react';
import Container from '@material-ui/core/Container';
import Routes from './routes';
import Unauthenticated from './views/unAuthenticated';

const Body = ({user, login, authError}) => (
    <Container maxWidth='lg'>
        { user 
            ? <Routes user={user}/>
            : <Unauthenticated login={login} authError={authError}/>
        }
    </Container>
);

export default Body;
