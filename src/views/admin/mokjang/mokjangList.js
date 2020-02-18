import React, {useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddMokjangDialog from './addMokjangDialog';
import { Typography } from '@material-ui/core';

/* 
  <MokjangList  mokjanglist={mokjangList} />
*/

const renderMokjang = (mokjang, editMokjang, deleteMokjang) => {
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

const MokjangList = ({ mokjangList, addMokjang, editMokjang, deleteMokjang, chowonList }) => {

    const [open, setOpen] = useState(false);
    const openDialog = () => setOpen(true);
    const handleCancel = () => setOpen(false);
    const handleAdd = (name, leader, chowon) => {
      addMokjang({
        chowon,
        name,
        leader
      });
      setOpen(false);
    }

    return (
        <>
            <Typography>
                Mokjang List
            </Typography>
            <List>
                {mokjangList.map(mokjang => renderMokjang(mokjang, editMokjang, deleteMokjang))}
            </List>
            <Fab color='primary'>
                <AddIcon onClick={openDialog}/>
            </Fab>
            <AddMokjangDialog open={open} handleCancel={handleCancel} handleAdd={handleAdd} chowonList={chowonList} />
        </>
    )
}

MokjangList.defaultProps = {
    mokjangList: [],
    chowonList: [],
    addMokjang: () => {},
    editMokjang: () => {},
    deleteMokjang: () => {}
}

export default MokjangList;