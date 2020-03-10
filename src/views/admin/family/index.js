import React from 'react';
import { useQuery } from 'react-query';
import { CircularProgress } from '@material-ui/core';
import SearchContainer from '../../shared/searchContainer';
import { getAll as fetchFamilyList, searchFamily } from '../../../actions/family';
import FamilyList from '../../shared/familyList';

const FamilyListContainer = () => {
  const { status, data } = useQuery('familyList', fetchFamilyList);
  const handleOnClickAdd = () => {
    console.log('handling onClick add')
  }

  return (
    <SearchContainer search={searchFamily}>
      {(searchResult) => {
        if (searchResult && searchResult.length > 0) {
          return <FamilyList familyList={searchResult} handleOnClickAdd={handleOnClickAdd}/>
        }

        return status === 'loading'
          ? <CircularProgress />
          : <FamilyList familyList={data} handleOnClickAdd={handleOnClickAdd} />
  
      }}
    </SearchContainer>
  )
}

export default FamilyListContainer;
