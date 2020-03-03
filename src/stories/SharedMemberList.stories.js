import React from 'react';
import { action } from '@storybook/addon-actions';
import MemberList from '../views/shared/family/memberList';
import { generateMembers } from './helpers';

export default {
    title: 'shared/Family/MemberList',
    component: MemberList
}

const memberList = generateMembers(5);
const addMember = (newData) => 
    Promise.resolve(action('add member')(newData))
const updateMember = (updatedData) => 
    Promise.resolve(action('update member')(updatedData))
const deleteMember = (oldData) => 
    Promise.resolve(action('delete member')(oldData))

export const visitorRendering = () => 
    <MemberList 
        visitor
        memberList={memberList}
        addMember={addMember}
        updateMember={updateMember}
        deleteMember={deleteMember}
    />

export const regularRendering = () => 
    <MemberList 
        memberList={memberList}
        addMember={addMember}
        updateMember={updateMember}
        deleteMember={deleteMember}
    />
