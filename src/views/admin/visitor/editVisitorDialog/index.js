import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import VisitorName from './visitorName';
import FamilyMembers from './familyMembers';
import ContactInfo from './contactInfo';

const EditVisitorDialog = ({open, handleSave, handleCancel, visitor}) => {
  const {englishName, koreanName, email, phoneNumber} = visitor.members[0];
  const updateNames = (names) => {
    console.log(names);
  }
  const updateContact = (contacts) => {
    console.log(contacts)
  }
  return (
    <Dialog open={open} >
      <DialogTitle>
        방문자 정보
      </DialogTitle>
      <DialogContent>
        <VisitorName englishName={englishName} koreanName={koreanName} updateNames={updateNames}/>
        <ContactInfo email={email} phoneNumber={phoneNumber} updateContact={updateContact} />
        <FamilyMembers members={visitor.members} />
      </DialogContent>
    </Dialog>
  )
}

export default EditVisitorDialog;