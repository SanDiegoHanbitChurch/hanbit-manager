import React from 'react';
import EditUserRow from '../views/admin/user/editUserRow';

export default {
  title: 'Edit User row',
  component: EditUserRow
}

const user = {
  name: '아무개',
  email: 'fdsaf@sdhanbit.org',
  role: '목자',
  group: '새로운'
}

export const defaultRendering = () => <EditUserRow user={user} />