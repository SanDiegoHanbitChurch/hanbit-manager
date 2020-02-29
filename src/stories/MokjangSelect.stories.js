import React from 'react';
import { action } from '@storybook/addon-actions';
import MokjangSelect from '../views/shared/mokjangSelect';

export default {
  title: 'Mokjang/Mokjang Select',
  component: MokjangSelect
}

const mokjangList = [
  {
    name:'하늘'
  },
  {
    name:'샘터'
  }
];

const handleMokjangChange = action('Mokjang Selected');
const mokjang = '샘터';

export const defaultRendering = () => 
  <MokjangSelect 
    onChange={handleMokjangChange} 
    mokjangList={mokjangList} 
    value={mokjang}
  />