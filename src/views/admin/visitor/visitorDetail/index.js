import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { CircularProgress } from '@material-ui/core';
import { getVisitorById, saveVisitor  } from '../../../../actions/visitor';
import VisitorDetail from './visitorDetail';

const VisitorDetailContainer = ({ user }) => {
    const { id } = useParams();
    const path = `visitor/${id}`;

    const { status, data } = useQuery(path, () => getVisitorById(id));

    return status === 'loading' ? <CircularProgress /> : <VisitorDetail user={user} visitor={data} saveVisitor={saveVisitor} />
}

export default VisitorDetailContainer;
