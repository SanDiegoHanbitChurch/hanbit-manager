import React from 'react';
import Typography from '@material-ui/core/Typography';

const Unauthenticated = ({ authError }) => (
    <>
        <h1>You are currently unauthenticated.</h1>
        <Typography>{authError}</Typography>
    </>
);

export default Unauthenticated;
