import React, { useState } from 'react';
import { Container, Paper, Button, TextField, Box, Typography } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone'
import MUIRichTextEditor from 'mui-rte'
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const MessageCreator = (props) => {
    const [subject, setSubject] = useState(null);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [attachments, setAttachements] = useState([]);
    const enableSendButton = subject && editorState.getCurrentContent().hasText();

    const handleFileAdded = (files) => setAttachements(files);
    const handleSendMessage = () => {
        const rawContentState = convertToRaw(editorState.getCurrentContent()); 
        const markup = draftToHtml(
            rawContentState, 
        );
        props.sendMessage({ name: props.name, email: props.email, subject, content: markup, attachments})
    }

    return (
        <Container component={Paper}>
            <Box m={1}>
                <Typography variant='h6'>From: {`${props.name} <${props.email}>`}</Typography>
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
            <Box m={1} border={1} height='200px'>
                <MUIRichTextEditor 
                    label="Start typing..." 
                    onChange={setEditorState}
                />
            </Box>
            <Box m={1}>
                <DropzoneArea 
                    onChange={handleFileAdded}
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
