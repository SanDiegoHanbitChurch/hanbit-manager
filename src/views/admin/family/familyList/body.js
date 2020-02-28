import React from 'react';
import { Link } from 'react-router-dom';
import { TableBody, TableRow, TableCell, IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MembersAvatarGroup from '../../../shared/membersAvatarGroup';
import MembersName from '../../../shared/membersName';

const renderRow = ({id, address, members, mokjang}) => (
    <TableRow key={id}>
        <TableCell>
            <MembersAvatarGroup members={members} />
        </TableCell>
        <TableCell>
            <MembersName members={members} />
        </TableCell>
        <TableCell>
            {mokjang}
        </TableCell>
        <TableCell>
            {address}
        </TableCell>
        <TableCell>
            <IconButton component={Link} to={`/family/${id}`}>
                <ArrowForwardIosIcon />
            </IconButton>

        </TableCell>
    </TableRow>
)

const Body = ({familyList}) => (
    <TableBody>
        { familyList.map(family => renderRow(family)) }
    </TableBody>
)

export default Body;
