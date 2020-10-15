import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { CardActionArea } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

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
              <CardActionArea
                component={Link} to={`/mokjang/${name}`}
              >
                <CardHeader
                    avatar={
                        <Avatar alt={name} src={avatar} className={classes.large}/>
                    }
                    title={`${name} (${chowon})`}
                    subheader={leader}
                />
              </CardActionArea>
            </Card>
        </Box>
    )
}

export default MokjangCard;
