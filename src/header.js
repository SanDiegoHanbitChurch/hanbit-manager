import React from 'react';
import AuthButton from './views/authButton';
import { AppBar, Toolbar } from '@material-ui/core';

const Header = ({ setUser }) => (
    <AppBar position="static">
        <Toolbar>
            <AuthButton setUser={setUser}/>            
        </Toolbar>
    </AppBar>
);

export default Header;
