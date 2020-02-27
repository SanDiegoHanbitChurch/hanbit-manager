import React from 'react';
import EditVisitorDialog from '../views/admin/visitor/editVisitorDialog';
import { generateVisitor } from './helpers';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Edit Visitor Dialog',
  component: EditVisitorDialog
}

const open = true;
const visitor = generateVisitor();
const handleSave = action('handle save');
const handleCancel = action('handle cancel');
console.log(visitor);
export const defaultRendering = () => <EditVisitorDialog visitor={visitor} handleSave={handleSave} handleCancel={handleCancel} open={open} />