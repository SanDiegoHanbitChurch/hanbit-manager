import React from 'react';
import Typography from '@material-ui/core/Typography';

const Home = ({ user }) => (
    <Typography>
        Welcome Home, {user.displayName}!
    </Typography>
);

export default Home;
