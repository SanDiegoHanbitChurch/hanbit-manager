import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';

const Head = ({visitor}) => (
    <TableHead>
        <TableRow>
            <TableCell></TableCell>
            <TableCell style={{textAlign: 'center'}}>이름</TableCell>
            <TableCell style={{textAlign: 'left'}}>{visitor ? '방문일' : '목장'}</TableCell>
            <TableCell style={{textAlign: 'center'}}>주소</TableCell>
            <TableCell />
        </TableRow>
    </TableHead>
)

export default Head;
