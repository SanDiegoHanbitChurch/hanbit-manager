import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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

const Header = ({ user }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar position="static" style={{ background: 'linear-gradient(to right, #64b5f6, #e3f2fd)' }}>
            <Toolbar>
              <MenuButton user={user}/>
              <Typography variant="h6" className={classes.title}>
                교인정보 관리
              </Typography>
              { user &&
                <IconButton component={Link} to='/'>
                  <HomeIcon />
                </IconButton>
              }
            </Toolbar>
          </AppBar>
        </div>
    )
};

export default Header;
