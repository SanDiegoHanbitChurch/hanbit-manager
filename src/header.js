import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AuthButton from './views/authButton';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuButton from './menuButton';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = ({ setUser, user }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <MenuButton user={user}/>
              <Typography variant="h6" className={classes.title}>
                교인정보 관리
              </Typography>
              <IconButton component={Link} to='/'>
                <HomeIcon />
              </IconButton>
              <AuthButton setUser={setUser} />
            </Toolbar>
          </AppBar>
        </div>
    )
};

export default Header;
