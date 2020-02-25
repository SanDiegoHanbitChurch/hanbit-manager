import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { FirestoreCollection } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import FamilyList from './familyList';

const FamilyListContainer = () => {

  const [redirectTo, setRedirectTo] = useState(null);
  const editFamily = (id) => {
    setRedirectTo(`/family/${id}`);
  };

  if (redirectTo) {
    return (
      <Redirect to={redirectTo} />
    )
  }

  return (
    <FirestoreCollection
      path='family'
      render={
        ({isLoading, data}) => {
          return isLoading ? (<CircularProgress />) : 
            <FamilyList 
              familyList={data} 
              editFamily={editFamily} 
            />
        }
      }
    />
  )
}
export default FamilyListContainer;