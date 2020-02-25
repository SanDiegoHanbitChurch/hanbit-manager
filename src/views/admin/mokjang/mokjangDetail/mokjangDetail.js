import React from 'react';
import Typography from '@material-ui/core/Typography';


const MokjangDetail = ({ name, leader }) => {
  return (
    <>
      <Typography >
        Name: {name}
      </Typography>
      <Typography >
        Leader: {leader}
      </Typography>
    </>
  )
}

export default MokjangDetail;