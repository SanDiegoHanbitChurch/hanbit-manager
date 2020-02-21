import React from 'react';
import { FirestoreCollection } from 'react-firestore';

const DetailContainer = ({ path, filter, render}) => (
    <FirestoreCollection
        path={path}
        filter={filter}
        render={render}
    />
);

export default DetailContainer;