import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EditableAvatar from '../../../shared/editableAvatar';

const MokjangDetail = ({ id, name, leader, avatar, saveMokjangDetail }) => {

  const handleSaveAvatarUrl = async (url) => {
    await saveMokjangDetail({
      id,
      name,
      leader,
      avatar: url
    });
  }

  return (
    <Box display='flex' justifyContent='center' alignItems='center' m={1}>
      <Box m={1}>
        <EditableAvatar alt={name} src={avatar} saveAvatarUrl={handleSaveAvatarUrl}/>
      </Box>
      <Typography >
        {`${name} 목장`} | {leader}
      </Typography>
    </Box>
  )
}

export default MokjangDetail;
