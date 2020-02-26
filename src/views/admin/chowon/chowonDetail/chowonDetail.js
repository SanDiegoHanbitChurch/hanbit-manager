import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const ChowonDetail = ({ name, leader, mokjangList = []}) => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' >
      <Typography >
        {`${name} 초원`} | {leader}
      </Typography>
    </Box>
  )
}

export default ChowonDetail;