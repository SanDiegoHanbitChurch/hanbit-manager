import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const ChowonCard = ({ id, name, leader, editChowon }) => {
    
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar alt={leader} src='/static/avatar.jpg' />
                }
                action={
                    <IconButton onClick={() => editChowon(id)}>
                      <EditIcon />
                    </IconButton>
                }
                title={`${name}`}
                subheader={leader}
            />
        </Card>
    )
}

export default ChowonCard;