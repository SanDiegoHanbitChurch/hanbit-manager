import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: 0,
    backgroundColor: '#eceff1',
    color: '#212121',
    boxShadow: "3"
   },
}));

const ChowonCard = ({ id, name, leader, editChowon }) => {

  const classes = useStyles();
    
    return (
      <Box>
        <Card classes={{ root: classes.card }}>
            <CardHeader
                avatar={
                    <Avatar alt={name} src='https://i.pravatar.cc/300' />
                }
                action={
                    <IconButton onClick={() => editChowon(name)}>
                      <ArrowForwardIosIcon />
                    </IconButton>
                }
                title={`${name}`}
                subheader={leader}
            />
        </Card>
      </Box>
    )
}

export default ChowonCard;