import React from 'react';
import { useQuery } from 'react-query';
import { CircularProgress } from '@material-ui/core';
import { getAll as fetchVisitorList } from '../../../actions/visitor';
import FamilyList from '../../shared/familyList';

const VisitorListContainer = () => {
    let visitorList = [];
    const { status, data } = useQuery('visitorList', fetchVisitorList);

    if (status === 'success') {
        visitorList = data.map(({
            members,
            ...rest
        }) => ({
            ...rest,
            name: members[0].koreanName,
            email: members[0].email,
            phoneNumber: members[0].phoneNumber,
            members
        }))
    }

    return status === 'loading'
        ? <CircularProgress />
        : <FamilyList familyList={visitorList} visitor />
}

export default VisitorListContainer;
