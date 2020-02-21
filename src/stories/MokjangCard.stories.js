import React from 'react';
import uuid from 'uuid';
import { BrowserRouter as Router } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import MokjangCard from '../views/shared/mokjangCard';

export default {
    title: 'Mokjang Card',
    component: MokjangCard,
};

const mokjang = {
    id: uuid.v4(),
    name: '은혜',
    leader: '염상용',
    chowon: '두나미스',
    memberFamilies: [
        '문달준/문지영',
        '박성진/구미애'
    ]
};

const editMokjang = action('editing mokjang');

export const defaultRendering = () => 
<Router>
    <MokjangCard {...mokjang} editMokjang={editMokjang} />
</Router>
