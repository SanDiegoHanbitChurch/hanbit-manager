import React, { useState } from 'react';
import { get } from 'lodash';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions'
import VisitorName from './visitorName';
import FamilyMembers from './familyMembers';
import ContactInfo from './contactInfo';

const EditVisitorDialog = ({open, handleSave, handleCancel, visitor = {}}) => {

  const [koreanName, setKoreanName] = useState(get(visitor, 'members.0.koreanName', ''));  
  const [englishName, setEnglishName] = useState(get(visitor, 'members.0.englishName', ''));
  const [address, setAddress] = useState(get(visitor, 'address', ''));
  const [email, setEmail] = useState(get(visitor, 'members.0.email', ''));
  const [phoneNumber, setPhoneNumber] = useState(get(visitor, 'members.0.phoneNumber', ''));
  const [members, setMembers] = useState(get(visitor, 'members', []));

  const disableSave = koreanName === '' && englishName === ''

  const handleOnClickSave = () => {
    handleSave({
      koreanName,
      englishName,
      email,
      phoneNumber,
      members
    });
};

  return (
    <Dialog open={open} >
      <DialogTitle>
        방문자 정보
      </DialogTitle>
      <DialogContent>
        <Box display='flex' flexDirection='column'>
          <Box m={2}>
            <VisitorName 
              englishName={englishName} 
              koreanName={koreanName} 
              setKoreanName={setKoreanName} 
              setEnglishName={setEnglishName}
            />
            <ContactInfo 
              address={address}
              email={email} 
              phoneNumber={phoneNumber} 
              setAddress={setAddress}
              setEmail={setEmail} 
              setPhoneNumber={setPhoneNumber} 
            />
          </Box>
          <FamilyMembers 
            members={members} 
            setMembers={setMembers} />
        </Box>
      </DialogContent>
      <DialogActions>
          <Button onClick={handleCancel} color="primary">
              Cancel
          </Button>
          <Button disabled={disableSave} onClick={handleOnClickSave} color="primary">
              Save
          </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditVisitorDialog;