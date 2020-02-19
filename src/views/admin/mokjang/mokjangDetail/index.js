import React from 'react';
import { FirestoreDocument } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import MokjangDetail from './mokjangDetail';

const MokjangDetailContainer = ({ match }) => {
  return (
    <FirestoreDocument
      path={`mokjang/${match.params.id}`} 
      render={
        ({ isLoading, data }) => {
          return isLoading ? (
            <CircularProgress />
          ) : (
            <MokjangDetail name={data.name} leader={data.leader} memberFamilies={data.memberFamilies} />
          )
        }
      }
    />
  )
}

export default MokjangDetailContainer;