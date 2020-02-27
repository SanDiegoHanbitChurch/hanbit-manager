import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const RelationSelect = ({value, onChange}) => {

  return (
    <Select 
      value={value}
      onChange={onChange}>
      <MenuItem value='남편'>남편</MenuItem>
      <MenuItem value='아내'>아내</MenuItem>
      <MenuItem value='아들'>아들</MenuItem>
      <MenuItem value='딸'>딸</MenuItem>
    </Select>
  )
}

export default RelationSelect;