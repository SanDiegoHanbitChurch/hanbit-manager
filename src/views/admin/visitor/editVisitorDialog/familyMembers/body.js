import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import RelationSelect from './relationSelect';

const renderTableRow = (member, index, updateMember) => {
  const {koreanName, relation} = member;
  const setKoreanName = (name) => {
    updateMember(index, {
      name, relation
    })
  }
  const updateRelation = ({relation}) => {
    console.log(relation);
  }

  return (
    <TableRow>
      <TableCell>
        <TextField
          onChange={(event) => setKoreanName(event.target.value)}
          value={koreanName}
          autoFocus
          margin="dense"
          id="koreanName"
          placeholder="한국이름"
          type="text"
        />
      </TableCell>
      <TableCell>
        <RelationSelect relation={relation} updateRelation={updateRelation} />
      </TableCell>
    </TableRow>
  )
}

const Body = (props) => {

  const [members, setMembers] = useState(props.members)
  const updateMember = (index, updatedMember) => {

    const updatedMembers = members.map((existingMember, i) => {
      if (i === index) return updatedMember;
      return existingMember
    })

    setMembers(updatedMembers)
  }

  console.log('members', members);
  
  return (
    <TableBody>
      {members.map((member, index) => renderTableRow(member, index, updateMember))}
    </TableBody>
  )
}

export default Body;
