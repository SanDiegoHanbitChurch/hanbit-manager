import React from 'react';
import { FirestoreCollection } from 'react-firestore';
import MokjangSelect from '../../shared/mokjangSelect';
import { CircularProgress } from '@material-ui/core';

const MokjangSelectContainer = ({handleMokjangChange, mokjang}) => {
  return (
    <FirestoreCollection 
      path='mokjang'
      render={({isLoading, data}) => {
        return isLoading ? <CircularProgress /> : 
        <MokjangSelect 
          handleMokjangChange={handleMokjangChange} 
          mokjangList={data} 
          mokjang={mokjang}
        /> 
      }}
    />

  )
}

export default MokjangSelectContainer;