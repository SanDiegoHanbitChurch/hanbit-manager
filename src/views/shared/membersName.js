import React from 'react';
import Typography from '@material-ui/core/Typography';

const MembersName = ({members}) => (
    <Typography>
        { members.map(member => member.koreanName).join('/')}
    </Typography>
)

export default MembersName;
