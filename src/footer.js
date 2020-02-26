import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const Footer = () => (
    <Box m={3}>
        <Typography variant="body2" color="textSecondary" align='center'>
            {'Copyright © '}
            <Link color="inherit" href="https://sdhanbit.org/">
                샌디에고 한빛교회
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    </Box>
);

export default Footer;
