import React from 'react';
import { TableBody, TableRow, TableCell } from '@material-ui/core';

const Body = ({ notes }) => (
    <TableBody>
        { 
            notes.map(({ createdBy, createdAt, comment }) => (
                <TableRow>
                    <TableCell>
                        {createdAt.toDate().toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                        {createdBy.name}
                    </TableCell>
                    <TableCell>
                        {comment}
                    </TableCell>
                </TableRow>
            ))
        }
    </TableBody>
)

export default Body
