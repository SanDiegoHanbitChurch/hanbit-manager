import React, { useState }  from 'react';
import { Redirect } from 'react-router-dom';
import { FirestoreCollection } from 'react-firestore';
import CircularProgress from '@material-ui/core/CircularProgress';
import MokjangList from '../../shared/mokjangList'

const addMokjang = () => {};
const deleteMokjang = () => {};

const MokjangListContainer = ({user}) => {

let filter;
  if (user.role === '담임목사' || user.role === '관리자') {
    filter = [];
  } else if (user.role === '초원장') {
    filter = ['chowon', '==', user.chowon];
  } else if (user.role === '목자') {
    filter = ['name', '==', user.mokjang];
  } 
  console.log('Filter contents', filter);

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
      filter={filter}
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
