import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Box } from '@material-ui/core';

const NewNote = ({ addNote }) => {

    const [comment, setComment] = useState('');

    return (
        <Container component={Paper}>
            <Box display='flex' flexDirection='column'>
                <TextField
                    multiline
                    variant='outlined'
                    fullWidth
                    rows="4"
                    placeholder='Notes'
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                />
                <Button
                    onClick={() => addNote(comment)}
                    disabled={comment.length === 0}
                    color='primary'
                >
                    Submit
                </Button>
            </Box>
        </Container>
    )
}

export default NewNote;
