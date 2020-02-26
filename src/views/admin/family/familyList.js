import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar,
    Avatar, ListItemIcon } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const getFamilyName = (members) => {
    return members.map(member => member.koreanName).join('/');
}

const renderFamily = ({ id, members = [] }) => {

    const familyName = getFamilyName(members);

    return (
        <ListItem button component={Link} to={`/family/${id}`}>
            <ListItemAvatar>
                <Avatar alt={members[0].koreanName} src='https://i.pravatar.cc/300' />
            </ListItemAvatar>
            <ListItemText primary={familyName}/>
            <ListItemIcon>
                <ArrowForwardIosIcon />
            </ListItemIcon>
        </ListItem>
    )
}

const FamilyList = ({familyList = []}) => {

    return (
        <List>
            { familyList.map(family => renderFamily(family))}
        </List>
    )
}

export default FamilyList;
