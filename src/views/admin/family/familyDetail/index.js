import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import FamilyDetail from './familyDetail';
import { getAll as fetchMokjangList } from '../../../../actions/mokjang';
import { getFamilyById, updateFamily, uploadPhoto } from '../../../../actions/family';

const FamilyDetailContainer = ({ user }) => {
  const { id } = useParams();
  const path = `family/${id}`;

  let mokjangLookup = [];

  const { 
    status: fetchMokjangListStatus, 
    data: mokjangListData 
  } = useQuery('mokjangList', fetchMokjangList);

  const {
    status: getFamilyByIdStatus,
    data
  } = useQuery(path, () => getFamilyById(id))

  if (fetchMokjangListStatus === 'success') {
    mokjangLookup = mokjangListData.map(({name}) => ({key: name, value: name}));
  }

  return fetchMokjangListStatus === 'loading' || getFamilyByIdStatus === 'loading'
    ? <CircularProgress />
    : <FamilyDetail 
        user={user} 
        family={data}
        mokjangLookup={mokjangLookup}
        saveFamily={updateFamily}
        uploadPhoto={uploadPhoto}
      />
}

export default FamilyDetailContainer;