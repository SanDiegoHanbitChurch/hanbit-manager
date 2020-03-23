import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { FirestoreCollection } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import FamilyList from './familyList';
import SearchContainer from '../../shared/searchContainer';
import { searchFamily } from '../../../actions/family';

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
    <SearchContainer search={searchFamily}>
        {(searchResult) => {
          if (searchResult) {
            return <FamilyList familyList={searchResult} editFamily={editFamily} />
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
                    />
                }
              }
            /> 
          )
        }}

    </SearchContainer>
  )
}

export default FamilyListContainer;
