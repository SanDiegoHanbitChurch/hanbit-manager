import React from 'react';
import { action } from '@storybook/addon-actions';
import { generateFamilyList } from './helpers';
import FamilyList from '../views/admin/family/familyList';

export default {
    title: 'Family List',
    component: FamilyList
};


const familyList = generateFamilyList(6);
const editFamily = action('editing a family');

export const defaultRendering = () => <FamilyList familyList={familyList} editFamily={editFamily} />