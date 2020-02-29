import React from 'react';
import uuid from 'uuid';
import faker from 'faker';
import { range } from 'lodash';
import ChowonDetail from '../views/admin/chowon/chowonDetail/chowonDetail';

export default {
  title: 'Chowon/chowon detail',
  component: ChowonDetail,
};

const generateMokjangList = (numberOfMokjang) => {
  return range(numberOfMokjang).map(() => ({
      id: uuid.v4(),
      name: faker.random.words(2),
      leader: `${faker.name.firstName()} ${faker.name.lastName()}`
    }));
  };

const name = faker.random.words(2);
const leader = `${faker.name.firstName()} ${faker.name.lastName()}`;
const mokjangList = generateMokjangList(5);

 
export const defaultRendering = () => 
<ChowonDetail 
    name={ name} 
    leader={leader} 
    mokjangList={mokjangList} />;
