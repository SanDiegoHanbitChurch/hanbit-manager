import React from 'react';
import { useParams } from 'react-router-dom';
import { FirestoreDocument } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import FamilyDetail from './familyDetail';
import { updateFamily } from '../../../../actions/family';

const FamilyDetailContainer = () => {
  const { id } = useParams();
  const path = `family/${id}`;

  const saveFamily = (family) => {
    updateFamily(family)
      .then(() => console.log('successfully updated family info'))
      .catch(error => console.log('failed to update family', error))
  };

  return (
    <FirestoreDocument
      path={path} 
      render={
        ({ isLoading, data }) => {
          return isLoading ? (
            <CircularProgress />
          ) : (
            <FamilyDetail family={data} saveFamily={saveFamily}/>
          )
        }
      }
    />
  )
}

export default FamilyDetailContainer;