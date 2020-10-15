import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import NatureIcon from "@material-ui/icons/Nature";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import PersonIcon from "@material-ui/icons/Person";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import EmailIcon from '@material-ui/icons/Email';
import SuggestionDialog from "./views/shared/suggestionDialog";
import Tooltip from '@material-ui/core/Tooltip';

const menuConfigs = [
  {
    to: "/chowon",
    text: "초원",
    roles: ["관리자", "담임목사", "초원장", "목자", '부교역자'],
    icon: NatureIcon
  },
  {
    to: "/mokjang",
    text: "목장",
    roles: ["관리자", "담임목사", "초원장", "목자", '부교역자'],
    icon: NaturePeopleIcon
  },
  {
    to: "/family",
    text: "가족",
    roles: ["관리자", "담임목사", "초원장", "목자", '부교역자'],
    icon: PeopleAltIcon
  },
  {
    to: "/user",
    text: "사용자",
    roles: ["관리자"],
    icon: PersonIcon
  },
  {
    to: "/visitor",
    text: "방문자",
    roles: ["관리자"],
    icon: FlightLandIcon
  },
  {
    to: "/message",
    text: "메시지",
    roles: ["관리자", '담임목사', '부교역자'],
    icon: EmailIcon
  }
];

const renderMenuItem = (index, user, { to, text, roles, icon: Icon }) => {
  return roles.includes(user.role) ? (
    <>
      <ListItem key={index} button component={Link} to={to}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItem>
      <Divider />
    </>
  ) : null;
};

/* Tooltip */
const renderMenuItemTooltip = (index, user, { to, text, roles, icon: Icon }) => {
  return roles.includes(user.role) ? (
    <>
      <Tooltip title={text}>
      <ListItem key={index} button component={Link} to={to}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItem>
      </Tooltip>
      <Divider />
    </>
  ) : null;
};

const MenuList = ({ user, logout, addSuggestion }) => {
  const [open, setOpen] = useState(false);
  const handleCancel = () => setOpen(false);
  const handleSubmit = suggestion => {
    setOpen(false);
    addSuggestion(suggestion);
  };

  if (user) {
    return (
      <>
        { !open ?
        <List>
          {menuConfigs.map((menuConfig, index) => renderMenuItemTooltip(index, user, menuConfig))}
          <Tooltip title="건의사항">
            <ListItem button onClick={() => setOpen(true)}>
              <ListItemIcon>
                <RecordVoiceOverIcon />
              </ListItemIcon>
              <ListItemText>건의사항</ListItemText>
            </ListItem>
          </Tooltip>

          <Tooltip title="Logout">
          <ListItem button onClick={logout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItem>
          </Tooltip>
          </List>
          :
          <List>
            {menuConfigs.map((menuConfig, index) => renderMenuItem(index, user, menuConfig))}
            <ListItem button onClick={() => setOpen(true)}>
              <ListItemIcon>
                <RecordVoiceOverIcon />
              </ListItemIcon>
              <ListItemText>건의사항</ListItemText>
            </ListItem>

            <ListItem button onClick={logout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItem>
          </List>
        }
        {open && (
          <SuggestionDialog
            open={open}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
          />
        )}
      </>
    );
  }

  return null;
};

export default MenuList;
