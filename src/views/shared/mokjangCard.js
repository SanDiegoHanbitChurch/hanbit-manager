import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
    card: {
      borderRadius: 0,
      backgroundColor: '#eceff1',
      color: '#212121',
      boxShadow: "3"
     },
  }));

const MokjangCard = ({ id, name, leader, chowon, memberFamilies = [], editMokjang }) => {

    const classes = useStyles();
    
    return (
        <Box m={1}>
            <Card classes={{ root: classes.card }}>
                <CardHeader
                    avatar={
                        <Avatar alt={name} src='https://i.pravatar.cc/300' />
                    }
                    action={
                        <IconButton component={Link} to={`/mokjang/${name}`}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    }
                    title={`${name} (${chowon})`}
                    subheader={leader}
                />
            </Card>
        </Box>
    )
}

export default MokjangCard;
