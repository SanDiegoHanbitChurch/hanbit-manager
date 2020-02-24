import React from 'react';
import { FirestoreCollection } from 'react-firestore';
import MokjangSelect from '../../../../shared/mokjangSelect';
import { CircularProgress } from '@material-ui/core';

const MokjangSelectContainer = ({onChange, value}) => {
  return (
    <FirestoreCollection 
      path='mokjang'
      render={({isLoading, data}) => {
        return isLoading ? <CircularProgress /> : 
        <MokjangSelect 
          onChange={onChange} 
          mokjangList={data} 
          value={value}
        /> 
      }}
    />

  )
}

export default MokjangSelectContainer;