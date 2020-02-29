import React from 'react';
import { action } from '@storybook/addon-actions';
import NewNote from '../views/shared/newNote';

export default {
    title: 'shared/Notes/New Note',
    component: NewNote
}

const addNote = action('add note');

export const defaultRendering = () => <NewNote addNote={addNote} />