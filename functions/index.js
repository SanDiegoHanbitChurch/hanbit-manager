const { onVisitorCreated,  onVisitorUpdated, onFamilyCreated, onFamilyUpdated } = require('./search')
const { helloWorld } = require('./helloWorld');
const { onMailCreated } = require('./email');

module.exports = {
    onVisitorCreated,
    onVisitorUpdated,
    onFamilyCreated,
    onFamilyUpdated,
    helloWorld,
    onMailCreated
};
