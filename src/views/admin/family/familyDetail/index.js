import React from 'react';
import { get } from 'lodash';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import FamilyDetail from './familyDetail';
import { getAll as fetchMokjangList } from '../../../../actions/mokjang';
import { getFamilyById, updateFamily } from '../../../../actions/family';
import { membershipTypes } from '../../../../constants';

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

  if (fetchMokjangListStatus === 'loading' || getFamilyByIdStatus === 'loading') {
    return <CircularProgress />
  }

  // consider member registered if no indicator
  const membershipStatus =  data.inactive ? 'unregistered' : get(data, 'membershipStatus', 'registered');
  const family = {
    ...data,
    membershipStatus
  };

  return fetchMokjangListStatus === 'loading' || getFamilyByIdStatus === 'loading'
    ? <CircularProgress />
    : <FamilyDetail
        user={user}
        family={family}
        mokjangLookup={mokjangLookup}
        saveFamily={updateFamily}
        membershipTypes={membershipTypes}
      />
}

export default FamilyDetailContainer;
