import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import AuthButton from './authButton';

const Unauthenticated = ({ setUser }) => {
    
    const [authError, setAuthError] = useState('');
    
    return (
        <>
            <h1>You are currently unauthenticated.</h1>
            <Typography>{authError}</Typography>
            <AuthButton setUser={setUser} setAuthError={setAuthError}/>
        </>
    )
};

export default Unauthenticated;
