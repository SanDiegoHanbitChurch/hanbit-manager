import React from 'react';
import { action } from '@storybook/addon-actions';
import VisitorName from '../views/admin/visitor/visitorList/editVisitorDialog/visitorName';

export default {
  title: 'Visitor Name',
  component: VisitorName
}

const englishName = 'English Name';
const koreanName = '한국 이름';

const updateNames = action('Update Names');

export const defaultRendering = () => <VisitorName englishName={englishName} koreanName={koreanName} updateNames={updateNames} />