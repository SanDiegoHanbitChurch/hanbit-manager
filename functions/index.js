const { onVisitorCreated,  onVisitorUpdated, onFamilyCreated, onFamilyUpdated } = require('./search')
const { onMailCreated } = require('./email');

module.exports = {
    onVisitorCreated,
    onVisitorUpdated,
    onFamilyCreated,
    onFamilyUpdated,
    onMailCreated
};
