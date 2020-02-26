import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import { FirestoreCollection } from 'react-firestore';
import VisitorList from './visitorList';

const VisitorListContainer = () => (
    <FirestoreCollection
        path='visitor'
        render={({isLoading, data}) => {
            return isLoading ? <CircularProgress /> : <VisitorList visitorList={data} />;
        }}
    />
)

export default VisitorListContainer;
