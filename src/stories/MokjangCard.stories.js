import React from 'react';
import MokjangCard from '../views/admin/mokjang/mokjangCard';

export default {
    title: 'Mokjang Card',
    component: MokjangCard,
};

const mokjang = {
    name: '은혜',
    leader: '염상용',
    chowon: '두나미스',
    memberFamilies: []
};

export const defaultRendering = () => <MokjangCard {...mokjang} />