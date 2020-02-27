import React from 'react';
import Table from '@material-ui/core/Table';
import Header from './header';
import Body from './body';

const FamilyMembers = ({members}) => {
  return (
    <Table >
      <Header />
      <Body members={members}/>
    </Table>
  )
}

export default FamilyMembers;