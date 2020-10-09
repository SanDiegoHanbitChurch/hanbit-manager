import React from 'react';
import { useQuery } from 'react-query';
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

  const {
    status: fetchFamiliesStatus,
    data: familiesData
  } = useQuery('mokjangFamilies', () => getFamiliesByMokjang(name));

  const {
    status: fetchMokjangStatus,
    data: mokjangData
  } = useQuery('mokjang', () => getMokjangByName(name));

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
        <AddIcon onClick={() => addNewFamilyToMokjang(name)} />
      </Fab>
    </>
  )
}

export default MokjangDetailContainer;
