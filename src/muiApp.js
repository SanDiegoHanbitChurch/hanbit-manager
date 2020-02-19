import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Views from './views';

const MuiApp = () => (
    <>
        <CssBaseline />
        <Container maxWidth="md">
            <Views />
        </Container>
    </>
)

export default MuiApp;
