import React from 'react';
import { action } from '@storybook/addon-actions';
import RelationSelect from '../views/admin/visitor/visitorList/editVisitorDialog/familyMembers/relationSelect';

export default {
  title: 'Relation Select',
  component: RelationSelect
}

const relation = '아내';
const updateRelation = action('Update Names');

export const defaultRendering = () => <RelationSelect relation={relation} updateRelation={updateRelation} />