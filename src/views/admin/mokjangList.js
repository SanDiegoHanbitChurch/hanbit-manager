import React, {useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

/* 
  <MokjangList  mokjanglist={mokjangList} />
*/

const renderMokjang = (mokjang, editMokjang, deleteMokjang) => {
    console.log({
        mokjang,
        editMokjang,
        deleteMokjang
    });
    const { id, name, leader, chowon } = mokjang;

    return (
        <ListItem key={id}>
            <ListItemText primary={`${name} (${chowon})`} secondary={leader} />
            <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => editMokjang(id)} >
                    <EditIcon />
                </IconButton>
                <IconButton edge="end" onClick={() => deleteMokjang(id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

const MokjangList = ({ mokjangList, editMokjang, deleteMokjang }) => {

    return (
            <List>
                {mokjangList.map(mokjang => renderMokjang(mokjang, editMokjang, deleteMokjang))}
            </List>
    )
}

export default MokjangList;