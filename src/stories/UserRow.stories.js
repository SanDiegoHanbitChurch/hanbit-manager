import React from 'react';
import UserRow from '../views/admin/user/userRow';

export default {
  title:'User row',
  component: UserRow
}

const user = {
  name: '염상용',
  email: 'sang.yum@sdhanbit.org',
  role: '초원장',
  group: '두나미스'
}

export const defaultRendering = () => <UserRow user={user} />