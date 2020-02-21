import React from 'react';
import Typography from '@material-ui/core/Typography';

const ChowonDetail = ({ name, leader, mokjangList = []}) => {
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

export default ChowonDetail;