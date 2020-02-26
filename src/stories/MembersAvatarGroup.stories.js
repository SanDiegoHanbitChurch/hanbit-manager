import React from 'react';
import MembersAvatarGroup from '../views/shared/membersAvatarGroup';
import { generateFamily } from './helpers';

export default {
    title: 'Members Avatar Group',
    component: MembersAvatarGroup
}

const { members } = generateFamily();

export const defaultRendering = () => 
    <MembersAvatarGroup members={members} />