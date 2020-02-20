import React from 'react';
import { action } from '@storybook/addon-actions';
import uuid from 'uuid';
import ChowonCard from '../views/admin/chowon/chowonCard';

export default {
  title: 'Chowon Card',
  component: ChowonCard,
};

const chowon = 
  {
    id: uuid.v4(),
    name:'Dynamis',
    leader:'Kim'
  };

const editChowon = action('editing chowon');

export const defaultRendering = () => <ChowonCard {...chowon} editChowon={editChowon} />