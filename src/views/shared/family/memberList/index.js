import React from 'react';
import MaterialTable from 'material-table';
import { visitorColumns, regularColumns } from './columns';

const MemberList = ({ visitor, memberList, addMember, updateMember, deleteMember }) => {

    return (
        <MaterialTable
            columns={visitor ? visitorColumns : regularColumns}
            data={memberList}
            editable={{
                onRowAdd: addMember,
                onRowUpdate: updateMember,
                onRowDelete: deleteMember
            }}
        />
    );
}

export default MemberList;