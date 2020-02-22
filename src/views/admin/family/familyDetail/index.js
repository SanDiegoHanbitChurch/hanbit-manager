import React from 'react';
import { useParams } from 'react-router-dom';
import { FirestoreDocument } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import FamilyDetail from './familyDetail';

const FamilyDetailContainer = () => {
  const { id } = useParams();
  const path = `family/${id}`;

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