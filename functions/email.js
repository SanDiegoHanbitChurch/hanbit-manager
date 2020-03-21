const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');
admin.initializeApp();
sgMail.setApiKey(functions.config().sendgrid.apikey);

exports.onMailCreated = functions.firestore.document('mail/{mailId}').onCreate((snap, context) => {
  // Get the note document
  const msg = snap.data();

  console.log('mail request received', msg);
  return sgMail.send(msg);
});
