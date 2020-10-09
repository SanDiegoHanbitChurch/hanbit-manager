import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableBody, TableCell, Container, Paper } from '@material-ui/core';
import AddFab from '../../../shared/addFab';
import UserRow from './userRow';
import AddUser from '../addUser';

const UserList = ({ userList, deleteUser, updateUser, addUser }) => {

  const [showNewUserRow, setShowNewUserRow] = useState(false);
  const addNewUser = () => {
    setShowNewUserRow(true);
  }
  const handleAddUser = (user) => {
    //to do: save user
    addUser(user)
    setShowNewUserRow(false);
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
            {showNewUserRow && <AddUser cancel={cancel} addUser={handleAddUser} />}
            { userList.map(user => <UserRow user={user} deleteUser={deleteUser} updateUser={updateUser} />) }
          </TableBody>
        </Table>
      </Container>
      <AddFab onClick={addNewUser} />
    </>
  )
}

export default UserList;
