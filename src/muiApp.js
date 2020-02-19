import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Views from './views';
import ErrorBundary from './errorBoundary';

const MuiApp = () => (
    <ErrorBundary>
        <CssBaseline />
        <Container maxWidth="md">
            <Views />
        </Container>
    </ErrorBundary>
)

export default MuiApp;
