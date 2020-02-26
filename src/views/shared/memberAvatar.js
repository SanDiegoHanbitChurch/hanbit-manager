import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const MemberAvatar = (member) => (
    <Avatar alt={member.koreanName} src={`member.avatar ? ${member.avatar} : 'https://i.pravatar.cc/300`} />
)

export default MemberAvatar;