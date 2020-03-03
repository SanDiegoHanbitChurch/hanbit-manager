import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@material-ui/core';
// import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Link } from 'react-router-dom';
import NatureIcon from '@material-ui/icons/Nature';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import PersonIcon from '@material-ui/icons/Person';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import FlightLandIcon from '@material-ui/icons/FlightLand';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import SuggestionDialog from './views/shared/suggestionDialog';

const menuConfigs = [
    {
        to: '/chowon',
        text: '초원',
        roles: ['관리자', '담임목사', '초원장', '목자'],
        icon: NatureIcon
    },
    {
        to: '/mokjang',
        text: '목장',
        roles: ['관리자', '담임목사', '초원장', '목자'],
        icon: NaturePeopleIcon
    },
    {
        to: '/family',
        text: '가족',
        roles: ['관리자', '담임목사', '초원장', '목자'],
        icon: PeopleAltIcon
    },
    {
        to: '/user',
        text: '사용자',
        roles: ['관리자'],
        icon: PersonIcon
    }
    // {
    //     to: '/visitor',
    //     text: '방문자',
    //     roles: ['관리자'],
    //     icon: FlightLandIcon
    // }
]

const renderMenuItem = (user, { to, text, roles, icon: Icon }) => {

    return roles.includes(user.role)
        ?
            <>
                <ListItem key={user.text} button component={Link} to={to}>
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

const MenuList = ({ user, logout, addSuggestion }) => {
    const [open, setOpen] = useState(false);
    const handleCancel = () => setOpen(false);
    const handleSubmit = (suggestion) => {
        setOpen(false);
        addSuggestion(suggestion)
    };

    if (user) {
        return (
            <>
                <List>
                    { menuConfigs.map(menuConfig => renderMenuItem(user, menuConfig)) }
                    <ListItem button onClick={() => setOpen(true)}>
                        <ListItemIcon>
                            <RecordVoiceOverIcon />
                        </ListItemIcon>
                        <ListItemText>
                            건의사항
                        </ListItemText>
                    </ListItem>
                    <ListItem button onClick={logout}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Logout
                        </ListItemText>
                    </ListItem>
                </List>
                { open &&                 
                    <SuggestionDialog
                        open={open}
                        handleSubmit={handleSubmit}
                        handleCancel={handleCancel}
                    />
                }
            </>

        )
    }

    return null;
}

export default MenuList;
