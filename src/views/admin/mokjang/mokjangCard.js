import React from 'react';
import ListItem from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const MokjangCard = ({ id, name, leader, chowon, memberFamilies, editMokjang }) => {
    return (
        <ListItem button onClick={() => editMokjang(id)} key={id}>
            <ListItemAvatar>
                <Avatar alt={leader} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary={`${name} (${chowon})`}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            {leader}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}

export default MokjangCard;
