import React from 'react';
import MaterialTable from 'material-table';
import { visitorColumns, regularColumns } from './columns';

const MemberList = ({ visitor, memberList, addMember, updateMember, deleteMember }) => {

    return (
        <MaterialTable
            title="가족명단"
            options={{
                search: false,
                paging: false
            }}
            columns={visitor ? visitorColumns : regularColumns}
            data={memberList}
            editable={{
                onRowAdd: addMember,
                onRowUpdate: updateMember,
                onRowDelete: deleteMember,
                isDeletable: () => memberList.length > 1
            }}
        />
    );
}

export default MemberList;