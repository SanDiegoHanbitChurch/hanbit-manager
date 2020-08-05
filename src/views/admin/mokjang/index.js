import React, { useState }  from 'react';
import { Redirect } from 'react-router-dom';
import { FirestoreCollection } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import { orderBy } from 'lodash';
import MokjangList from '../../shared/mokjangList'

const addMokjang = () => {};
const deleteMokjang = () => {};

const MokjangListContainer = () => {

  const [redirectTo, setRedirectTo] = useState(null);
  const editMokjang = (name) => {
    setRedirectTo(`/mokjang/${name}`);
  };

  if (redirectTo) {
    return (
      <Redirect to={redirectTo} />
    )
  }

  return (
    <FirestoreCollection
      path='mokjang'
      render={
        ({isLoading, data}) => {

          const mokjangList = orderBy(data, ['name']);

          return isLoading ? (<CircularProgress />) :
            <MokjangList
              mokjangList={mokjangList}
              addMokjang={addMokjang}
              editMokjang={editMokjang}
              deleteMokjang={deleteMokjang}
            />
        }
      }
    />
  )
}

export default MokjangListContainer;
