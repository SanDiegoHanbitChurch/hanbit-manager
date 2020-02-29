import React from 'react';
import { useParams } from 'react-router-dom';
import { FirestoreDocument } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import FamilyDetail from './familyDetail';
import { updateFamily, addNote } from '../../../../actions/family';

const FamilyDetailContainer = ({ user }) => {
  const { id } = useParams();
  const path = `family/${id}`;

  const saveFamily = (family) => {
    updateFamily(family)
      .then(() => console.log('successfully updated family info'))
      .catch(error => console.log('failed to update family', error))
  };

  const handleAddNote = (family, comment) => {
    addNote(family, user, comment)
      .then(() => console.log('successfully updated family info'))
      .catch(error => console.log('failed to update family', error))
  }

  return (
    <FirestoreDocument
      path={path} 
      render={
        ({ isLoading, data }) => {
          return isLoading ? (
            <CircularProgress />
          ) : (
            <FamilyDetail family={data} saveFamily={saveFamily} addNote={handleAddNote} />
          )
        }
      }
    />
  )
}

export default FamilyDetailContainer;