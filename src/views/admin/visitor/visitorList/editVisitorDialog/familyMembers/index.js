import React from 'react';
import Table from '@material-ui/core/Table';
import Body from './body';

const FamilyMembers = ({ members, setMembers }) => {

  return (
    <Table size='small'>
      <Body members={members} setMembers={setMembers}/>
    </Table>
  )
}

export default FamilyMembers;