import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import DetailContainer from '../../../shared/detailContainer';
import ChowonDetail from './chowonDetail';
import FilteredListContainer from '../../../shared/filteredListContainer';
import MokjangList from '../../../shared/mokjangList';

const ChowonDetailContainer = ({ match }) => {
  
  const chowonFilter = ['name', '==', match.params.name];
  const mokjangFilter = ['chowon', '==', match.params.name];

  return (
    <>
      <DetailContainer
        path="chowon"
        filter={chowonFilter}
        render={({isLoading, data}) => {
          return isLoading ? <CircularProgress /> : <ChowonDetail {...data[0]} />
        }}
      />
      <FilteredListContainer
        path="mokjang" 
        filter={mokjangFilter}
        render={({isLoading, data}) => {
          return isLoading ? <CircularProgress /> : <MokjangList mokjangList={data} />
        }}
      />
    </>
  )
}

export default ChowonDetailContainer;