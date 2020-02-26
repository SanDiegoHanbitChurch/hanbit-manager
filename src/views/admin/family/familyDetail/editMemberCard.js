import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import Box from '@material-ui/core/Box';
import { KeyboardDatePicker } from '@material-ui/pickers';

const EditMemberCard = ({member, saveMemberInfo, cancel}) => {
  const [koreanName, setKoreanName] = useState(member.koreanName);
  const [englishName, setEnglishName] = useState(member.englishName);
  const [phoneNumber, setPhoneNumber] = useState(member.phoneNumber);
  const [email, setEmail] = useState(member.email);
  const [birthDate, setBirthDate] = useState(member.birthDate);
  const disableSave = koreanName === '' && englishName === ''
  const handleDateChange = date => {
    setBirthDate(date);
  };

  const handleSave = () => {
    saveMemberInfo({
      koreanName,
      englishName,
      phoneNumber,
      email,
      birthDate
    })
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar alt={koreanName} src='https://i.pravatar.cc/300' />
        }
        action={
          <>
            <IconButton disabled={disableSave} onClick={handleSave}>
              <DoneIcon />
            </IconButton>
            <IconButton onClick={cancel}>
              <ClearIcon />
            </IconButton>
          </>
        }
        title={koreanName}
        subheader={englishName}
      />
      <CardContent>
        <Box display='flex'>
          <Box m={1}>
            <TextField
              onChange={(event) => setKoreanName(event.target.value)}
              value={koreanName}
              autoFocus
              margin="dense"
              id="koreanName"
              placeholder="한국이름"
              type="text"
            />
          </Box>
          <Box m={1}>
            <TextField
              onChange={(event) => setEnglishName(event.target.value)}
              value={englishName}
              autoFocus
              margin="dense"
              id="englishName"
              placeholder="영어이름"
              type="text"
            />
          </Box>
        </Box>
        <Box display='flex'>
          <Box m={1}>
            <TextField
              onChange={(event) => setPhoneNumber(event.target.value)}
              value={phoneNumber}
              autoFocus
              margin="dense"
              id="phoneNumber"
              placeholder="전화번호"
              type="text"
            />
          </Box>
          <Box m={1}>
            <TextField
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              autoFocus
              margin="dense"
              id="email"
              placeholder="이메일"
              type="text"
            />
          </Box>
        </Box>
        <Box m={1}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="dense"
            placeholder="생일"
            value={birthDate}
            onChange={handleDateChange}
            fullWidth
          />
        </Box>
      </CardContent>
    </Card>
  )
}

export default EditMemberCard;