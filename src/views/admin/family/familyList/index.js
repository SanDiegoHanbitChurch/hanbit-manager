import React from 'react';
import { TableContainer, Table, Paper } from '@material-ui/core';
import { familyIndex } from '../../../../actions/search';
import Head from './head';
import Body from './body';

const FamilyList = ({familyList}) => {

    const records = familyList.map(({id, ...rest}) => ({objectID: id, ...rest}));

    familyIndex.saveObjects(records)
        .then(() => console.log('success!'))
        .catch(console.log)
    
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