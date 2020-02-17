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

const editMokjang = action('editing mokjang')
const deleteMokjang = action('deleting mokjang')
 
export const defaultRendering = () => 
<MokjangList 
    mokjangList={ mokjangList } 
    editMokjang={editMokjang} 
    deleteMokjang={deleteMokjang} />;

const sang = (id) => console.log('hello sang' + id)
const jin = (id) => console.log('hello jin' + id)

export const secondRendering = () => 
<MokjangList 
    mokjangList={ mokjangList } 
    editMokjang={sang} 
    deleteMokjang={jin} />;
