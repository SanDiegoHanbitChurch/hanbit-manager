import React from 'react';
import { action } from '@storybook/addon-actions';
import ConfirmationDialog from '../views/shared/confirmationDialog';

export default {
  title: 'User/Confirmation Dialog',
  component: ConfirmationDialog
}

const handleYes = action('Yes');
const handleNo = action('No');
const open = true;

export const defaultRendering = () => <ConfirmationDialog handleYes={handleYes} handleNo={handleNo} open={open} />
export const closeDialog = () => <ConfirmationDialog handleYes={handleYes} handleNo={handleNo} open={false} />