import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Routes from './routes';
import Unauthenticated from './views/unAuthenticated';

const Body = ({user, login, authError}) => {

    if (user) {
        return (
            <Container maxWidth='md'>
                <Routes user={user}/>
            </Container>
        )
    }

    return (
        <Box m={3}>
            <Unauthenticated login={login} authError={authError}/>
        </Box>
    )
}

export default Body;
