import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const renderMokjagMenuItem = (mokjang) => {
  return (
    <MenuItem value={mokjang}>{mokjang}</MenuItem>
  )
}

const MokjangSelect = ({mokjangList, handleMokjangChange, mokjang: defaultMokjang}) => {
  const [mokjangName, setMokjangName] = useState(defaultMokjang);
  const handleOnChange = (event) => {
    handleMokjangChange(event.target.value);
    setMokjangName(event.target.value);
  }

  return (
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={mokjangName}
    onChange={handleOnChange}
  >
    {mokjangList.map(mokjang => renderMokjagMenuItem(mokjang))}
  </Select>
  )
}

export default MokjangSelect;