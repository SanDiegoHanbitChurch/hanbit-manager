import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Card>
      <CardHeader
        avatar={
          <Avatar alt={koreanName} src='/abc' />
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
        <TextField
          onChange={(event) => setKoreanName(event.target.value)}
          value={koreanName}
          autoFocus
          margin="dense"
          id="koreanName"
          label="Korean Name"
          type="text"
          fullWidth
        />
        <TextField
          onChange={(event) => setEnglishName(event.target.value)}
          value={englishName}
          autoFocus
          margin="dense"
          id="englishName"
          label="English Name"
          type="text"
          fullWidth
        />
        <TextField
          onChange={(event) => setPhoneNumber(event.target.value)}
          value={phoneNumber}
          autoFocus
          margin="dense"
          id="phoneNumber"
          label="Phone Number"
          type="text"
          fullWidth
        />
        <TextField
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="text"
          fullWidth
        />
        {/* <TextField
          onChange={(event) => setBirthDate(event.target.value)}
          value={birthDate}
          autoFocus
          margin="dense"
          id="birthDate"
          label="Birthday"
          type="date"
          fullWidth
        /> */}
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={birthDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </CardContent>
    </Card>
    </MuiPickersUtilsProvider>
  )
}

export default EditMemberCard;