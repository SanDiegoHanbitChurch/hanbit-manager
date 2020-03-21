import React from 'react';
import { action } from '@storybook/addon-actions';
import MessageCreator from '../views/admin/message/messageCreator';

export default {
    title: 'Send Message',
    component: MessageCreator
};

const sendMessage = action('send message');

export const defaultRendering = () => <MessageCreator sendMessage={sendMessage} />
