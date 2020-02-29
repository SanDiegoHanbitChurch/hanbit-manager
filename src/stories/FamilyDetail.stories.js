import React from 'react';
import { action } from '@storybook/addon-actions';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import FamilyDetail from '../views/admin/family/familyDetail/familyDetail';
import { generateFamily } from './helpers';

export default {
    title: 'Family/Family Detail',
    Component: FamilyDetail
};

const family = generateFamily();
const saveFamily = action('saving family');

export const defaultRender = () => 
<MuiPickersUtilsProvider utils={DateFnsUtils}>
    <FamilyDetail family={family} saveFamily={saveFamily}/>
</MuiPickersUtilsProvider>