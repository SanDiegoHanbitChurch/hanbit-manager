import React from 'react';
import faker from 'faker';
import MokjangDetail from '../views/admin/mokjang/mokjangDetail/mokjangDetail';

export default {
  title: 'mokjang detail',
  component: MokjangDetail,
};

const name = faker.random.words(2);
const leader = `${faker.name.firstName()} ${faker.name.lastName()}`;
const memberFamilies = [
  {
    familyMembers: [
      {
        name: '염상용',
        relation: 'husband',
        isHeadOfHousehold: true
      },
      {
        name: '염진',
        relation: 'wife',
        isHeadOfHousehold: true
      }
    ]
  },
  {
    familyMembers: [
      {
        name: '박성진',
        relation: 'husband',
        isHeadOfHousehold: true
      }
    ]
  },
  {
    familyMembers: [
      {
        name: '구미애',
        relation: 'wife'
      }
    ]
  }
]

export const defaultRendering = () => 
<MokjangDetail 
    name={name} 
    leader={leader} 
    memberFamilies={memberFamilies} />;