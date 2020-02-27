import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import { FirestoreCollection } from 'react-firestore';
import VisitorList from './visitorList';
import { addVisitor } from '../../../actions/visitor';

const VisitorListContainer = () => (
    <FirestoreCollection
        path='visitor'
        render={({isLoading, data}) => {
            return isLoading 
                ? <CircularProgress /> 
                : <VisitorList visitorList={data} addVisitor={addVisitor}/>;
        }}
    />
)

export default VisitorListContainer;
