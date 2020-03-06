import React from 'react';
import { TableContainer, Table, Paper } from '@material-ui/core';
import Head from './head';
import Body from './body';

const FamilyList = ({familyList, visitor}) => {
    
    return (
        <TableContainer component={Paper}>
            <Table>
                <Head visitor/>
                <Body familyList={familyList} visitor={visitor}/>
            </Table>
        </TableContainer>
    )
}

export default FamilyList