import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const renderFamily = (family, goToFamily) => {
  const { members, id } = family;
  const familyName = members.map((member) => member.koreanName).join('/');

  return (
    <ListItem 
      button
      onClick={() => goToFamily(id)}
    >
      <ListItemText primary={familyName} />
    </ListItem>
    
  )
}

const FamilyList = ({ familyList, goToFamily }) => {

  return (

    <List>
      { familyList.map(family => renderFamily(family, goToFamily))}
    </List>
  )
}

export default FamilyList;