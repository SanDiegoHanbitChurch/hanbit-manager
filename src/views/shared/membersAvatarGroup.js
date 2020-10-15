import React from 'react';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import MemberAvatar from './memberAvatar';

const MembersAvatarGroup = ({members}) => (
    <AvatarGroup spacing='small'>
        { members.map((member, index) => <MemberAvatar key={index} member={member}/>)}
    </AvatarGroup>
)

export default MembersAvatarGroup;
