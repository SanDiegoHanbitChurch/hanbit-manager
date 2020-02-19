import React from 'react';
import { FirestoreDocument } from 'react-firestore';
import ChowonDetail from './chowonDetail';

const ChowonDetailContainer = ({ match }) => {
  console.log('chowondetail container');
  return (
    <FirestoreDocument
      path={`chowon/${match.params.id}`} 
      render={
        ({ isLoading, data }) => {
          return isLoading ? (
            <p>
              Loading...
            </p>
          ) : (
            <ChowonDetail name={data.name} leader={data.leader} mokjangList={data.mokjangList} />
          )
        }
      }
    />
  )
}

export default ChowonDetailContainer;