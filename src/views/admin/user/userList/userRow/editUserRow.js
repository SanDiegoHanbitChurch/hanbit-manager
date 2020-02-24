import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import MokjangSelect from './mokjangSelect';
import ChowonSelect from './chowonSelect';
import RoleSelect from './roleSelect';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { TextField } from '@material-ui/core';

const EditUserRow = ({ user, updateUser, cancel }) => {

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [chowon, setChowon] = useState(user.chowon);
  const [mokjang, setMokjang] = useState(user.mokjang);

  const handleSaveUser = () => {
    updateUser({
      id: user.id,
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
        <RoleSelect onChange={(event) => setRole(event.target.value)} value={role}/>
      </TableCell>
      <TableCell>
        {role === '초원장'
          && <ChowonSelect onChange={(event) => setChowon(event.target.value)} value={chowon} />
        }
      </TableCell>
      <TableCell>
        {role === '목자' 
          &&  <MokjangSelect onChange={(event) => setMokjang(event.target.value)} value={mokjang} />
        }
      </TableCell>
      <TableCell>
        <IconButton onClick={handleSaveUser}>
          <SaveIcon />
        </IconButton>
        <IconButton onClick={cancel}>
          <CancelIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
  
}

export default EditUserRow;