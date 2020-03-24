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
     root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
  }));

const MokjangCard = ({ id, name, leader, chowon, avatar, memberFamilies = [], editMokjang }) => {

    const classes = useStyles();
    
    return (
        <Box m={1}>
            <Card classes={{ root: classes.card }}>
                <CardHeader
                    avatar={
                        <Avatar alt={name} src={avatar || 'https://i.pravatar.cc/300'} className={classes.large}/>
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
