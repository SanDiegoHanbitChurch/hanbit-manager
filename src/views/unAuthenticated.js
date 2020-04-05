import React from 'react';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TodaysVerse from './shared/todaysVerse';
import HanbitLogoSvg from '../hanbitLogoSvg';

const style = {
    fontFamily: 'Nanum Gothic'
}  

const Unauthenticated = ({ login, authError }) => {
    
    return (
        <>
            <AppBar position="fixed" style={{ background: 'linear-gradient(to right, #64b5f6, #e3f2fd)' }}>
                <Toolbar>
                <IconButton>
                  <HanbitLogoSvg height="35px" width="35px" />
                </IconButton>
                <Typography variant="h6" noWrap style={style}>
                    교인정보 관리
                </Typography>
                </Toolbar>
            </AppBar>
            <Box mt={20} display='flex' alignItems='center' flexDirection='column'>
                <TodaysVerse />
                <Box m={3}>
                    <Button variant='outlined' onClick={login}>Login</Button>
                </Box>
                <Typography>{authError}</Typography>
            </Box>
        </>
    )
};

export default Unauthenticated;
