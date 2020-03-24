const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const { chunk } = require('lodash');

sgMail.setApiKey(functions.config().sendgrid.apikey)

exports.onMailCreated = functions.firestore.document('mail/{mailId}').onCreate((snap, context) => {
  // Get the note document
  const emailRequest = snap.data();

  console.log('mail request received', emailRequest);

  const { to, from, subject, html, attachments } = emailRequest;

  if (typeof to === 'string') {
    const payload = {
      to,
      from,
      subject,
      html,
      attachments
    }

    console.log('email payload', payload);

    sgMail.send(payload)
      .then(console.log)
      .catch(error => console.error(JSON.stringify(error)));
  } else {
    const chunks = chunk(to, 100);
    chunks.forEach(chunk => {
      const payload = {
        to: chunk,
        from,
        subject,
        html,
        attachments
      };

      console.log('mail payload', payload);
      
      sgMail.sendMultiple(payload)
        .then(console.log)
        .catch(error => console.error(JSON.stringify(error)));
      })
  }
});
