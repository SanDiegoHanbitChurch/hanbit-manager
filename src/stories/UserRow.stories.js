import React from 'react';
import UserRow from '../views/admin/user/userList/userRow/userRow';

export default {
  title:'User/User row',
  component: UserRow
}

const user = {
  name: '염상용',
  email: 'sang.yum@sdhanbit.org',
  role: '초원장',
  chowon: '두나미스',
  mokjang: ''
}

export const defaultRendering = () => <UserRow user={user} />