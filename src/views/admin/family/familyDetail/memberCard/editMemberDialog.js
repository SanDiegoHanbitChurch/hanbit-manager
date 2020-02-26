import React, { useState } from 'react';
import { Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    TextField, 
    Button } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

const EditMemberDialog = ({member, open, handleSave, handleCancel}) => {

    const [koreanName, setKoreanName] = useState(member.koreanName);
    const [englishName, setEnglishName] = useState(member.englishName);
    const [phoneNumber, setPhoneNumber] = useState(member.phoneNumber);
    const [email, setEmail] = useState(member.email);
    const [birthDate, setBirthDate] = useState(member.birthDate);
    const disableSave = koreanName === '' && englishName === ''
    const handleDateChange = date => {
      setBirthDate(date);
    };

    const handleOnClickSave = () => {
        handleSave({
            koreanName,
            englishName,
            phoneNumber,
            email,
            birthDate
        })
    };
    
    return (
        <Dialog open={open}>
            <DialogTitle>가족신상</DialogTitle>
            <DialogContent>
                <TextField
                    onChange={(event) => setKoreanName(event.target.value)}
                    value={koreanName}
                    autoFocus
                    margin="dense"
                    id="koreanName"
                    placeholder="한국이름"
                    type="text"
                />
                <TextField
                    onChange={(event) => setEnglishName(event.target.value)}
                    value={englishName}
                    autoFocus
                    margin="dense"
                    id="englishName"
                    placeholder="영어이름"
                    type="text"
                />
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
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="dense"
                    placeholder="생일"
                    value={birthDate}
                    onChange={handleDateChange}
                />
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

export default EditMemberDialog;
