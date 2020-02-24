import React, { useState } from 'react';
import ReadOnlyUserRow from './userRow';
import EditUserRow from './editUserRow';

const UserRow = ({ user, deleteUser, updateUser }) => {

  const [editUser, setEditUser] = useState(false);

  return editUser 
    ? <EditUserRow 
        user={user} 
          cancel={() => setEditUser(false)} 
          updateUser={(user) => {
            setEditUser(false);
            updateUser(user);
          }} 
        /> 
    : <ReadOnlyUserRow 
        user={user} 
        editUser={() => setEditUser(true)} 
        deleteUser={deleteUser}
      />
}

export default UserRow;
