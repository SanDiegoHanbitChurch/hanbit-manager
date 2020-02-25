import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SideNav from '../sideNav';

export default {
    title: 'Side Navigation Menu',
    component: SideNav
}

const admin = {
    role: '관리자'
}
export const adminUserRendering = () => <Router><SideNav user={admin}/></Router>

const seniorPastor = {
    role: '담임목사'
}
export const seniorPastorRendering = () => <Router><SideNav user={seniorPastor}/></Router>

const chowonLeader = {
    role: '초원장'
}
export const chowonLeaderRender = () => <Router><SideNav user={chowonLeader}/></Router>

const mokjangLeader = {
    role: '목자'
}
export const mokjangLeaderRender = () => <Router><SideNav user={mokjangLeader}/></Router>
