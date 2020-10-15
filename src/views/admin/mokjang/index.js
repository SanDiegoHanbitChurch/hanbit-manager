import React, { useState }  from 'react';
import { useQuery } from 'react-query';
import { Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getAll } from '../../../actions/mokjang';
import MokjangList from '../../shared/mokjangList'

const addMokjang = () => {};
const deleteMokjang = () => {};

const MokjangListContainer = () => {

  const [redirectTo, setRedirectTo] = useState(null);
  const { isLoading, data: mokjangList } = useQuery('mokjangList', getAll);

  const editMokjang = (name) => {
    setRedirectTo(`/mokjang/${name}`);
  };

  if (redirectTo) {
    return (
      <Redirect to={redirectTo} />
    )
  }

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <MokjangList
      mokjangList={mokjangList}
      addMokjang={addMokjang}
      editMokjang={editMokjang}
      deleteMokjang={deleteMokjang}
    />
  )
}

export default MokjangListContainer;
