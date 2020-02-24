import React, { useState } from 'react';
import firebase from '../firebase';
import Button from '@material-ui/core/Button';

const provider = new firebase.auth.GoogleAuthProvider();

const AuthButton = ({ setUser }) => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  const signOut = () => {
    setIsSignedIn(false);
    setUser(null);
    firebase.auth().signOut();
  }

  const signIn = () => {
    firebase.auth().signInWithPopup(provider).then(result => {
      const user = result.user;
      // only allow sdhanbit.org user
      if (user.email.endsWith('@sdhanbit.org')) {
        setIsSignedIn(true);
        setUser(user);
      } else {
        firebase.auth().signOut();
      }

    }).catch(error =>  {
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

  return isSignedIn
    ? <Button onClick={signOut}>Logout</Button>
    : <Button onClick={signIn}>Login</Button>
}

export default AuthButton;
