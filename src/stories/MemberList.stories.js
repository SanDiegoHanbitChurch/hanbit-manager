import React from 'react';
import { action } from '@storybook/addon-actions';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MemberList from '../views/admin/family/familyDetail/memberList';
import { generateMembers } from './helpers';

export default {
  title: 'Member/Member List',
  component: MemberList
}

const members = generateMembers();
const saveFamilyMembers = action('saving family members')

export const defaultRendering = () => 
<MuiPickersUtilsProvider utils={DateFnsUtils}>
  <MemberList members={members} saveFamilyMembers={saveFamilyMembers} />
</MuiPickersUtilsProvider>