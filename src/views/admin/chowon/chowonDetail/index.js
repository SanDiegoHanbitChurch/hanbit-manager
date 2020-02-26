import React from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import DetailContainer from '../../../shared/detailContainer';
import ChowonDetail from './chowonDetail';
import FilteredListContainer from '../../../shared/filteredListContainer';
import MokjangList from '../../../shared/mokjangList';
import Box from '@material-ui/core/Box';

const renderProgress = () => {
  return <Box display='flex' justifyContent='center' alignItems='flex-end' ><CircularProgress /></Box>
}

const renderChowonDetail = (data) => {
  return <ChowonDetail {...data[0]} />
}

const ChowonDetailContainer = () => {
  
  const { name } = useParams();

  const chowonFilter = ['name', '==', name];
  const mokjangFilter = ['chowon', '==', name];

  return (
    <>
      <DetailContainer
        path="chowon"
        filter={chowonFilter}
        render={({isLoading, data}) => {
          return isLoading ? renderProgress() : renderChowonDetail(data)
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