import React from 'react';
import { action } from '@storybook/addon-actions';
import Notes from '../views/shared/notes';
import { generateNotes } from './helpers';

export default {
    title: 'shared/Notes',
    component: Notes
}

const notes = generateNotes(3);
const user = notes[1].createdBy;
const addNote = (note) => Promise.resolve(action('add note')(note))
const updateNote = (newData, oldData) => Promise.resolve(action('add note')({newData, oldData}))

export const defaultRendering = () => 
    <Notes 
        notes={notes} 
        user={user} 
        addNote={addNote}
        updateNote={updateNote}
    />