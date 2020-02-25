import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import firebase from '../firebase';
import { getUser } from '../actions/user';

const provider = new firebase.auth.GoogleAuthProvider();

const AuthButton = ({ setUser, setAuthError }) => {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [redirectTo, setRedirectTo] = useState(null);

  const signOut = () => {
    setIsSignedIn(false);
    setUser(null);
    firebase.auth().signOut();
  }

  const signIn = () => {
    firebase.auth().signInWithPopup(provider).then(result => {
      const googleUser = result.user;
      // only allow sdhanbit.org user
      if (googleUser.email.endsWith('@sdhanbit.org')) {

        getUser(googleUser.email)
          .then(user => {
            setIsSignedIn(true);
            setUser(user);
          });
        
      } else {
        setAuthError('Only users with sdhanbit.org account is allowed.')
        firebase.auth().signOut();
      }

      setRedirectTo('/');
    }).catch(error =>  {
      setAuthError(error.message);
      // TODO: Log failed attempt to login
      // // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // // The email of the user's account used.
      // var email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // // ...
    });
  }

  if (redirectTo) {
    return (
      <Redirect to={redirectTo} />
    )
  }

  return isSignedIn
    ? <Button onClick={signOut}>Logout</Button>
    : <Button onClick={signIn}>Login</Button>
}

export default AuthButton;
