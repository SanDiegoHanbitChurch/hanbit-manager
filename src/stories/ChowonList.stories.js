import React from 'react';
import ChowonList from '../views/admin/chowonList';
import uuid from 'uuid';
import { action } from '@storybook/addon-actions';

export default {
  title: 'chowon list',
  component: ChowonList,
};

const chowonList = [
  {
    id: uuid.v4(),
    name:'Dynamis',
    leader:'Kim'
  },
  {
    id: uuid.v4(),
    name:'Dynamis',
    leader:'Kim'
  },
  {
    id: uuid.v4(),
    name:'Dynamis',
    leader:'Kim'
  }
]

const editChowon = action('editing chowon')
const deleteChowon = action('deleting chowon')
 
export const defaultRendering = () => 
<ChowonList 
    chowonList={ chowonList } 
    editChowon={editChowon} 
    deleteChowon={deleteChowon} />;
