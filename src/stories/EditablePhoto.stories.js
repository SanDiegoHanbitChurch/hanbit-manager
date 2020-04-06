import React from 'react';
import faker from 'faker';
import { action } from '@storybook/addon-actions';
import EditablePhoto from '../views/shared/editablePhoto';

export default {
    title: 'Editable Photo',
    component: EditablePhoto
}

const imageUrl = undefined;
const uploadImage = action('upload image');

export const defaultRendering = () => 
    <EditablePhoto imageUrl={imageUrl} uploadImage={uploadImage} />

const fakerImageUrl = faker.image.imageUrl(300,200,"people");
export const imageRendering = () => 
    <EditablePhoto imageUrl={fakerImageUrl} uploadImage={uploadImage} />