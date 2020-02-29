import React from 'react';
import { Typography } from '@material-ui/core';
import MemberList from './memberList';
import Notes from '../../../shared/notes';
import NewNote from '../../../shared/newNote';

const FamilyDetail = ({ family, saveFamily, addNote }) => {
    const { id, address, mokjang, members, notes = [] } = family;

    console.log('notes', notes);

    const saveFamilyMembers = (updatedMembers) => {
        saveFamily({
            id,
            address,
            mokjang,
            members: updatedMembers
        })
    };

    return (
        <>
            <Typography color='primary'>{mokjang}</Typography>
            <Typography color='primary'>{address}</Typography>
            <MemberList members={members} saveFamilyMembers={saveFamilyMembers}/>
            <Notes notes={notes} />
            <NewNote addNote={(comment) => addNote(family, comment)} />
        </>
    )
}

export default FamilyDetail;
