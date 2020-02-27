import React from 'react';
import FamilyMembers from '../views/admin/visitor/editVisitorDialog/familyMembers';

export default {
  title: 'Family Members',
  component: FamilyMembers
}

const members = [
  {
    koreanName: '방문자1',
    relation: '아내'
  },
  {
    koreanName: '방문자2',
    relation: '아들'
  },
  {
    koreanName: '방문자3',
    relation: '딸'
  },
  {
    koreanName: '방문자4',
    relation: '아들'
  }
];

export const defaultRendering = () => <FamilyMembers members={members}/>