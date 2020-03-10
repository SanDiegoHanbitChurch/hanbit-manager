import React from 'react';
import { useQuery } from 'react-query';
import { CircularProgress } from '@material-ui/core';
import SearchContainer from '../../shared/searchContainer';
import { getAll as fetchVisitorList, searchVisitor } from '../../../actions/visitor';
import FamilyList from '../../shared/familyList';

const rearrangeVisitorList = (data) => {
    return data.map(({
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

const VisitorListContainer = () => {
    const { status, data } = useQuery('visitorList', fetchVisitorList);
    const handleOnClickAdd = () => {
        console.log('handling onClick add')
    }

    return (
        <SearchContainer search={searchVisitor}>
            {(searchResult) => {
                console.log('searchResult', searchResult);
                if (searchResult && searchResult.length > 0) {
                    return <FamilyList familyList={rearrangeVisitorList(searchResult)} visitor handleOnClickAdd={handleOnClickAdd} />
                }

                return status === 'loading'
                    ? <CircularProgress />
                    : <FamilyList familyList={rearrangeVisitorList(data)} visitor handleOnClickAdd={handleOnClickAdd} />
            }}
        </SearchContainer>
    )
}

export default VisitorListContainer;
