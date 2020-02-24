import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const UserRow = ({ user, editUser }) => {
  return (
    <TableRow key={user.name}>
      <TableCell component="th" scope="row">
        {user.name}
      </TableCell>
      <TableCell align="right">{user.email}</TableCell>
      <TableCell align="right">{user.role}</TableCell>
      <TableCell align="right">{user.group}</TableCell>
      <TableCell align="right">
        <IconButton onClick={editUser}>
          <EditIcon />
        </IconButton>
      </TableCell>

    </TableRow>
  )
}

export default UserRow;