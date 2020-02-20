const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = require('../src/firebaseConfig')

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