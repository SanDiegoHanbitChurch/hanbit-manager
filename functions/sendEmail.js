const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');
const cors = require('cors')({origin: true});
admin.initializeApp();
sgMail.setApiKey(functions.config().sendgrid.apikey);

exports.sendEmail = functions.https.onRequest((request, response) => {
    cors(request, response, () => {

        const {
            from,
            to,
            subject,
            content
        } = request.body;

        const msg = {
            to,
            from,
            subject,
            html: content,
          };
          sgMail.sendMultiple(msg, (err, res) => {
              if (err) {
                response.status(500).send(err);
              } else {
                response.status(200);
              }
          });
    });    
});