import React from 'react';
import { TableContainer, Table, Paper, Box } from '@material-ui/core';
import Head from './head';
import Body from './body';
import SearchBar from '../../../shared/searchBar'

const FamilyList = ({familyList, setSearchQuery}) => {
    
    return (
        <>
            <Box m={2}>
                <SearchBar setSearchQuery={setSearchQuery} />
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <Head />
                    <Body familyList={familyList} />
                </Table>
            </TableContainer>
        </>
    )
}

export default FamilyList