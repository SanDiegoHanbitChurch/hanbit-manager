import React from 'react';
import { action } from '@storybook/addon-actions';
import MemberCard from '../views/admin/family/familyDetail/memberCard';
import { generateMember } from './helpers';

export default {
  title: 'Member Card',
  component: MemberCard
}

const member = generateMember();
const editMember = action('Editing Member');

export const defaultRendering = () => <MemberCard member={member} editMember={editMember} />