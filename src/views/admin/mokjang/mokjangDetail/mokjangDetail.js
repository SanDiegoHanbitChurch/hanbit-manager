import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar'

const MokjangDetail = ({ name, leader, avatar }) => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' m={1}>
      <Box m={1}>
        <Avatar alt={name} src={avatar} />
      </Box>
      <Typography >
        {`${name} 목장`} | {leader}
      </Typography>
    </Box>
  )
}

export default MokjangDetail;
