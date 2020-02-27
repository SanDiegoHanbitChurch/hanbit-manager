import React from 'react';
import TextField from '@material-ui/core/TextField';

const ContactInfo = ({email, phoneNumber, setEmail, setPhoneNumber}) => {

  return (
    <>
      <TextField
        onChange={(event) => setPhoneNumber(event.target.value)}
        value={phoneNumber}
        autoFocus
        margin="dense"
        id="phoneNumber"
        placeholder="전화번호"
        type="text"
      />
      <TextField
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        autoFocus
        margin="dense"
        id="email"
        placeholder="이메일"
        type="text"
      />
    </>
  )
}

export default ContactInfo;