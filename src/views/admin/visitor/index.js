import React from 'react';
import { useQuery } from 'react-query';
import { CircularProgress } from '@material-ui/core';
import { getAll as fetchVisitorList } from '../../../actions/visitor';
import VisitorList from './visitorList';

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
        : <VisitorList visitorList={visitorList} />
}

export default VisitorListContainer;
