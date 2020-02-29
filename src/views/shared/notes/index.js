import React from 'react';
import { TableContainer, Table, Paper } from '@material-ui/core';
import Header from './header';
import Body from './body';

const Notes = ({ notes }) => {
    
    if (notes.length === 0) {
        return null;
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <Header />
                <Body notes={notes}/>
            </Table>
        </TableContainer>
    )
}

export default Notes;
