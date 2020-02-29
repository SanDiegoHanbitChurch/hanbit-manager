import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import FamilyList from '../views/admin/family/familyList';
import uuid from 'uuid';

export default {
  title: 'Family/Family List',
  component: FamilyList
};
const goToFamily = action('go to family');

const familyList = [
  {
    id: uuid.v4(),
    address: '100 Main Street, San Diego, CA90000',
    members: [
      {
        koreanName: '박성진',
        englishName: 'Jin Park',
        birthdate: '01/01/1000'
      },
      {
        koreanName: '구미애',
        englishName: 'Miae Ku',
        birthdate: '02/02/1100'
      },
      {
        koreanName: '박건우',
        englishName: 'Daniel Park',
        birthdate: '03/03/1200'
      },
      {
        englishName: 'Chris Park',
        birthdate: '04/04/1300'
      },
      {
        koreanName: '박수빈',
        birthdate: '05/05/1400'
      }
    ]
  },
  {
    id: uuid.v4(),
    address: '100 Main Street, San Diego, CA90000',
    members: [
      {
        koreanName: '박성진',
        englishName: 'Jin Park',
        birthdate: '01/01/1000'
      },
      {
        koreanName: '구미애',
        englishName: 'Miae Ku',
        birthdate: '02/02/1100'
      },
      {
        koreanName: '박건우',
        englishName: 'Daniel Park',
        birthdate: '03/03/1200'
      },
      {
        englishName: 'Chris Park',
        birthdate: '04/04/1300'
      },
      {
        koreanName: '박수빈',
        birthdate: '05/05/1400'
      }
    ]
  },
  {
    id: uuid.v4(),
    address: '100 Main Street, San Diego, CA90000',
    members: [
      {
        koreanName: '박성진',
        englishName: 'Jin Park',
        birthdate: '01/01/1000'
      },
      {
        koreanName: '구미애',
        englishName: 'Miae Ku',
        birthdate: '02/02/1100'
      },
      {
        koreanName: '박건우',
        englishName: 'Daniel Park',
        birthdate: '03/03/1200'
      },
      {
        englishName: 'Chris Park',
        birthdate: '04/04/1300'
      },
      {
        koreanName: '박수빈',
        birthdate: '05/05/1400'
      }
    ]
  },
  {
    id: uuid.v4(),
    address: '100 Main Street, San Diego, CA90000',
    members: [
      {
        koreanName: '박성진',
        englishName: 'Jin Park',
        birthdate: '01/01/1000'
      },
      {
        koreanName: '구미애',
        englishName: 'Miae Ku',
        birthdate: '02/02/1100'
      },
      {
        koreanName: '박건우',
        englishName: 'Daniel Park',
        birthdate: '03/03/1200'
      },
      {
        englishName: 'Chris Park',
        birthdate: '04/04/1300'
      },
      {
        koreanName: '박수빈',
        birthdate: '05/05/1400'
      }
    ]
  }
];

export const defaultRendering = () => 
  <Router>
    <FamilyList familyList={familyList} goToFamily={goToFamily} />
  </Router>
