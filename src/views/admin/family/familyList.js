import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar,
    Avatar, ListItemIcon  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const getFamilyName = (members) => {
    return members.map(member => member.koreanName).join('/');
}

const renderFamily = ({ id, members }) => {

    const familyName = getFamilyName(members);

    return (
        <ListItem button component={Link} to={`/family/${id}`}>
            <ListItemAvatar>
                <Avatar alt={members[0].koreanName} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText primary={familyName}/>
            <ListItemIcon>
                <EditIcon />
            </ListItemIcon>
        </ListItem>
    )
}

const FamilyList = ({familyList}) => {

    return (
        <List>
            { familyList.map(family => renderFamily(family))}
        </List>
    )
}

export default FamilyList;
