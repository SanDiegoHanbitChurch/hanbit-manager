import algolasearch from 'algoliasearch';

const client = algolasearch(
    process.env.REACT_APP_ALGOLIA_ID,
    process.env.REACT_APP_ALGOLIA_SEARCH_KEY
);

const familyIndex = client.initIndex(process.env.REACT_APP_ALGOLIA_FAMILY_INDEX);
const visitorIndex = client.initIndex(process.env.REACT_APP_ALGOLIA_VISITOR_INDEX);

export {
    client,
    familyIndex,
    visitorIndex
}


