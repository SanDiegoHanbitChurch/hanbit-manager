import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const renderChowon = (chowon, editChowon, deleteChowon) => {
  const { id, name, leader } = chowon;

  return (
    <ListItem key={id}>
      <ListItemText primary={name} secondary={leader} />
      <ListItemSecondaryAction>
          <IconButton edge="end" onClick={() => editChowon(id)} >
              <EditIcon />
          </IconButton>
          <IconButton edge="end" onClick={() => deleteChowon(id)}>
              <DeleteIcon />
          </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

const ChowonList = ({ chowonList, editChowon, deleteChowon}) => {
  return (
    <List>
      {chowonList.map(chowon => renderChowon(chowon, editChowon, deleteChowon))}
    </List>
  )
}

export default ChowonList;