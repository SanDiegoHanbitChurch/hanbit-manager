import React from 'react';
import { Typography } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

const renderMember = ({koreanName}) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt={koreanName} src='/abc/xyc.jpg' />
            </ListItemAvatar>
            <ListItemText>{koreanName}</ListItemText>
        </ListItem>
    )
}

const FamilyDetail = ({ family }) => {
    const { address, mokjang, members } = family;

    return (
        <>
            <Typography color='primary'>{mokjang}</Typography>
            <Typography color='primary'>{address}</Typography>
            <List>
                { members.map(member => renderMember(member))}
            </List>
        </>
    )
}

export default FamilyDetail;
