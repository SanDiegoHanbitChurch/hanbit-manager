import React, { useState } from 'react';
import { Container, Paper, Typography, IconButton, TextField, Box } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear'

const EditableText = ({title, data, onSave}) => {

    const [edit, setEdit] = useState(false);
    const [newData, setNewData] = useState(data);
    const handleOnSave = (event) => {
        setEdit(false);
        onSave(newData);
    }
    const handleOnCancel = () => setEdit(false);

    return (
        <Container component={Paper}>
            <Typography variant='h6'>{title}</Typography>
            { 
                !edit &&
                    <Box m={1} display='flex' justifyItems='center'>
                        <IconButton onClick={() => setEdit(true)}>
                            <EditIcon />
                        </IconButton>
                        <Box />
                        <Typography>{data}</Typography>
                    </Box>
            }
            {
                edit &&
                    <Box m={1} display='flex'>
                        <IconButton onClick={handleOnSave}>
                            <CheckIcon />
                        </IconButton>
                        <IconButton onClick={handleOnCancel}>
                            <ClearIcon />
                        </IconButton>
                        <TextField
                            value={newData}
                            onChange={(event) => setNewData(event.target.value)}
                            fullWidth
                        />
                        <Typography>{data}</Typography>
                    </Box>
            }
        </Container>
    );
}

export default EditableText;