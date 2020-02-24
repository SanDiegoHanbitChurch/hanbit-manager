import React from 'react';
import { FirestoreCollection } from 'react-firestore';
import ChowonSelect from '../../../../shared/chowonSelect';
import { CircularProgress } from '@material-ui/core';

const ChowonSelectContainer = ({onChange, value}) => {
  return (
    <FirestoreCollection 
      path='chowon'
      render={({isLoading, data}) => {
        return isLoading ? <CircularProgress /> : 
        <ChowonSelect 
          onChange={onChange} 
          chowonList={data} 
          value={value}
        /> 
      }}
    />

  )
}

export default ChowonSelectContainer;