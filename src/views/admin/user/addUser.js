import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import RoleSelectContainer from './userList/userRow/roleSelect';
import ChowonSelectContainer from './userList/userRow/chowonSelect';
import MokjangSelectContainer from './userList/userRow/mokjangSelect';

const isValidUserInfo = ({
  name, email, role, chowon, mokjang
}) => {
  return name && email && role;
}

const AddUser = ({cancel, addUser}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [chowon, setChowon] = useState('');
  const [mokjang, setMokjang] = useState('');

  const disableSaveButton = !isValidUserInfo({
    name, email, role, chowon, mokjang
  })
  const handleSaveUser = () => {
    addUser({
      name,
      email,
      role,
      chowon,
      mokjang
    })
  }

  return (
    <TableRow>
      <TableCell>
        <TextField 
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </TableCell>
      <TableCell>
        <TextField 
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </TableCell>
      <TableCell>
        <RoleSelectContainer value={role} onChange={(event) => setRole(event.target.value)} />
      </TableCell>
      <TableCell>
        <ChowonSelectContainer value={chowon} onChange={(event) => setChowon(event.target.value)} />
      </TableCell>
      <TableCell>
        <MokjangSelectContainer value={mokjang} onChange={(event) => setMokjang(event.target.value)}  />
      </TableCell>
      <TableCell>
        <IconButton disabled={disableSaveButton} onClick={handleSaveUser}>
          <SaveIcon />
        </IconButton>
        <IconButton onClick={cancel}>
          <CancelIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default AddUser;
