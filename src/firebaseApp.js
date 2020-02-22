import React from 'react';
import { FirestoreProvider } from 'react-firestore';
import MuiApp from './muiApp';
import firebase from './firebase';

const FirebaseApp = () => {
  return (
    <FirestoreProvider firebase={firebase}>
        <MuiApp />
    </FirestoreProvider>
  );
}

export default FirebaseApp;
