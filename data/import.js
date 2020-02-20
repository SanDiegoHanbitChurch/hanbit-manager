'use strict';

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = require('../src/firebaseConfig')

console.log(firebaseConfig);

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

const chowonList = require('./chowonList')
 
// const result = excelToJson({
//     sourceFile: 'addressbook.xlsx'
// });

for (let i=0; i < chowonList.length; i++) {

  db.collection('chowon').add(chowonList[i])
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}