import React from 'react';
import { FirestoreProvider } from 'react-firestore';
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import App from './app';
import firebase from './firebase';

const queryCache = new QueryCache();

const FirebaseApp = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <FirestoreProvider firebase={firebase}>
          <App />
      </FirestoreProvider>
    </ReactQueryCacheProvider>
  );
}

export default FirebaseApp;
