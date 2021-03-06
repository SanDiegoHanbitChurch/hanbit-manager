import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const renderMokjagMenuItem = ({name}) => {
  return (
    <MenuItem value={name}>{name}</MenuItem>
  )
}

const MokjangSelect = ({mokjangList, onChange, value}) => {
  const [mokjangName, setMokjangName] = useState(value);
  const handleOnChange = (event) => {
    onChange(event);
    setMokjangName(event.target.value);
  }

  return (
    <Select
      value={mokjangName}
      onChange={handleOnChange}
    >
      {mokjangList.map(mokjang => renderMokjagMenuItem(mokjang))}
  </Select>
  )
}

export default MokjangSelect;