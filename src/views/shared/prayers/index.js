import React from 'react';
import { TextField } from '@material-ui/core';
import MaterialTable from 'material-table';

const columns = [
    { title: '이름', field: 'createdBy.name', editable: 'never'},
    { title: '입력일', field: 'createdAt', type: 'date', editable: 'never'},
    { 
        title: '내용',
        field: 'comment',
        type: 'string',
        editComponent: ({value, onChange}) => 
            <TextField 
                multiline 
                rows={4} 
                value={value} 
                onChange={(event) => onChange(event.target.value)}
            />
    }
]

const Prayers = ({ user, prayers, addPrayer, updatePrayer }) => (
    <MaterialTable
        title="기도제목"
        options={{
            search: false,
            paging: false,
            addRowPosition: 'first',
            sorting: false
        }}
        columns={columns}
        data={prayers.map(({createdAt, ...rest}) => ({
            // creatdAt is a Timestamp object from firestore
            createdAt: createdAt.toDate(),
            ...rest
        }))}
        editable={{
            isEditable: rowData => rowData.createdBy.email === user.email,
            onRowAdd: ({comment}) => addPrayer({createdBy: user, createdAt: new Date(), comment}),
            onRowUpdate: updatePrayer
        }}
    />
)

export default Prayers;
