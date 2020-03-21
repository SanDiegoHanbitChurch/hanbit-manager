import React, { useState } from 'react';
import { Container, Paper, Button, TextField, Box } from '@material-ui/core';
import MUIRichTextEditor from 'mui-rte'
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const MessageCreator = (props) => {
    const [name, setName] = useState(props.name)
    const [email, setEmail] = useState(props.email);
    const [subject, setSubject] = useState(null);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const enableSendButton = email && subject && editorState.getCurrentContent().hasText();

    const handleSendMessage = () => {
        const rawContentState = convertToRaw(editorState.getCurrentContent()); 
        const markup = draftToHtml(
            rawContentState, 
        );
        props.sendMessage({ name, email, subject, content: markup})
    }

    return (
        <Container component={Paper}>
            <Box m={1}>
                <TextField
                    required
                    label='Name'
                    value={name}
                    fullWidth
                    onChange={(event) => setName(event.target.value)}
                />
            </Box>
            <Box m={1}>
                <TextField
                    required
                    label='Email'
                    value={email}
                    fullWidth
                    onChange={(event) => setEmail(event.target.value)}
                />
            </Box>
            <Box m={1}>
                <TextField
                    required
                    label='Subject'
                    value={subject}
                    fullWidth
                    onChange={(event) => setSubject(event.target.value)}
                />
            </Box>
            <Box m={1} border={1}>
                <MUIRichTextEditor 
                    label="Start typing..." 
                    onChange={setEditorState}
                />
            </Box>
            <Box m={1}>
                <Button 
                    color='primary' 
                    variant='contained' 
                    onClick={handleSendMessage}
                    disabled={!enableSendButton}
                >Send</Button>
            </Box>
        </Container>
    )
};

export default MessageCreator;
