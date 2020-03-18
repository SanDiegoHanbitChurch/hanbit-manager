
const functions = require('firebase-functions');
const algoliasearch = require('algoliasearch');

const ALGOLIA_ID = process.env.REACT_APP_ALGOLIA_ID;
const ALGOLIA_ADMIN_KEY = process.env.REACT_APP_ALGOLIA_ADMIN_KEY;

const ALGOLIA_FAMILY_INDEX_NAME = process.env.REACT_APP_ALGOLIA_FAMILY_INDEX;
const ALGOLIA_VISITOR_INDEX_NAME = process.env.REACT_APP_ALGOLIA_VISITOR_INDEX;

const algoliaClient = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

exports.onVisitorCreated = functions.firestore.document('visitor/{visitorId}').onCreate((snap, context) => {
    // Get the note document
    const visitor = snap.data();
  
    // Add an 'objectID' field which Algolia requires
    visitor.objectID = context.params.visitorId;
  
    // Write to the algolia index
    const index = algoliaClient.initIndex(ALGOLIA_VISITOR_INDEX_NAME);
    return index.saveObject(visitor);
});

exports.onVisitorUpdated = functions.firestore.document('visitor/{visitorId}').onUpdate((change, context) => {
    // Get the note document
    const visitor = change.after.data();
  
    // Add an 'objectID' field which Algolia requires
    visitor.objectID = context.params.visitorId;
  
    // Write to the algolia index
    const index = algoliaClient.initIndex(ALGOLIA_VISITOR_INDEX_NAME);
    return index.saveObject(visitor);
});

exports.onFamilyCreated = functions.firestore.document('family/{familyId}').onCreate((snap, context) => {
    // Get the note document
    const family = snap.data();
  
    // Add an 'objectID' field which Algolia requires
    family.objectID = context.params.familyId;
  
    // Write to the algolia index
    const index = algoliaClient.initIndex(ALGOLIA_FAMILY_INDEX_NAME);
    return index.saveObject(family);
});

exports.onFamilyUpdated = functions.firestore.document('family/{familyId}').onUpdate((change, context) => {
    // Get the note document
    const family = change.after.data();
  
    // Add an 'objectID' field which Algolia requires
    family.objectID = context.params.familyId;
  
    // Write to the algolia index
    const index = algoliaClient.initIndex(ALGOLIA_FAMILY_INDEX_NAME);
    return index.saveObject(family);
});