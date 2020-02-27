import React from 'react';
import Table from '@material-ui/core/Table';
import Header from './header';
import Body from './body';

const FamilyMembers = ({ members, setMembers }) => {

  return (
    <Table size='small'>
      <Header />
      <Body members={members} setMembers={setMembers}/>
    </Table>
  )
}

export default FamilyMembers;