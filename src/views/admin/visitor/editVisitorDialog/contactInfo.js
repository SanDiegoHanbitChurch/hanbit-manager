import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const ContactInfo = (props) => {
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
  const [email, setEmail] = useState(props.email);

  return (
    <>
      <TextField
        onChange={(event) => {
          setPhoneNumber(event.target.value)
          props.updateContact({email, phoneNumber})
        }}
        value={phoneNumber}
        autoFocus
        margin="dense"
        id="phoneNumber"
        placeholder="전화번호"
        type="text"
      />
      <TextField
        onChange={(event) => {
          setEmail(event.target.value)
          props.updateContact({email, phoneNumber})
        }}
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