import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const renderMokjang = (mokjang) => {
  const { id, name, leader } = mokjang;

  return (
    <ListItem key={id}>
      <ListItemText primary={name} secondary={leader} />
    </ListItem>
  )

}
const ChowonDetail = ({ name, leader, mokjangList}) => {
  return (
    <>
      <Typography >
        Name: {name}
      </Typography>
      <Typography >
        Leader: {leader}
      </Typography>
      <List>
        {mokjangList.map(mokjang => renderMokjang(mokjang))}
      </List>
    </>
  )
}

export default ChowonDetail;