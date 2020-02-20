import React from 'react';
import faker from 'faker';
import uuid from 'uuid';
import { range } from 'lodash';
import MokjangList from '../views/admin/mokjang/mokjangList';
import { action } from '@storybook/addon-actions';

export default {
  title: 'mokjang list',
  component: MokjangList,
};

const generateMokjangList = (numberOfMokjang) => {
  return range(numberOfMokjang).map(() => ({
    id: uuid.v4(),
    name: faker.random.word(),
    leader:`${faker.name.firstName()} ${faker.name.lastName()}`,
    chowon: faker.random.word()
  }))
};

const mokjangList = generateMokjangList(15);

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