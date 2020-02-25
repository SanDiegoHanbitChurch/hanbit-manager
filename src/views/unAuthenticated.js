import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AuthButton from './authButton';
import TodaysVerse from './shared/todaysVerse';

const Unauthenticated = ({ setUser }) => {
    
    const [authError, setAuthError] = useState('');

    return (
        <Box display='flex' alignItems='center' flexDirection='column'>
            <TodaysVerse />
            <Box m={3}>
                <AuthButton setUser={setUser} setAuthError={setAuthError}/>
            </Box>
            <Typography>{authError}</Typography>
        </Box>
    )
};

export default Unauthenticated;
