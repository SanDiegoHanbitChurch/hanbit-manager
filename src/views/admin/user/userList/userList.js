import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableBody, TableCell, Container, Paper, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import UserRow from './userRow';
import AddUser from '../addUser';

const fabStyle = {
  margin: 0,
  top: 'auto',
  right: 50,
  bottom: 50,
  left: 'auto',
  position: 'fixed',
};

const UserList = ({ userList, deleteUser, updateUser }) => {

  const [showNewUserRow, setShowNewUserRow] = useState(false);
  const addNewUser = () => {
    setShowNewUserRow(true);
  }

  const cancel = () => setShowNewUserRow(false);
  
  return (
    <>
      <Container component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                이름
              </TableCell>
              <TableCell>
                이메일
              </TableCell>
              <TableCell>
                역활
              </TableCell>
              <TableCell>
                초원
              </TableCell>
              <TableCell>
                목장
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {showNewUserRow && <AddUser cancel={cancel} />}
            { userList.map(user => <UserRow user={user} deleteUser={deleteUser} updateUser={updateUser} />) }
          </TableBody>
        </Table>
      </Container>
      <Fab style={fabStyle} color='primary'>
        <AddIcon onClick={addNewUser} />
      </Fab>
    </>
  )
}

export default UserList;
