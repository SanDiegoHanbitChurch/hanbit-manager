import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Drawer } from '@material-ui/core';
import MenuList from './menuList';


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    toolbar: theme.mixins.toolbar,
  }));

const style = {
  fontFamily: 'Nanum Gothic'
}

const Header = ({ user, logout }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar} style={{ background: 'linear-gradient(to right, #64b5f6, #e3f2fd)' }}>
            <Toolbar>
              <Typography variant="h6" style={style} className={classes.title}>
                교인정보 관리
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant='permanent' className={classes.drawer}>
            <div className={classes.toolbar} />
            <MenuList user={user} logout={logout} />
          </Drawer>
        </div>
    )
};

export default Header;
