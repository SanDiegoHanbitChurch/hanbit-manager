import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions, DialogTitle,
    TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    suggestion: {
        width: '500px'
    }
}));

const SuggestionDialog = ({ open, handleSubmit, handleCancel } ) => {
    const classes = useStyles();

    const [suggestion, setSuggestion] = useState('');

    return (
        <Dialog open={open}>
            <DialogTitle>
                건의사항
            </DialogTitle>
            <DialogContent>
                <TextField
                    id="standard-multiline-static"
                    multiline
                    variant='outlined'
                    width="75%"
                    rows="4"
                    value={suggestion}
                    onChange={(event) => setSuggestion(event.target.value)}
                    InputProps={{ classes: { input: classes.suggestion } }}
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel} color="primary">
                    Cancel
                </Button>
                <Button 
                    disabled={suggestion.length === 0} 
                    onClick={() => handleSubmit(suggestion)} 
                    color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default SuggestionDialog;
