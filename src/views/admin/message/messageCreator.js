import React, { useState } from 'react';
import { Container, Paper, Button, TextField, Box } from '@material-ui/core';
import MUIRichTextEditor from 'mui-rte'
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const MessageCreator = ({ senderEmail = null, sendMessage }) => {
    const [from, setFrom] = useState(senderEmail);
    const [subject, setSubject] = useState(null);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const enableSendButton = from && subject && editorState.getCurrentContent().hasText();

    const handleSendMessage = () => {
        const rawContentState = convertToRaw(editorState.getCurrentContent()); 
        const markup = draftToHtml(
            rawContentState, 
        );
        sendMessage({ from, subject, content: markup})
    }

    return (
        <Container component={Paper}>
            <Box m={1}>
                <TextField
                    required
                    label='Email'
                    value={from}
                    fullWidth
                    onChange={(event) => setFrom(event.target.value)}
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
            <Box m={1}>
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
