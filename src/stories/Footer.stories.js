import React from 'react';
import Footer from '../footer';
import Container from '@material-ui/core/Container';

export default {
    title: 'Footer',
    component: Footer
}

export const defaultRendering = () => 
<Container maxWidth="sm">
    <Footer />
</Container>