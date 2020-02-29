import React from 'react';
import { action } from '@storybook/addon-actions';
import ContactInfo from '../views/admin/visitor/visitorList/editVisitorDialog/contactInfo';

export default {
  title: 'Visitor/Contact Info',
  component: ContactInfo
}

const email = 'test@gmail.com';
const phoneNumber = '999-888-7777';
const address = '100 Main St. San Diego, CA 92129'
const setEmail = action('set email');
const setPhoneNumber = action('set phone number');
const setAddress = action('set address');

export const defaultRendering = () => 
  <ContactInfo 
    email={email} 
    phoneNumber={phoneNumber} 
    address={address}
    setEmail={setEmail} 
    setPhoneNumber={setPhoneNumber}
    setAddress={setAddress}
  />