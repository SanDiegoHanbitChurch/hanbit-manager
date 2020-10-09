import React from 'react';
import { useQuery, useMutation, useQueryCache, QueryCache, ReactQueryCacheProvider } from 'react-query'
import { useParams } from 'react-router-dom';
import { CircularProgress, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MokjangDetail from './mokjangDetail';
import FamilyList from '../../family/familyList';
import { getFamiliesByMokjang, addNewFamilyToMokjang } from '../../../../actions/dataAccess/family';
import { getMokjangByName } from '../../../../actions/dataAccess/mokjang';

const fabStyle = {
  margin: 0,
  top: 'auto',
  right: 50,
  bottom: 50,
  left: 'auto',
  position: 'fixed',
};

const MokjangDetailContainer = () => {
  const { name } = useParams();

   // Cache
  const cache = useQueryCache()

  const {
    status: fetchFamiliesStatus,
    data: familiesData
  } = useQuery('mokjangFamilies', () => getFamiliesByMokjang(name));

  const {
    status: fetchMokjangStatus,
    data: mokjangData
  } = useQuery('mokjang', () => getMokjangByName(name));

  const [addFamily] = useMutation(addNewFamilyToMokjang, {
    onSuccess: () => {
       // Query Invalidations
       cache.invalidateQueries('mokjangFamilies')
    }
  });

  const onClickAddHandler = () => {
    addFamily(name);
  }

  if (fetchFamiliesStatus === 'loading' || fetchMokjangStatus === 'loading') {
    return <CircularProgress />
  }

  const registeredFamilyList = familiesData.filter((family) => {
    const { inactive = false, membershipStatus = 'registered' } = family;
    return !inactive && membershipStatus === 'registered';
  });

  return (
    <>
      <MokjangDetail {...mokjangData}/>
      <FamilyList familyList={registeredFamilyList}/>
      <Fab style={fabStyle} color='primary'>
        <AddIcon onClick={onClickAddHandler} />
      </Fab>
    </>
  )
}

export default MokjangDetailContainer;
