import React from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 50,
    bottom: 50,
    left: 'auto',
    position: 'fixed',
};

const AddFab = ({ onClick }) => {

    return (
        <Fab style={fabStyle} color='primary'>
            <AddIcon onClick={onClick} />
        </Fab>
    )
}

export default AddFab;
