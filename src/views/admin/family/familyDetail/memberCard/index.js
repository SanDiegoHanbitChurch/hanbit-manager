import React, { useState } from 'react';
import MemberCard from './memberCard';
import EditMemberDialog from './editMemberDialog';

const MemberCardContainer = ({index, member, saveMemberInfo}) => {
  const [editMode, setEditMode] = useState(false);
  const editMember = () => setEditMode(true);
  const handleCancel = () => setEditMode(false);
  const handleSave = (memberInfo) => {
    saveMemberInfo(index, memberInfo);
    setEditMode(false);
  } 

  return (
    <>
      <MemberCard member={member} editMember={editMember} />
      <EditMemberDialog open={editMode} member={member} handleSave={handleSave} handleCancel={handleCancel} />
    </>
  )
}

export default MemberCardContainer;