import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import MokjangCard from './mokjangCard';

const renderMokjang = (mokjang, editMokjang, deleteMokjang) => {

    return (
        <MokjangCard {...mokjang} editMokjang={editMokjang} />
    )
}

const MokjangList = ({ mokjangList, editMokjang, deleteMokjang, chowonList }) => {

    return (
        <>
            <GridList cellHeight={200} cols={3}>
                {mokjangList.map(mokjang => (
                    <GridListTile key={mokjang.id} cols={mokjang.cols || 1}>
                        { renderMokjang(mokjang, editMokjang, deleteMokjang) }
                    </GridListTile>
                ))}
            </GridList>
        </>
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