import React from 'react';
import { TableContainer, Table, Paper } from '@material-ui/core';
import Head from './head';
import Body from './body';

const FamilyList = ({familyList}) => {

    return (
        <TableContainer component={Paper}>
            <Table>
                <Head />
                <Body familyList={familyList} />
            </Table>
        </TableContainer>
    )
}

export default FamilyList