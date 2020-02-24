import React from 'react';
import { FirestoreCollection } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserList from './userList';
import firebase from '../../../../firebase';

const db = firebase.firestore();

const UserListContainer = () => {

  const deleteUser = (user) => {
    console.log('deleting user', user);
  };

  const updateUser = (user) => {
    console.log(user);
    const {id, name, email, role, chowon, mokjang } = user;
    const userToSave = {
      id,
      name,
      email,
      role
    }
  
    if (chowon) {
      userToSave.chowon = chowon;
    }
    if (mokjang) {
      userToSave.mokjang = mokjang;
    }

    if (role === '담임목사') {
      delete userToSave.chowon;
      delete userToSave.mokjang;
    }

    if (role === '초원장') {
      delete userToSave.mokjang;
    }
    if (role === '목자') {
      delete userToSave.chowon;
    }
    
    db.collection("user").doc(user.id).update(userToSave)
      .then(doc => console.log('updated', doc));
  };

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
              />
        }
      }
    />
  )
}

export default UserListContainer;