import React, { useState } from 'react';
import { get } from 'lodash';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import VisitorName from './visitorName';
import FamilyMembers from './familyMembers';
import ContactInfo from './contactInfo';

const EditVisitorDialog = ({open, handleSave, handleCancel, visitor = {}}) => {

  const [koreanName, setKoreanName] = useState(get(visitor, 'members.0.koreanName', ''));  
  const [englishName, setEnglishName] = useState(get(visitor, 'members.0.englishName', ''));
  const [email, setEmail] = useState(get(visitor, 'members.0.email', ''));
  const [phoneNumber, setPhoneNumber] = useState(get(visitor, 'members.0.phoneNumber', ''));
  const [members, setMembers] = useState(get(visitor, 'members', []));

  return (
    <Dialog open={open} >
      <DialogTitle>
        방문자 정보
      </DialogTitle>
      <DialogContent>
        <VisitorName 
          englishName={englishName} 
          koreanName={koreanName} 
          setKoreanName={setKoreanName} 
          setEnglishName={setEnglishName}
        />
        <ContactInfo 
          email={email} 
          phoneNumber={phoneNumber} 
          setEmail={setEmail} 
          setPhoneNumber={setPhoneNumber} 
        />
        <FamilyMembers 
          members={members} 
          setMembers={setMembers} />
      </DialogContent>
    </Dialog>
  )
}

export default EditVisitorDialog;