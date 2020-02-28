import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { FirestoreCollection } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import FamilyList from './familyList';
import { searchFamily } from '../../../actions/family';

const FamilyListContainer = () => {

  const [redirectTo, setRedirectTo] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

  const editFamily = (id) => {
    setRedirectTo(`/family/${id}`);
  };

  const setSearchQuery = (query) => {
    searchFamily(query)
      .then(setSearchResult);
  }

  if (redirectTo) {
    return (
      <Redirect to={redirectTo} />
    )
  }

  if (searchResult) {
    return (
      <FamilyList 
        familyList={searchResult} 
        editFamily={editFamily}
        setSearchQuery={setSearchQuery}
      />
    )
  }

  return (
    <FirestoreCollection
      path='family'
      limit={25}
      render={
        ({isLoading, data}) => {
          return isLoading ? (<CircularProgress />) : 
            <FamilyList 
              familyList={data} 
              editFamily={editFamily}
              setSearchQuery={setSearchQuery}
            />
        }
      }
    />
  )
}

export default FamilyListContainer;
