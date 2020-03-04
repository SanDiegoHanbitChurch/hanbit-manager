import React from 'react';
import MaterialTable from 'material-table';

const columns = [
    { title: '이름', field: 'name' },
    { title: '방문일', field: 'visitDate', type: 'date' },
    { title: '주소', field: 'address' },
    { title: '전화번호', field: 'phoneNumber'},
    { title: '이메일', field: 'email' }
]

const detailColumns = [
    { title: '이름', field: 'koreanName' },
    { title: '생일', fiele: 'birthDate', type: 'date' },
    { title: '전화번호', field: 'phoneNumber'},
    { title: '이메일', field: 'email' }
]

const VisitorList = ({ visitorList }) => (
    <MaterialTable
        title="방문자 명단"
        columns={columns}
        data={visitorList}
        detailPanel={({members}) => {
            console.log('members', members);
            return (
                <MaterialTable
                    options={{
                        search: false,
                        showTitle: false,
                        paging: false,
                        toolbar: false
                    }}
                    columns={detailColumns}
                    data={members}
                />
            )
        }
        }
    />
);

export default VisitorList;
