import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Header = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          이름
        </TableCell>
        <TableCell>
          관계
        </TableCell>
      </TableRow>
    </TableHead>
  )
}

export default Header;
