import React, { useState } from 'react';
import MemberCard from './memberCard';
import EditMemberCard from '../editMemberCard';

const MemberCardContainer = ({member}) => {
  const [editMode, setEditMode] = useState(false);
  const saveMemberInfo = (memberInfo) => setEditMode(false);
  const cancel = () => setEditMode(false);
  const editMember = () => setEditMode(true);

  return editMode ? <EditMemberCard member={member} saveMemberInfo={saveMemberInfo} cancel={cancel} /> :
    <MemberCard member={member} editMember={editMember} />
  
}

export default MemberCardContainer;