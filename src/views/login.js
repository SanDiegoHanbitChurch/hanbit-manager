import React from 'react';
import { Redirect } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const Login = ({ user, signOut, signInWithGoogle, setUser }) => {
    if (user) {
        setUser(user);
        return (<Redirect to="/" />)
    }

    return (
        <>
            <p>Please sign in.</p>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </>
    )
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Login);

