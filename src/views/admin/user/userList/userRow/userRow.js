import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import ConfirmationDialog from '../../../../shared/confirmationDialog';

const UserRow = ({ user, editUser, deleteUser }) => {
  const [open, setOpen] = useState(false);
  const { name, email, role, chowon, mokjang} = user;
  const handleYes = () => {
    setOpen(false);
    deleteUser(user);
  }
  const handleNo = () => setOpen(false);
  const handleDeleteUser = () => {
    setOpen(true)
  } 
  
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
        <IconButton onClick={handleDeleteUser}>
          <DeleteIcon />
        </IconButton>
        <ConfirmationDialog open={open} handleYes={handleYes} handleNo={handleNo} />
      </TableCell>
    </TableRow>
  )
}

export default UserRow;