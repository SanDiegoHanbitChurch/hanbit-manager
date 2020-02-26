import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, IconButton } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MembersAvatarGroup from '../../shared/membersAvatarGroup';

const renderHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>

                </TableCell>
                <TableCell>
                    이름
                </TableCell>
                <TableCell>
                    주소
                </TableCell>
                <TableCell>
                    방문 날짜
                </TableCell>
                <TableCell>
                </TableCell>
            </TableRow>
        </TableHead>
    )
}

const renderRow = ({ id, members, visitDate, address }) => {
    const names = members.map(member => member.koreanName).join('/');

    return (
        <TableRow>
            <TableCell>
                <MembersAvatarGroup members={members} />
            </TableCell>
            <TableCell>
                {names}
            </TableCell>
            <TableCell>
                {address}
            </TableCell>
            <TableCell>
                {visitDate.toLocaleDateString()}
            </TableCell>
            <TableCell>
                <IconButton component={Link} to={`/visitor/{id}`}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

const renderBody = (visitorList) => (
    <TableBody>
        { visitorList.map(visitor => renderRow(visitor))}
    </TableBody>
)

const VisitorList = ({ visitorList }) => {

    return (
        <Table>
            { renderHeader() }
            { renderBody(visitorList)} 
        </Table>
    )

};

export default VisitorList;