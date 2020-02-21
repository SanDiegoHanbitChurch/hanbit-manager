import React from 'react';
import { FirestoreDocument } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import FamilyDetail from './familyDetail';

const FamilyDetailContainer = ({ match }) => {
  const path = `family/${match.params.id}`;

  return (
    <FirestoreDocument
      path={path} 
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