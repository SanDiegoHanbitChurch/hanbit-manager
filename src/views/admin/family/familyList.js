import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar,
    Avatar, ListItemIcon  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const getFamilyName = (members) => {
    return members.map(member => member.koreanName).join('/');
}

const renderFamily = ({ id, members }, editFamily) => {

    const familyName = getFamilyName(members);

    return (
        <ListItem button onClick={() => editFamily(id)}>
            <ListItemAvatar>
                <Avatar alt={members[0].koreanName} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText primary={familyName}/>
            <ListItemIcon onClick={() => editFamily(id)}>
                <EditIcon />
            </ListItemIcon>
        </ListItem>
    )
}

const FamilyList = ({familyList, editFamily}) => {

    return (
        <List>
            { familyList.map(family => renderFamily(family, editFamily))}
        </List>
    )
}

export default FamilyList;
