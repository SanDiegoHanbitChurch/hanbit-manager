import React from 'react';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import MemberAvatar from './memberAvatar';

const MembersAvatarGroup = ({members}) => (
    <AvatarGroup spacing='small'>
        { members.map(member => <MemberAvatar member={member} />)}
    </AvatarGroup>
)

export default MembersAvatarGroup;
