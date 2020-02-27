import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Container, Paper } from '@material-ui/core';
import MokjangCard from './mokjangCard';

const renderMokjang = (mokjang, editMokjang, deleteMokjang) => {

    return (
        <MokjangCard {...mokjang} editMokjang={editMokjang} />
    )
}

const MokjangList = ({ mokjangList, editMokjang, deleteMokjang, chowonList }) => {

    return (
        <Container component={Paper}>
            <GridList cols={3}>
                {mokjangList.map(mokjang => (
                    <GridListTile key={mokjang.id} cols={mokjang.cols || 1}>
                        { renderMokjang(mokjang, editMokjang, deleteMokjang) }
                    </GridListTile>
                ))}
            </GridList>
        </Container>
    )
}

MokjangList.defaultProps = {
    mokjangList: [],
    chowonList: [],
    addMokjang: () => {},
    editMokjang: () => {},
    deleteMokjang: () => {}
}

export default MokjangList;