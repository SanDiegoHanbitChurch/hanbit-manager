import React from 'react';
import { useParams } from 'react-router-dom';
import { FirestoreDocument } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import FamilyDetail from './familyDetail';
import { updateFamily } from '../../../../actions/family';

const FamilyDetailContainer = ({ user }) => {
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
            <FamilyDetail user={user} family={data} saveFamily={updateFamily} />
          )
        }
      }
    />
  )
}

export default FamilyDetailContainer;