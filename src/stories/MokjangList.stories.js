import React from 'react';
import faker from 'faker';
import uuid from 'uuid';
import { BrowserRouter as Router } from 'react-router-dom'
import { range } from 'lodash';
import MokjangList from '../views/shared/mokjangList';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Mokjang/mokjang list',
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
  <Router>
    <MokjangList 
        chowonList={chowonList}
        addMokjang={ addMokjang }
        mokjangList={ mokjangList } 
        editMokjang={editMokjang} 
        deleteMokjang={deleteMokjang} />
  </Router>
;

export const missingProp=() => 
  <Router>
    <MokjangList 
        chowonList={chowonList}
        addMokjang={ addMokjang }
        editMokjang={editMokjang} 
        deleteMokjang={deleteMokjang} />
  </Router>;