import React from 'react';
import MemberCard from './memberCard';
import { GridListTile } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';

const renderMember = (member) => {
  return (
    <GridListTile cols={1} >
      <MemberCard member={member} />
    </GridListTile>
  )
}
const MemberList = ({members}) => {
  return (
    <GridList cellHeight={400} >
      {members.map(member => renderMember(member))}
    </GridList>
  )
}

export default MemberList;