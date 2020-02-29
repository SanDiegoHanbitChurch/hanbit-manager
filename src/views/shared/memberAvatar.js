import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const DEFAULT_AVATAR = '/broken-image.jpg';
const getAvatarSrc = (member) => member.avatar ? member.avatar : DEFAULT_AVATAR;

const MemberAvatar = (member) => (
    <Avatar alt={member.koreanName} src={getAvatarSrc(member)} />
)

export default MemberAvatar;