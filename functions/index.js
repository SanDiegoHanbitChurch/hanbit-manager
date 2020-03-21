const { onVisitorCreated,  onVisitorUpdated, onFamilyCreated, onFamilyUpdated } = require('./search')
const { helloWorld } = require('./helloWorld');
const { sendEmail } = require('./sendEmail');

module.exports = {
    onVisitorCreated,
    onVisitorUpdated,
    onFamilyCreated,
    onFamilyUpdated,
    helloWorld,
    sendEmail
};
