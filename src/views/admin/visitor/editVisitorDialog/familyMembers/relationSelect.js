import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const RelationSelect = (props) => {

  const [relation, setRelation] = useState(props.relation);

  return (
    <Select 
      value={relation}
      onChange={(event) => {
        setRelation(event.target.value)
        props.updateRelation({relation})
      }}>
      <MenuItem value='남편'>남편</MenuItem>
      <MenuItem value='아내'>아내</MenuItem>
      <MenuItem value='아들'>아들</MenuItem>
      <MenuItem value='딸'>딸</MenuItem>
    </Select>
  )
}

export default RelationSelect;