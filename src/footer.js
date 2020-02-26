import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Footer = () => (
    <Typography variant="body2" color="textSecondary" align='center'>
        {'Copyright © '}
        <Link color="inherit" href="https://sdhanbit.org/">
            샌디에고 한빛교회
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
);

export default Footer;
