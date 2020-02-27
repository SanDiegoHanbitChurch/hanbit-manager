import React, { useState } from 'react';
import { Table, TableContainer, Paper, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { range } from 'lodash';
import Header from './header';
import Body from './body';
import EditVisitorDialog from './editVisitorDialog';

const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 50,
    bottom: 50,
    left: 'auto',
    position: 'fixed',
};

const emptyVisitor = {
    members: range(5).map(() => ({}))
}

const VisitorList = ({ visitorList, addVisitor }) => {

    const [open, setOpen] = useState(false);
    const addNewVistor = () => {
        setOpen(true);
    }
    const handleSave = (newVisitor) => {
        setOpen(false);
        addVisitor(newVisitor);
    }
    const handleCancel = () => setOpen(false);

    return (
        <>
            <TableContainer component={Paper}>
                <Table size="small">
                    <Header />
                    <Body visitorList={visitorList} />
                </Table>
            </TableContainer>
            <Fab style={fabStyle} color='primary' onClick={addNewVistor}>
                <AddIcon />
            </Fab>
            {
                open && 
                <EditVisitorDialog
                    open={open}
                    visitor={emptyVisitor}
                    handleSave={handleSave}
                    handleCancel={handleCancel}
                />
            }
            
        </>
    )

};

export default VisitorList;