// Import FirebaseAuth and firebase.
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../firebase';

class AuthButton extends React.Component {

  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
      const { setUser } = this.props;
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => {
            this.setState({isSignedIn: !!user, user});
            setUser(user);
        }
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
      );
    }
    return (
      <IconButton onClick={() => firebase.auth().signOut()}>
        <Avatar alt={firebase.auth().currentUser.displayName} src='/foo/bar.jpg' />
      </IconButton>
      // <div>
      //   <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
      //   <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      // </div>
    );
  }
}

export default AuthButton;
