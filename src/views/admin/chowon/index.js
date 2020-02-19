import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { FirestoreCollection } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChowonList from './chowonList';

const addChowon = () => {};
const deleteChowon = () => {};

const ChowonListContainer = () => {

  const [redirectTo, setRedirectTo] = useState(null);
  const editChowon = (id) => {
    setRedirectTo(`/chowon/${id}`);
  };

  if (redirectTo) {
    console.log('redirecting', redirectTo);
    return (
      <Redirect to={redirectTo} />
    )
  }

  return (
    <FirestoreCollection
      path='chowon'
      render={
        ({isLoading, data}) => {
          return isLoading ? (<CircularProgress />) : 
            <ChowonList 
              chowonList={data} 
              addChowon={addChowon} 
              editChowon={editChowon} 
              deleteChowon={deleteChowon} 
            />
        }
      }
    />
  )
}
export default ChowonListContainer;