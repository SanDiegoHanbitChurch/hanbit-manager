import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth'
import { Button } from '@material-ui/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
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
            <Button variant="contained" color="primary" onClick={signInWithGoogle}>
                Sign in with Google
            </Button>
        </>
    )
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Login);

