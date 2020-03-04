import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import VisitorList from '../views/admin/visitor/visitorList';
import { generateVisitorList } from './helpers';

export default {
    title: 'Visitor/Visitor List',
    component: VisitorList
}

const visitorList = generateVisitorList(10);
const modifiedList = visitorList.map(({
    members,
    ...rest
}) => ({
    ...rest,
    name: members[0].koreanName,
    email: members[0].email,
    phoneNumber: members[0].phoneNumber,
    members
}))

export const defaultRendering = () => 
    <Router>
        <VisitorList visitorList={modifiedList} />
    </Router>
