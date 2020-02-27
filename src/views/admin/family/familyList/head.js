import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';

const Head = () => (
    <TableHead>
        <TableRow>
            <TableCell></TableCell>
            <TableCell>이름</TableCell>
            <TableCell>목장</TableCell>
            <TableCell>주소</TableCell>
            <TableCell />
        </TableRow>
    </TableHead>
)

export default Head;
