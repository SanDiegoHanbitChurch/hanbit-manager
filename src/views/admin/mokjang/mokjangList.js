import React, {useState} from 'react';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddMokjangDialog from './addMokjangDialog';
import { Typography } from '@material-ui/core';
import MokjangCard from './mokjangCard';

const renderMokjang = (mokjang, editMokjang, deleteMokjang) => {

    return (
        <MokjangCard {...mokjang} editMokjang={editMokjang} />
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