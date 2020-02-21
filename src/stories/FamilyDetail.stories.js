import React from 'react';
import FamilyDetail from '../views/admin/family/familyDetail/familyDetail';
import { generateFamily } from './helpers';

export default {
    title: 'Family Detail',
    Component: FamilyDetail
};

const family = generateFamily();

export const defaultRender = () => <FamilyDetail family={family} />