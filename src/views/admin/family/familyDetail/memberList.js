import React from 'react';
import MemberCard from './memberCard';
import { GridListTile } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';

const renderMember = (index, member, saveMemberInfo) => {
  return (
    <GridListTile cols={1} >
      <MemberCard index={index} member={member} saveMemberInfo={saveMemberInfo}/>
    </GridListTile>
  )
}
const MemberList = ({members, saveFamilyMembers}) => {
  const saveMemberInfo = (index, memberInfo) => {
    members[index] = memberInfo;
    saveFamilyMembers(members);
  } 

  return (
    <GridList>
      {members.map((member, index) => renderMember(index, member, saveMemberInfo))}
    </GridList>
  )
}

export default MemberList;