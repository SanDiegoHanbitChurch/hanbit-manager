import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    }
  }));


const MenuButton = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    const classes = useStyles();

    return (
        <>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem component={Link} to='/chowon' onClick={handleClose}>초원</MenuItem>
                <MenuItem component={Link} to='/mokjang' onClick={handleClose}>목장</MenuItem>
                <MenuItem component={Link} to='/family' onClick={handleClose}>가족</MenuItem>
                <MenuItem component={Link} to='/user' onClick={handleClose}>사용자</MenuItem>
            </Menu>
        </>
    )
}

export default MenuButton;
