import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const Home = ({ user }) => (
    <Container maxWidth="md" component={Paper}>
        <Typography>
            Welcome Home, {user.name}!
        </Typography>
    </Container>
);

export default Home;
