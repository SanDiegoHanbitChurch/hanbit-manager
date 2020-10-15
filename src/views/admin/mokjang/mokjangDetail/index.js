import React from 'react';
import { useQuery, useMutation, useQueryCache } from 'react-query'
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import MokjangDetail from './mokjangDetail';
import FamilyList from '../../family/familyList';
import AddFab from '../../../shared/addFab';
import { getFamiliesByMokjang, addNewFamilyToMokjang } from '../../../../actions/dataAccess/family';
import { getMokjangByName } from '../../../../actions/dataAccess/mokjang';

const MokjangDetailContainer = () => {
  const { name } = useParams();

   // Cache
  const cache = useQueryCache();

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
      <AddFab onClick={onClickAddHandler} />
    </>
  )
}

export default MokjangDetailContainer;
