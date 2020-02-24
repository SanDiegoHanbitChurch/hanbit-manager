import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import MokjangSelectContainer from './mokjangSelect';

const seniorPastor = {
  role: '담임목사'
}

const chowonJang = {
  role: '초원장',
  chowon: '두나미스'
}

const mokja = {
  role: '목자',
  mokjang: '은혜'
}

const genericUser = {
  role: '',
  chowon: '',
  mokjang: ''
}


const EditUserRow = ({ user, saveUserInfo }) => {

  const [role, setRole] = useState(user.role);
  const [mokjang, setMokjang] = useState(user.mokjang);
  
  const handleSave = () => {
    saveUserInfo({
      role,
      chowon: user.chowon,
      mokjang
    })
  }

  const handleRoleChange = (event) => {
    setRole(event.target.value)
  };

  return (
    <TableRow key={user.name}>
      <TableCell component="th" scope="row">
        {user.name}
      </TableCell>
      <TableCell align="right">{user.email}</TableCell>
      <TableCell align="right">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          onChange={handleRoleChange}
        >
          <MenuItem value='담임목사'>담임목사</MenuItem>
          <MenuItem value='초원장'>초원장</MenuItem>
          <MenuItem value='목자'>목자</MenuItem>
          <MenuItem value='관리자'>관리자</MenuItem>
        </Select>
      </TableCell>
      <TableCell align="right">
        <MokjangSelectContainer handleMokjangChange={setMokjang} mokjang={mokjang} />
      </TableCell>

      {/* <TableCell component="th" scope="row">
        <IconButton disabled={disableSave} onClick={handleSave}>
          <DoneIcon />
        </IconButton>
        <IconButton onClick={cancel}>
          <ClearIcon />
        </IconButton>
      </TableCell> */}

    </TableRow>
  )
}

export default EditUserRow;