import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import App from './app';
import ErrorBundary from './errorBoundary';

const MuiApp = () => (
    <ErrorBundary>
        <CssBaseline />
        <Container maxWidth="md">
            <App />
        </Container>
    </ErrorBundary>
)

export default MuiApp;
