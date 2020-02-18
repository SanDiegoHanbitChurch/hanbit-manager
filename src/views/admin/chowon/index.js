import React from 'react';
import { FirestoreCollection } from 'react-firestore';
import ChowonList from './chowonList';

const addChowon = () => {};
const editChowon = () => {};
const deleteChowon = () => {};

const ChowonListContainer = () => {
  return (
    <FirestoreCollection
      path='chowon'
      render={
        ({isLoading, data}) => {
          return isLoading ? (<p>Loading...</p>) : 
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