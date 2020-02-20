import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const MokjangCard = ({ id, name, leader, chowon, memberFamilies = [], editMokjang }) => {
    
    
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar alt={leader} src='/static/avatar.jpg' />
                }
                action={
                    <IconButton onClick={() => editMokjang(id)}>
                      <EditIcon />
                    </IconButton>
                }
                title={`${name} (${chowon})`}
                subheader={leader}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {memberFamilies.join(', ')}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default MokjangCard;
