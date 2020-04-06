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
const mokjangLookup = [
    {
        key: 'Grace',
        value: 'Grace'
    },
    {
        key: 'Hope',
        value: 'Hope'
    }
];
const mokja = {
    role: '목자'
}

export const mokjaView = () => 
<MuiPickersUtilsProvider utils={DateFnsUtils}>
    <FamilyDetail family={family} saveFamily={saveFamily} mokjangLookup={mokjangLookup} user={mokja}/>
</MuiPickersUtilsProvider>

const seniorPastor = {
    role: '담임목사'
};

export const seniorPastorView = () => 
<MuiPickersUtilsProvider utils={DateFnsUtils}>
    <FamilyDetail family={family} saveFamily={saveFamily} mokjangLookup={mokjangLookup} user={seniorPastor}/>
</MuiPickersUtilsProvider>