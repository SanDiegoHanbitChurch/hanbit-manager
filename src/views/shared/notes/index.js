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

const Notes = ({ user, notes, addNote, updateNote }) => (
    <MaterialTable
        title="Notes"
        options={{
            search: false,
            paging: false,
            addRowPosition: 'first',
            sorting: false
        }}
        columns={columns}
        data={notes}
        editable={{
            isEditable: rowData => rowData.createdBy.email === user.email,
            onRowAdd: ({comment}) => addNote({createdBy: user, createdAt: new Date(), comment}),
            onRowUpdate: updateNote
        }}
    />
)

export default Notes;
