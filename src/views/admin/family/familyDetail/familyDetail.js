import React from 'react';
import { Typography } from '@material-ui/core';
import MemberList from './memberList';

const FamilyDetail = ({ family, saveFamily }) => {
    const { id, address, mokjang, members } = family;

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
        </>
    )
}

export default FamilyDetail;
