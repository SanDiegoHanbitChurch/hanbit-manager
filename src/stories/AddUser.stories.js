import React from 'react';
import AddUser from '../views/admin/user/addUser';

export default {
  title:'Add User',
  component: AddUser
}

const user = {
  name: '',
  email: '',
  role: '',
  chowon: '',
  mokjang: ''
}

export const defaultRendering = () => <AddUser user={user} />