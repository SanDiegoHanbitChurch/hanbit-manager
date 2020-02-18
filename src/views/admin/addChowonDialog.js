import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddChowonDialog = ({open, handleCancel, handleAdd}) => {
  const [name, setName] = useState('');
  const [leader, setLeader] = useState('');

  const handleAddClick = () => {
    handleAdd(name, leader);
    setName('');
    setLeader('');
  }

  return (
    <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Chowon</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create new Chowon, input Chowon name and leader.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Chowon name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="leader"
            label="Chowon leader name"
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

export default AddChowonDialog;