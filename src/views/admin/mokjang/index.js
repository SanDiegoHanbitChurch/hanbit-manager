import React, { useState }  from 'react';
import { Redirect } from 'react-router-dom';
import { FirestoreCollection } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
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
          return isLoading ? (<CircularProgress />) : 
            <MokjangList 
              mokjangList={data} 
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
