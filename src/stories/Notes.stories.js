import React from 'react';
import Notes from '../views/shared/notes';
import { generateNotes } from './helpers';

export default {
    title: 'shared/Notes',
    component: Notes
}

const notes = generateNotes(5);

export const defaultRendering = () => <Notes notes={notes} />