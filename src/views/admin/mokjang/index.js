import React from 'react';
import { FirestoreCollection } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import MokjangList from './mokjangList';

const addMokjang = () => {};
const deleteMokjang = () => {};

const MokjangListContainer = () => {

  return (
    <FirestoreCollection
      path='mokjang'
      render={
        ({isLoading, data}) => {
          return isLoading ? (<CircularProgress />) : 
            <MokjangList 
              mokjangList={data} 
              addMokjang={addMokjang} 
              deleteMokjang={deleteMokjang} 
            />
        }
      }
    />
  )
}

export default MokjangListContainer;
