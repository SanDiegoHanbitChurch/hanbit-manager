import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AuthButton from './views/authButton';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MenuButton from './menuButton';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = ({ setUser }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <MenuButton />
              <Typography variant="h6" className={classes.title}>
                교인정보 관리
              </Typography>
              <AuthButton setUser={setUser} />
            </Toolbar>
          </AppBar>
        </div>
    )
};

export default Header;
