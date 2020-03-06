import React from 'react';
import { Link } from 'react-router-dom';
import { TableBody, TableRow, TableCell, IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MembersAvatarGroup from '../membersAvatarGroup';
import MembersName from '../membersName';

const renderRow = ({id, address, members, mokjang, visitDate}, visitor) => (
    <TableRow key={id}>
        <TableCell>
            <MembersAvatarGroup members={members} />
        </TableCell>
        <TableCell>
            <MembersName members={members} />
        </TableCell>
        <TableCell>
            {visitor ? visitDate : mokjang}
        </TableCell>
        <TableCell>
            {address}
        </TableCell>
        <TableCell>
            <IconButton component={Link} to={`/${visitor ? 'visitor' : 'family'}/${id}`}>
                <ArrowForwardIosIcon />
            </IconButton>

        </TableCell>
    </TableRow>
)

const Body = ({familyList, visitor}) => (
    <TableBody>
        { familyList.map(family => renderRow(family, visitor)) }
    </TableBody>
)

export default Body;
