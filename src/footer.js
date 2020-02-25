import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const Footer = () => (
    <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                샌디에고 한빛교회
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    </Container>

);

export default Footer;
