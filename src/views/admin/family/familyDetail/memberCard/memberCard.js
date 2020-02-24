import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const MemberCard = ({member, editMember}) => {
  const { koreanName, englishName, email, birthDate, phoneNumber } = member;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar alt={koreanName} src='/abc' />
        }
        action={
          <IconButton onClick={editMember} >
            <EditIcon />
          </IconButton>
        }
        title={koreanName}
        subheader={englishName}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {email}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {phoneNumber}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {birthDate.toString()}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MemberCard;