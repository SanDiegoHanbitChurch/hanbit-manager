import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TodaysVerse from './shared/todaysVerse';

const Unauthenticated = ({ login, authError }) => {
    
    return (
        <Box display='flex' alignItems='center' flexDirection='column'>
            <TodaysVerse />
            <Box m={3}>
                <Button variant='outlined' onClick={login}>Login</Button>
            </Box>
            <Typography>{authError}</Typography>
        </Box>
    )
};

export default Unauthenticated;
