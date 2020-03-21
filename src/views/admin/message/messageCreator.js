import React, { useState } from 'react';
import { Container, Paper, Button, TextField, Box } from '@material-ui/core';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const MessageCreator = ({ senderEmail = null, sendMessage }) => {
    const [from, setFrom] = useState(senderEmail);
    const [subject, setSubject] = useState(null);
    const [content, setContent] = useState('');
    const enableSendButton = from && subject && content;

    const handleSendMessage = () => sendMessage({ from, subject, content})

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
                <CKEditor
                    editor={ ClassicEditor }
                    data={content}
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        setContent(data);
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
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
