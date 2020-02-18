import React from 'react';
import { FirestoreProvider } from 'react-firestore';
import MuiApp from './muiApp';
import firebase from './firebase';
import './App.css';

function App() {
  return (
    <div className="App">
      <FirestoreProvider firebase={firebase}>
        <MuiApp />
      </FirestoreProvider>
    </div>
  );
}

export default App;
