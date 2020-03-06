import React from 'react';
import 'date-fns';
import { action } from '@storybook/addon-actions';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import VisitorDetail from '../views/admin/visitor/visitorDetail/visitorDetail';
import { generateVisitor } from './helpers';

export default {
    title: 'visitor/Visitor Detail',
    component: VisitorDetail
}

const visitor = generateVisitor();
const saveVisitor = action('save visitor');
const user = {
    role: '관리자'
}

export const defaultRendering = () => 
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <VisitorDetail user={user} visitor={visitor} saveVisitor={saveVisitor} />
    </MuiPickersUtilsProvider>

