import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import FamilyList from '../views/shared/familyList';
import { generateFamilyList } from './helpers';

export default {
  title: 'Family/Family List',
  component: FamilyList
};

const familyList = generateFamilyList(5);
const handleOnClickAdd = action('handle onclick add');

export const defaultRendering = () => 
  <Router>
    <FamilyList familyList={familyList} handleOnClickAdd={handleOnClickAdd} />
  </Router>
