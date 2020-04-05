import React from 'react';
import Container from '@material-ui/core/Container';
import Routes from './routes';

const Body = ({user}) => (
    <Container maxWidth='lg'>
        <Routes user={user}/>
    </Container>
);

export default Body;
