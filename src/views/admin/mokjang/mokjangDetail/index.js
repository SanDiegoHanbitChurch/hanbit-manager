import React from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import DetailContainer from '../../../shared/detailContainer';
import MokjangDetail from './mokjangDetail';
import FamilyList from '../../family/familyList';
import FilteredListContainer from '../../../shared/filteredListContainer';

const MokjangDetailContainer = () => {
  const { name } = useParams();
  const mokjangFilter = ['name', '==', name];
  const familyFilter = ['mokjang', '==', name];

  return (
    <>
      <DetailContainer
        path="mokjang"
        filter={mokjangFilter}
        render={({isLoading, data}) => {
          return isLoading ? <CircularProgress /> : <MokjangDetail {...data[0]} />
        }}
      />
      <FilteredListContainer
        path="family"
        filter={familyFilter}
        render={({isLoading, data}) => {
          // filter out inactive family
          const familyList = data.filter((family) => {
            const { inactive = false, membershipStatus = 'registered' } = family;
            return !inactive && membershipStatus === 'registered';
          })
          return isLoading ? <CircularProgress /> : <FamilyList familyList={familyList} />
        }}
      />
    </>
  )
}

export default MokjangDetailContainer;
