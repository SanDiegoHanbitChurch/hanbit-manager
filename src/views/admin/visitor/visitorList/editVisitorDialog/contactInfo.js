import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const ContactInfo = ({address, email, phoneNumber, setAddress, setEmail, setPhoneNumber}) => {

  return (
    <>
      <Box>
        <TextField
          onChange={(event) => setAddress(event.target.value)}
          value={address}
          margin="dense"
          id="address"
          placeholder="주소"
          type="text"
          fullWidth
        />
      </Box>
      <Box>
        <TextField
          onChange={(event) => setPhoneNumber(event.target.value)}
          value={phoneNumber}
          margin="dense"
          id="phoneNumber"
          placeholder="전화번호"
          type="text"
        />
        <TextField
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          margin="dense"
          id="email"
          placeholder="이메일"
          type="text"
        />
      </Box>
    </>
  )
}

export default ContactInfo;