import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import SideNav from './sideNav';
import Routes from './routes';
import Unauthenticated from './views/unAuthenticated';

const Body = ({user, setUser}) => {

    if (user) {
        return (
            <Grid container spacing={2}>
                <Grid item>
                    <Box m={1}>
                        <SideNav user={user} />
                    </Box>
                </Grid>
                <Grid item>
                    <Container maxWidth='md'>
                        <Routes user={user}/>
                    </Container>
                </Grid>
            </Grid>
        )
    }

    return (
        <Box m={3}>
            <Unauthenticated setUser={setUser} />
        </Box>
    )
}

export default Body;
