import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth'
import { Button, Typography, Box } from '@material-ui/core';
import '@firebase/auth';
import firebase from '../firebase';

const firebaseAppAuth = firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Login = ({ user, signOut, signInWithGoogle, setUser }) => {
    const query = useQuery();
    const to = query.get('redirectTo') || "/";

    if (user) {
        setUser(user);
        return (<Redirect to={to} />)
    }

    return (
        <>
            <Box m={5}>
                <Button variant="contained" color="primary" onClick={signInWithGoogle}>
                    Sign in with Google
                </Button>
            </Box>
            <Typography color="primary">Please sign-in with your sdhanbit.org account.</Typography>
        </>
    )
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Login);

