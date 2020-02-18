import React from 'react';
import uuid from 'uuid';
import MokjangList from '../views/admin/mokjangList';
import { action } from '@storybook/addon-actions';

export default {
  title: 'mokjang list',
  component: MokjangList,
};

const mokjangList = [
  {
    id: uuid.v4(),
    name:'Eunhye',
    leader:'Park',
    chowon:'Dynamis'
  },
  {
    id: uuid.v4(),
    name:'Eunhye',
    leader:'Park',
    chowon:'Dynamis'
  },
  {
    id: uuid.v4(),
    name:'Eunhye',
    leader:'Park',
    chowon:'Dynamis'
  }
]

const chowonList = [
  {
    name:'AAA',
    leader:'BBB'
  }
]

const addMokjang = (mokjang) => mokjangList.push(mokjang);
const editMokjang = action('editing mokjang')
const deleteMokjang = action('deleting mokjang')
 
export const defaultRendering = () => 
<MokjangList 
    chowonList={chowonList}
    addMokjang={ addMokjang }
    mokjangList={ mokjangList } 
    editMokjang={editMokjang} 
    deleteMokjang={deleteMokjang} />;

export const missingProp=() => 
<MokjangList 
    chowonList={chowonList}
    addMokjang={ addMokjang }
    editMokjang={editMokjang} 
    deleteMokjang={deleteMokjang} />;

  export const wrongPropType = () => 
  <MokjangList 
      abc="xyz"
      loading="false"
      chowonList={chowonList}
      addMokjang={ addMokjang }
      mokjangList='Test'
      editMokjang={editMokjang} 
      deleteMokjang={deleteMokjang} />;