import React from 'react';
import { Typography } from '@material-ui/core';
import { concat } from 'lodash';
import MemberList from '../../../shared/family/memberList';
import Notes from '../../../shared/notes';
import NewNote from '../../../shared/newNote';

const FamilyDetail = ({ family, saveFamily, addNote }) => {
    const { id, address, mokjang, members, notes = [] } = family;

    const addMember = (newData) => {
        return saveFamily({
            id,
            address,
            mokjang,
            members: concat(members, [newData]),
            notes
        });
    };

    const updateMember = (newData, oldData) => {
        const index = family.members.indexOf(oldData);
        return saveFamily({
            id,
            address,
            mokjang,
            members: members.map((member, i) => index === i ? newData : member),
            notes
        })
    }
    const deleteMember = (oldData) => {
        const index = family.members.indexOf(oldData);
        return saveFamily({
            id,
            address,
            mokjang,
            members: members.filter((member, i) => index !== i),
            notes
        })
    };

    return (
        <>
            <Typography color='primary'>{mokjang}</Typography>
            <Typography color='primary'>{address}</Typography>
            <MemberList
                memberList={members}
                addMember={addMember}
                updateMember={updateMember}
                deleteMember={deleteMember}
            />
            <Notes notes={notes} />
            <NewNote addNote={(comment) => addNote(family, comment)} />
        </>
    )
}

export default FamilyDetail;
