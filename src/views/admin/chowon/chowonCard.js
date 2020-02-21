import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Box from '@material-ui/core/Box';

const ChowonCard = ({ id, name, leader, editChowon }) => {
    
    return (
      <Box m={1}>
        <Card>
            <CardHeader
                avatar={
                    <Avatar alt={name} src='/static/avatar.jpg' />
                }
                action={
                    <IconButton onClick={() => editChowon(name)}>
                      <EditIcon />
                    </IconButton>
                }
                title={`${name}`}
                subheader={leader}
            />
        </Card>
      </Box>
    )
}

export default ChowonCard;