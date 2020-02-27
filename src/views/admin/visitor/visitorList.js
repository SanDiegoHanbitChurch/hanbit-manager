import React from 'react';
// import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, IconButton, TableContainer, Paper, Fab } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddIcon from '@material-ui/icons/Add';
import MembersAvatarGroup from '../../shared/membersAvatarGroup';

const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 50,
    bottom: 50,
    left: 'auto',
    position: 'fixed',
};

// const useStyles = makeStyles(theme => ({
//     fab: {
//       position: 'absolute',
//       bottom: theme.spacing(2),
//       right: theme.spacing(2),
//     },
// }));

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

const renderBody = (visitorList) => (
    <TableBody>
        { visitorList.map(visitor => renderRow(visitor))}
    </TableBody>
)

const VisitorList = ({ visitorList }) => {

    // const classes = useStyles();

    return (
        <>
            <TableContainer component={Paper}>
                <Table size="small">
                    { renderHeader() }
                    { renderBody(visitorList)} 
                </Table>
            </TableContainer>
            <Fab style={fabStyle} color='primary'>
                <AddIcon />
            </Fab>
        </>
    )

};

export default VisitorList;