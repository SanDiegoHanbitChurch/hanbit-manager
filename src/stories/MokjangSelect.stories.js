import React from 'react';
import { action } from '@storybook/addon-actions';
import MokjangSelect from '../views/shared/mokjangSelect';

export default {
  title: 'Mokjang Select',
  component: MokjangSelect
}

const mokjangList = ['은혜', '샘터', '르우엘', '샘물'];
const handleMokjangChange = action('Mokjang Selected');
const mokjang = '은혜';

export const defaultRendering = () => 
  <MokjangSelect 
    handleMokjangChange={handleMokjangChange} 
    mokjangList={mokjangList} 
    mokjang={mokjang}
  />