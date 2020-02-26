import React from 'react';
import { action } from '@storybook/addon-actions';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import EditMemberCard from '../views/admin/family/familyDetail/editMemberCard';
import { generateMember } from './helpers';

export default {
  title: 'Edit Member Card',
  component: EditMemberCard
}

const member = generateMember();
const saveMemberInfo = action('Saving Member Info');
const cancel = action('Cancel Member Info editing');

export const defaultRendering = () => 
<MuiPickersUtilsProvider utils={DateFnsUtils}>
  <EditMemberCard member={member} saveMemberInfo={saveMemberInfo} cancel={cancel} />
</MuiPickersUtilsProvider>