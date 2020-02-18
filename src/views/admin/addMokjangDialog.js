import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const renderMenuItem = (chowon) => {
  return (
    <MenuItem value={chowon.name}>{chowon.name}</MenuItem>
  )
}

const AddMokjangDialog = ({open, handleCancel, handleAdd, chowonList}) => {
  const [name, setName] = useState('');
  const [leader, setLeader] = useState('');
  const [chowon, setChowon] = useState('');

  const handleAddClick = () => {
    handleAdd(name, leader, chowon);
    setName('');
    setLeader('');
    setChowon('');
  }

  return (
    <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Mokjang</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create new Mokjang, input Mokjang name and leader.
          </DialogContentText>
          <InputLabel id="demo-simple-select-label">Chowon</InputLabel>
          <Select
            labelId="chowon-select-label"
            id="chowon-select"
            value={chowon}
            onChange={(event) => setChowon(event.target.value)}
          >
            {chowonList.map(chowon => renderMenuItem(chowon))}
          </Select>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Mokjang name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="leader"
            label="Mokjang leader name"
            type="text"
            value={leader}
            onChange={(event) => setLeader(event.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddClick} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
  )
}

AddMokjangDialog.defaultProps = {
  chowonList:[],
  handleCancel: () => {},
  handleAdd: () => {}
}

export default AddMokjangDialog;