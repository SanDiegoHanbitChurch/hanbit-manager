import React from 'react';
import { action } from '@storybook/addon-actions';
import ContactInfo from '../views/admin/visitor/editVisitorDialog/contactInfo';

export default {
  title: 'Contact Info',
  component: ContactInfo
}

const email = 'test@gmail.com';
const phoneNumber = '999-888-7777';
const updateContact = action('Update Contact');

export const defaultRendering = () => <ContactInfo email={email} phoneNumber={phoneNumber} updateContact={updateContact} />