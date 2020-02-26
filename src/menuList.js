import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Link } from 'react-router-dom';

const menuConfigs = [
    {
        to: '/chowon',
        text: '초원',
        roles: ['관리자', '담임목사', '초원장', '목자'],
        icon: HomeIcon
    },
    {
        to: '/mokjang',
        text: '목장',
        roles: ['관리자', '담임목사', '초원장', '목자'],
        icon: HomeIcon
    },
    {
        to: '/family',
        text: '가족',
        roles: ['관리자', '담임목사', '초원장', '목자'],
        icon: HomeIcon
    },
    {
        to: '/user',
        text: '사용자',
        roles: ['관리자'],
        icon: HomeIcon
    },
    {
        to: '/visitor',
        text: '방문자',
        roles: ['관리자'],
        icon: HomeIcon
    }
]

const renderMenuItem = (user, { to, text, roles, icon: Icon }) => {

    return roles.includes(user.role)
        ?
            <>
                <ListItem component={Link} to={to}>
                    <ListItemIcon>
                        <Icon />
                    </ListItemIcon>
                    <ListItemText>
                        {text}
                    </ListItemText>
                </ListItem>
                <Divider />
            </>
        : null;
}

const MenuList = ({ user, logout }) => {

    if (user) {
        return (
            <List>
                { menuConfigs.map(menuConfig => renderMenuItem(user, menuConfig)) }
                <ListItem onClick={logout}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Logout
                    </ListItemText>
                </ListItem>
            </List>
        )
    }

    return null;
}

export default MenuList;
