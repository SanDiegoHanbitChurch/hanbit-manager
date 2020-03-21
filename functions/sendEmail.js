const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const cors = require('cors')({origin: true});
admin.initializeApp();

const transport = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: functions.config().sendgrid.apikey
    })
);

exports.sendEmail = functions.https.onRequest((request, response) => {
    cors(request, response, () => {

        const {
            from,
            subject,
            content
        } = request.body;

        transport
            .sendMail({
                from,
                to: 'sangyum@gmail.com',
                subject,
                html: content
            })
            .then(([res]) => {
                console.log('Message delivered with code %s %s', res.statusCode, res.statusMessage);
                
                response.status(200).send(res);
            })
            .catch(err => {
                console.log('Errors occurred, failed to deliver message');
                response.status(500).send(err);

                if (err.response && err.response.body && err.response.body.errors) {
                    err.response.body.errors.forEach(error => console.log('%s: %s', error.field, error.message));
                } else {
                    console.log(err);
                }
            });
    });    
});