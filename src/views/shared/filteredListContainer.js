import React from 'react';
import { FirestoreCollection } from 'react-firestore';

const FilteredListContainer = ({ path, filter, render }) => (
    <FirestoreCollection
        path={path}
        filter={filter}
        render={render}
    />
);

export default FilteredListContainer;
