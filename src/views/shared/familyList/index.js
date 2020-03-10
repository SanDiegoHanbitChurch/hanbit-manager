import React from 'react';
import { TableContainer, Table, Paper, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Head from './head';
import Body from './body';

const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 50,
    bottom: 50,
    left: 'auto',
    position: 'fixed',
};

const FamilyList = ({familyList, visitor, handleOnClickAdd}) => {


    return (
        <TableContainer component={Paper}>
            <Table>
                <Head visitor/>
                <Body familyList={familyList} visitor={visitor}/>
            </Table>
            <Fab style={fabStyle} color='primary'>
                <AddIcon onClick={handleOnClickAdd} />
            </Fab>
        </TableContainer>
      
    )
}

export default FamilyList