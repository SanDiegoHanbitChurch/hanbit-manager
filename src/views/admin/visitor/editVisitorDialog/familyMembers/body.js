import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody'
import TextField from '@material-ui/core/TextField';
import RelationSelect from './relationSelect';

const renderTableRow = (member, index, updateMember) => {
  const {koreanName, relation} = member;
  const setKoreanName = (name) => {
    updateMember(index, {
      koreanName: name,
      relation
    })
  }
  const updateRelation = (event) => {
    updateMember(index, {
      koreanName,
      relation: event.target.value
    })
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
        <RelationSelect value={relation} onChange={updateRelation} />
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

    setMembers(updatedMembers);
    props.setMembers(updatedMembers);
  }
  
  return (
    <TableBody>
      {members.map((member, index) => renderTableRow(member, index, updateMember))}
    </TableBody>
  )
}

export default Body;
