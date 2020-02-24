import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const UserRow = ({ user, editUser, deleteUser }) => {
  const { name, email, role, chowon, mokjang} = user;
  
  return (
    <TableRow>
      <TableCell>
        {name}
      </TableCell>
      <TableCell>
        {email}
      </TableCell>
      <TableCell>
        {role}
      </TableCell>
      <TableCell>
        {chowon}
      </TableCell>
      <TableCell>
        {mokjang}
      </TableCell>
      <TableCell>
        <IconButton onClick={editUser}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={deleteUser}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default UserRow;