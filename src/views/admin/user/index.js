import React, { useState } from 'react';
import UserRow from './user';
import EditUserRow from './user';

const UserRowContainer = ({user}) => {
  const [editMode, setEditMode] = useState(false);
  const saveUserInfo = (userInfo) => setEditMode(false);
  const editUser = () => setEditMode(true);

  return editMode ? <EditUserRow user={user} saveUserInfo={saveUserInfo} /> :
    <UserRow user={user} editUser={editUser} />
  
}

export default UserRowContainer;