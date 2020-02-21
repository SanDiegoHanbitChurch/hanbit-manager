import React from 'react';
import FamilyList from '../../family/familyList';
import Typography from '@material-ui/core/Typography';


const MokjangDetail = ({ name, leader, memberFamilies = [] }) => {
  return (
    <>
      <Typography >
        Name: {name}
      </Typography>
      <Typography >
        Leader: {leader}
      </Typography>
      <FamilyList familyList={memberFamilies} />
    </>
  )
}

export default MokjangDetail;