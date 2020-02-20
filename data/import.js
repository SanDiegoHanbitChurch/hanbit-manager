const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

//const firebaseConfig = require('../src/firebaseConfig')

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

console.log(firebaseConfig);

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

const chowonList = require('./chowonList')
const mokjangList = require('./mokjangList');
 
// const result = excelToJson({
//     sourceFile: 'addressbook.xlsx'
// });

const addDocumentToCollection = (collection, document) => db.collection(collection).add(document);

for (let i=0; i < chowonList.length; i++) {

  setTimeout(() => {
    addDocumentToCollection('chowon', chowonList[i])
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }, 1000);
}

for (let i=0; i < mokjangList.length; i++) {
  setTimeout(() => {
    addDocumentToCollection('mokjang', mokjangList[i])
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }, 1000);
}