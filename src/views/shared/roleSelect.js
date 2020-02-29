import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const renderRoleMenuItem = (role) => {
  return (
    <MenuItem value={role}>{role}</MenuItem>
  )
}

const RoleSelect = ({roleList, onChange, value}) => {
  const [roleName, setRoleName] = useState(value);
  const handleOnChange = (event) => {
    onChange(event);
    setRoleName(event.target.value);
  }

  return (
    <Select
      value={roleName}
      onChange={handleOnChange}
    >
      {roleList.map(role => renderRoleMenuItem(role))}
  </Select>
  )
}

export default RoleSelect;