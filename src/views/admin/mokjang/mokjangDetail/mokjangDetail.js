import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// const renderFamilyMember = ({ koreanName, englishName, sex, birthdate, phoneNumber, email, isHeadOfHousehold }) => {

// }

const getFamiyName = (familyMembers) => {
  const headOfHousehold = familyMembers.filter(member => member.isHeadOfHousehold);
  
  return headOfHousehold.length > 0 ? headOfHousehold[0].name : familyMembers[0].name;
}

const rednerMemberFamily = ({ familyMembers = [] }) => {

  const familyName = getFamiyName(familyMembers);
  return (
    <ListItem key={familyName}>
      <ListItemText primary={familyName} />
    </ListItem>
  )

}
const MokjangDetail = ({ name, leader, memberFamilies = [] }) => {
  return (
    <>
      <Typography >
        Name: {name}
      </Typography>
      <Typography >
        Leader: {leader}
      </Typography>
      <List>
        {memberFamilies.map(memberFamily => rednerMemberFamily(memberFamily))}
      </List>
    </>
  )
}

export default MokjangDetail;