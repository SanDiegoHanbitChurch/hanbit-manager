import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddChowonDialog from './addChowonDialog';
import { Typography } from '@material-ui/core';

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

const ChowonList = ({ chowonList, addChowon, editChowon, deleteChowon}) => {

  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const handleCancel = () => setOpen(false);
  const handleAdd = (name, leader) => {
    addChowon({
      name,
      leader
    });
    setOpen(false);
  }

  return (
    <>
      <Typography>
        Chowon List
      </Typography>
      <List>
        {chowonList.map(chowon => renderChowon(chowon, editChowon, deleteChowon))}
      </List>
      <Fab color='primary'>
        <AddIcon onClick={openDialog}/>
      </Fab>
      <AddChowonDialog open={open} handleCancel={handleCancel} handleAdd={handleAdd} />
    </>
  )
}

ChowonList.defaultProps = {
  chowonList: [],
  addChowon: () => {},
  editChowon: () => {},
  deleteChowon: () => {}
}

export default ChowonList;