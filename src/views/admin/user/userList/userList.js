import React from 'react';
import { Table, TableHead, TableRow, TableBody, TableCell, Container, Paper } from '@material-ui/core';
import UserRow from './userRow'


const UserList = ({ userList, deleteUser, updateUser }) => {

  return (
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
          { userList.map(user => <UserRow user={user} deleteUser={deleteUser} updateUser={updateUser} />) }
        </TableBody>
      </Table>
    </Container>
  )
}

export default UserList;
