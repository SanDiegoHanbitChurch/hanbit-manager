import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

const style = {
  fontFamily: 'Nanum Gothic'
}

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar position="static" style={{ background: 'linear-gradient(to right, #64b5f6, #e3f2fd)' }}>
            <Toolbar>
              <Typography variant="h6" style={style} className={classes.title}>
                교인정보 관리
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
    )
};

export default Header;
