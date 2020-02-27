import React from 'react';
import faker from 'faker';
import Avatar from '@material-ui/core/Avatar';

const MemberAvatar = (member) => (
    <Avatar alt={member.koreanName} src={`${member.avatar ? member.avatar : faker.image.avatar()}`} />
)

export default MemberAvatar;