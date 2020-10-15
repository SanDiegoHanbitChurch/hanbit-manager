import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, IconButton, Box } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { uploadFile } from '../../actions/storage';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
}));

const EditableAvatar = ({ name, avatarUrl, saveAvatarUrl }) => {

    const classes = useStyles();
    const [ avatarUrlState, setAvatarUrlState ] = useState(avatarUrl);
    const inputFile = useRef(null);

    const handleEditClick = () => {
        inputFile.current.click();
    }
    const handleInputFileChange = async (event) => {
        event.stopPropagation();
        event.preventDefault();
        var file = event.target.files[0];

        const { url } = await uploadFile(file);
        setAvatarUrlState(url);
        saveAvatarUrl(url);
    }

    return (
        <>
            <Box display='flex' m={1}>
                <Avatar alt={name} src={avatarUrlState} className={classes.large}/>
                <IconButton onClick={handleEditClick}>
                    <EditIcon fontSize="small"/>
                </IconButton>
            </Box>
            <input
                type='file'
                id='file'
                ref={inputFile}
                style={{ display: 'none'}}
                onChange={handleInputFileChange}
                accept="image/x-png,image/gif,image/jpeg"
            />
        </>
    )
}

export default EditableAvatar;

