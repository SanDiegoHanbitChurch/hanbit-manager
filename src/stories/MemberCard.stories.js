import React from 'react';
import MemberCard from '../views/admin/family/familyDetail/memberCard';
import { generateMember } from './helpers';

export default {
  title: 'Member Card',
  component: MemberCard
}

const member = generateMember();

export const defaultRendering = () => <MemberCard member={member} />