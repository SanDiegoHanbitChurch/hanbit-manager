import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';

const MokjangCard = ({ id, name, leader, chowon, memberFamilies = [], editMokjang }) => {
    
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => setExpanded(!expanded);
    
    return (
        <Box m={2}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar alt={leader} src='/static/avatar.jpg' />
                    }
                    action={
                        <IconButton onClick={() => editMokjang(id)}>
                        <EditIcon />
                        </IconButton>
                    }
                    title={`${name} (${chowon})`}
                    subheader={leader}
                />
                <CardActions>
                    <IconButton onClick={toggleExpand}>
                        { expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {memberFamilies.join(', ')}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Box>
    )
}

export default MokjangCard;
