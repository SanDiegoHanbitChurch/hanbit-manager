import React from 'react';
import { action } from '@storybook/addon-actions';
import ServicesRadioGroup from '../views/shared/ServicesRadioGroup';

export default {
    title: 'shared/Services Radio Group',
    component: ServicesRadioGroup
}

const service = '1부';
const setService = action('set service');

export const defaultRendering = () => <ServicesRadioGroup service={service} setService={setService} />