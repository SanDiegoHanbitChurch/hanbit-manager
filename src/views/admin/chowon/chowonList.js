import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddChowonDialog from './addChowonDialog';
import { Typography } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ChowonCard from './chowonCard';

const renderChowon = (chowon, editChowon, deleteChowon) => {
  return (
    <ChowonCard {...chowon} editChowon={editChowon} />
  )
}

const ChowonList = ({ chowonList, addChowon, editChowon, deleteChowon}) => {

  console.log('rendering chowon list');
  
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
      <GridList cellHeight={120} cols={3}>
        {chowonList.map(chowon => (
            <GridListTile key={chowon.id} cols={1}>
                { renderChowon(chowon, editChowon, deleteChowon) }
            </GridListTile>
        ))}
            </GridList>
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
