const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBwS80uvk6r-xabAdPLPk9OE0vcE3FGEVI",
    authDomain: "hanbit-manager-dev.firebaseapp.com",
    databaseURL: "https://hanbit-manager-dev.firebaseio.com",
    projectId: "hanbit-manager-dev",
    storageBucket: "hanbit-manager-dev.appspot.com",
    messagingSenderId: "788144176701",
    appId: "1:788144176701:web:f74e18698302c8fc1c3454",
    measurementId: "G-K9B2FC7109"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

db.collection('Test')
  .where('foo', '==', 'foo')
  .get()
  .then(querySnapshot => (
      querySnapshot.forEach(doc => {
          console.log(doc.data())
      })
  ))
  .catch(console.log)

  db.collectionGroup('members')
  .where('name', '==', '염상용')
  .get()
  .then(querySnapshot => (
      querySnapshot.forEach(doc => {
          console.log(doc.data())
      })
  ))
  .catch(console.log)