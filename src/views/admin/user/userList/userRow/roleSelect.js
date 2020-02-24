import React from 'react';
import { FirestoreCollection } from 'react-firestore';
import RoleSelect from '../../../../shared/roleSelect';
import { CircularProgress } from '@material-ui/core';

const RoleSelectContainer = ({onChange, value = ''}) => {

  return (
    <FirestoreCollection 
      path='role'
      render={({isLoading, data}) => {
        return isLoading ? <CircularProgress /> : 
        <RoleSelect 
          onChange={onChange} 
          roleList={data} 
          value={value}
        /> 
      }}
    />

  )
}

export default RoleSelectContainer;