import React from 'react';
import { action } from '@storybook/addon-actions';
import Unauthenticated from '../views/unAuthenticated';

export default {
    title: 'Unauthenticated',
    component: Unauthenticated
};

const login = () => {};
const authError = undefined;

export const defaultRendering = () => 
    <Unauthenticated login={login} authError={authError}/>