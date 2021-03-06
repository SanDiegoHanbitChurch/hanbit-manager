import React from 'react';
import { FirestoreCollection } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserList from './userList';
import { updateUser, deleteUser, addUser } from '../../../../actions/user';

const UserListContainer = () => {

  return (
    <FirestoreCollection 
      path='user'
      render={
        ({isLoading, data}) => {
          return isLoading 
            ? <CircularProgress /> 
            : <UserList 
                userList={data} 
                deleteUser={deleteUser}
                updateUser={updateUser}
                addUser={addUser}
              />
        }
      }
    />
  )
}

export default UserListContainer;