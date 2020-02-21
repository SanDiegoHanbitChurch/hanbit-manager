import React from 'react';
import { FirestoreDocument } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import FamilyDetail from './familyDetail';

const FamilyDetailContainer = ({ match }) => {
  return (
    <FirestoreDocument
      path={`family/${match.params.id}`} 
      render={
        ({ isLoading, data }) => {
          return isLoading ? (
            <CircularProgress />
          ) : (
            <FamilyDetail family={data} />
          )
        }
      }
    />
  )
}

export default FamilyDetailContainer;