import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider} from '@material-ui/core';

const menuConfigs = [
    {
        to: '/chowon',
        text: '초원',
        roles: ['관리자', '담임목사', '초원장', '목자']
    },
    {
        to: '/mokjang',
        text: '목장',
        roles: ['관리자', '담임목사', '초원장', '목자']
    },
    {
        to: '/family',
        text: '가족',
        roles: ['관리자', '담임목사', '초원장', '목자']
    },
    {
        to: '/user',
        text: '사용자',
        roles: ['관리자']
    }
]

const renderListItem = (user, menuConfig) => {
    return menuConfig.roles.includes(user.role)
        ? 
        <>
            <ListItem component={Link} to={menuConfig.to}>
                <ListItemText>{menuConfig.text}</ListItemText>
            </ListItem>
            <Divider />
        </>
        : null;

}

const SideNav = ({user}) => {

    return user ? (
        <List>
            { menuConfigs.map(menuConfig => renderListItem(user, menuConfig)) }
        </List>
    ) : null;
};

export default SideNav;