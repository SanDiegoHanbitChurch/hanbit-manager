const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

describe('sendgrid', () => {
    it('should send an email to single recipient', (done) => {
        const payload = {
            to: 'sangyum@gmail.com',
            from: 'sangyumn@gmail.com',
            subject: 'Hello world',
            text: 'Hello plain world!',
            html: '<p>Hello HTML world!</p>',
        };

        sgMail.send(payload)
            .then(() => {
                done();
            })
            .catch(error => {
                console.error(error);
                done(error);
            })
    });

    it('should send an email to multiple recipient', (done) => {
        const payload = {
            to: ['sangyum@gmail.com', 'sang.yum@sdhanbit.org'],
            from: 'sangyumn@gmail.com',
            subject: 'Hello world',
            text: 'Hello plain world!',
            html: '<p>Hello HTML world!</p>',
        };

        sgMail.sendMultiple(payload)
            .then(() => {
                done();
            })
            .catch(error => {
                console.error(error);
                done(error);
            })
    })

    it.only('should send an email with attachment', (done) => {
        const payload = {
            to: ['sangyum@gmail.com', 'sang.yum@sdhanbit.org'],
            from: 'sangyumn@gmail.com',
            subject: 'Hello world',
            text: 'Hello plain world!',
            html: '<p>Hello HTML world!</p>',
            attachments: [
                {
                    content: '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',
                    contentId:  'foobar',
                    disposition: 'attachment',
                    type: 'image/png',
                    filename: 'favicon.png'
                }
            ]
        };

        sgMail.send(payload)
        .then(() => {
            done();
        })
        .catch(error => {
            console.error(JSON.stringify(error));
            done(error);
        })

    })

})
