import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const renderChowonMenuItem = ({name}) => {
  return (
    <MenuItem value={name}>{name}</MenuItem>
  )
}

const ChowonSelect = ({chowonList, onChange, value}) => {
  const [chowonName, setchowonName] = useState(value);
  const handleOnChange = (event) => {
    onChange(event);
    setchowonName(event.target.value);
  }

  return (
    <Select
      value={chowonName}
      onChange={handleOnChange}
    >
      {chowonList.map(mokjang => renderChowonMenuItem(mokjang))}
  </Select>
  )
}

export default ChowonSelect;