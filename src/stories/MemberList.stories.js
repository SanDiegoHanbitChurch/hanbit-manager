import React from 'react';
import MemberList from '../views/admin/family/familyDetail/memberList';
import { generateMembers } from './helpers';

export default {
  title: 'Member List',
  component: MemberList
}

const memberList = generateMembers();

export const defaultRendering = () => <MemberList memberList={memberList} />