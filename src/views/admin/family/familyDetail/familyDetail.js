import React from 'react';
import { Typography } from '@material-ui/core';
import MemberList from './memberList';

const FamilyDetail = ({ family }) => {
    const { address, mokjang, members } = family;

    return (
        <>
            <Typography color='primary'>{mokjang}</Typography>
            <Typography color='primary'>{address}</Typography>
            <MemberList memberList={members} />
        </>
    )
}

export default FamilyDetail;
