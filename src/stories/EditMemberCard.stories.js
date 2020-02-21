import React from 'react';
import { action } from '@storybook/addon-actions';
import EditMemberCard from '../views/admin/family/familyDetail/editMemberCard';
import { generateMember } from './helpers';

export default {
  title: 'Edit Member Card',
  component: EditMemberCard
}

const member = generateMember();
const saveMemberInfo = action('Saving Member Info');
const cancel = action('Cancel Member Info editing');

export const defaultRendering = () => <EditMemberCard member={member} saveMemberInfo={saveMemberInfo} cancel={cancel} />