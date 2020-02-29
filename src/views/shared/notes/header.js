import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';

const Header = () => (
    <TableHead>
        <TableRow>
            <TableCell>
                날짜
            </TableCell>
            <TableCell>
                입력자
            </TableCell>
            <TableCell>
                내용
            </TableCell>
        </TableRow>
    </TableHead>
);

export default Header;
