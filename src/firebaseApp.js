import React from 'react';
import { FirestoreProvider } from 'react-firestore';
import App from './app';
import firebase from './firebase';

const FirebaseApp = () => {
  return (
    <FirestoreProvider firebase={firebase}>
        <App />
    </FirestoreProvider>
  );
}

export default FirebaseApp;
