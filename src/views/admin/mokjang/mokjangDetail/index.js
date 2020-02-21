import React from 'react';
import { CircularProgress } from '@material-ui/core';
import DetailContainer from '../../../shared/detailContainer';
import MokjangDetail from './mokjangDetail';
import FamilyList from '../../family/familyList';
import FilteredListContainer from '../../../shared/filteredListContainer';

const MokjangDetailContainer = ({ match }) => {
  const mokjangName = match.params.name;
  const mokjangFilter = ['name', '==', mokjangName];
  const familyFilter = ['mokjang', '==', mokjangName];

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
          return isLoading ? <CircularProgress /> : <FamilyList familyList={data} />
        }}
      />
    </>
  )
}

export default MokjangDetailContainer;