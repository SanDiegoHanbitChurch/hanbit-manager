import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import VisitorList from '../views/admin/visitor/visitorList';
import { generateVisitorList } from './helpers';

export default {
    title: 'Visitor/Visitor List',
    component: VisitorList
}

const visitorList = generateVisitorList(10);

export const defaultRendering = () => 
    <Router>
        <VisitorList visitorList={visitorList} />
    </Router>
