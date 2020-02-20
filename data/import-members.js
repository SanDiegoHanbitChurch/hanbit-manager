const firebase = require("firebase");
const excelToJson = require('convert-excel-to-json');
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = require('../src/firebaseConfig')

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

 
const result = excelToJson({
    sourceFile: './Membership.xlsx'
});

const convertToMember = (laymen) => {

  return {
    memberId: parseInt(laymen.C),
    mokjang: laymen.B,
    koreanName: laymen.D,
    englishName: laymen.E ? laymen.E : '',
    sex: laymen.F ? laymen.F : '',
    birthDate: `${laymen.G ? laymen.G : ''}${laymen.H ? '/' + laymen.H : ''}`,
    address: `${laymen.I} ${laymen.J}`,
    phoneNumber: laymen.K ? laymen.K : '',
    email: laymen.N ? laymen.N : '',
    oneToOneTraining: laymen.O === 'Y',
    discipleshipTraining: laymen.P === 'Y',
    ministryTraining: laymen.Q === 'Y',
    inMinistry: laymen.R === 'Y'
  }
}

const addDocumentToCollection = (collection, document) => db.collection(collection).add(document);

const laymenList = result['평신도'];
let family = {
  members: []
}

for (let i = 0; i < laymenList.length; i++) {
  const member = convertToMember(laymenList[i]);

  const familyMemberId = parseInt(laymenList[i].C);
  if (familyMemberId === 1) {
    family = {
      mokjang: member.mokjang,
      address: member.address,
      members: []
    }
  }

  family.members.push(member);

  // if this is the last laymen or 
  if (i + 1 === laymenList.length || parseInt(laymenList[i + 1].C) === 1) {

    addDocumentToCollection('family', family)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
  
    console.log('family', family);
  }
}

