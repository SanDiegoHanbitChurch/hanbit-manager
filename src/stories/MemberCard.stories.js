import React from 'react';
import { action } from '@storybook/addon-actions';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MemberCard from '../views/admin/family/familyDetail/memberCard';
import { generateMember } from './helpers';

export default {
  title: 'Member Card',
  component: MemberCard
}

const index = 1;
const member = generateMember();
const saveMemberInfo = action('Saving Member');

export const defaultRendering = () => 
<MuiPickersUtilsProvider utils={DateFnsUtils}>
  <MemberCard index={index} member={member} saveMemberInfo={saveMemberInfo} />
</MuiPickersUtilsProvider>