import React, { useState } from 'react';
import { Container, Paper, Select, Typography, MenuItem, IconButton, Box } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check'

const renderEditMode = (data, lookup, setData, handleOnSave, handleOnCancel) => {

    return (
        <Box m={1} display='flex' justifyItems='center'>
            <IconButton onClick={handleOnSave}>
                <CheckIcon />
            </IconButton>
            <IconButton onClick={handleOnCancel}>
                <ClearIcon />
            </IconButton>
            <Select
                value={data}
                onChange={(event) => setData(event.target.value)}
            >
                { lookup.map(({key, value}) => <MenuItem value={value}>{key}</MenuItem>) }
            </Select>
        </Box>
    )
}

const renderNonEditMode = (data, setEdit) => {

    return (
        <Box m={1} display='flex' justifyItems='center'>
            <IconButton onClick={() => setEdit(true)}>
                <EditIcon />
            </IconButton>
            <Typography>
                {data}
            </Typography>
        </Box>
    )
}

const EditableSelect = ({ title, data, lookup, onSave }) => {
    const [edit, setEdit] = useState(false);
    const [newData, setNewData] = useState(data);
    const handleOnSave = () => {
        setEdit(false);
        onSave(newData);
    }
    const handleOnCancel = () => setEdit(false);

    return (
        <Container component={Paper}>
            <Typography variant='h6'>{title}</Typography>
            {
                edit
                    ? renderEditMode(newData, lookup, setNewData, handleOnSave, handleOnCancel)
                    : renderNonEditMode(newData, setEdit)
            }
        </Container>
    )
}

export default EditableSelect;