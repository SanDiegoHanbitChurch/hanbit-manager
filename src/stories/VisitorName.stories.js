import React from 'react';
import { action } from '@storybook/addon-actions';
import VisitorName from '../views/admin/visitor/visitorList/editVisitorDialog/visitorName';

export default {
  title: 'Visitor Name',
  component: VisitorName
}

const englishName = 'English Name';
const koreanName = '한국 이름';

const setKoreanName = action('set korean name');
const setEnglishName = action('set English name');

export const defaultRendering = () => 
  <VisitorName 
    englishName={englishName} 
    koreanName={koreanName}
    setKoreanName={setKoreanName}
    setEnglishName={setEnglishName}
  />