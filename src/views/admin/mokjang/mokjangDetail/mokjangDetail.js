import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const MokjangDetail = ({ name, leader }) => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' >
      <Typography >
        {`${name} 목장`} | {leader}
      </Typography>
    </Box>
  )
}

export default MokjangDetail;