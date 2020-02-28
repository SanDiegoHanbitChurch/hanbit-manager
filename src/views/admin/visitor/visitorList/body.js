import React from 'react';
import { Link } from 'react-router-dom';
import { TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MembersAvatarGroup from '../../../shared/membersAvatarGroup';

const renderRow = ({ id, members, visitDate = '', address }) => {
    const filteredMembers = members.filter(member => member.koreanName || member.englishName);
    const names = filteredMembers
        .map(member => member.koreanName || member.englishName)
        .join('/');

    return (
        <TableRow>
            <TableCell>
                <MembersAvatarGroup members={filteredMembers} />
            </TableCell>
            <TableCell>
                {names}
            </TableCell>
            <TableCell>
                {address}
            </TableCell>
            <TableCell>
                {typeof visitDate === 'string' ? visitDate : visitDate.toLocaleDateString()}
            </TableCell>
            <TableCell>
                <IconButton component={Link} to={`/visitor/${id}`}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}


const Body = ({visitorList}) => (
    <TableBody>
        { visitorList.map(visitor => renderRow(visitor))}
    </TableBody>
)

export default Body;
