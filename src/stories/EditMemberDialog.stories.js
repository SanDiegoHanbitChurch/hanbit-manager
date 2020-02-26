import React from 'react';
import { action } from '@storybook/addon-actions';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import EditMemberDialog from '../views/admin/family/familyDetail/memberCard/editMemberDialog';
import { generateMember } from './helpers';

export default {
  title: 'Edit Member Dialog',
  component: EditMemberDialog
}

const member = generateMember();
const handleSave = action('Saving Member Info');
const handleCancel = action('Cancel Member Info editing');

export const diaglogOpened = () => 
<MuiPickersUtilsProvider utils={DateFnsUtils}>
  <EditMemberDialog open={true} member={member} handleSave={handleSave} handleCancel={handleCancel} />
</MuiPickersUtilsProvider>

export const diaglogClosed = () => 
<MuiPickersUtilsProvider utils={DateFnsUtils}>
  <EditMemberDialog open={false} member={member} handleSave={handleSave} handleCancel={handleCancel} />
</MuiPickersUtilsProvider>