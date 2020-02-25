import React from 'react';
import Typography from '@material-ui/core/Typography';

const Home = ({ user }) => (
    <Typography>
        Welcome Home, {user.name}!
    </Typography>
);

export default Home;
