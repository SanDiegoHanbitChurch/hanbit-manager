import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ChowonCard from './chowonCard';

const renderChowon = (chowon, editChowon, deleteChowon) => {
  return (
    <ChowonCard {...chowon} editChowon={editChowon} />
  )
}

const ChowonList = ({ chowonList, editChowon, deleteChowon}) => {

  return (
    <>
      <GridList cellHeight={120} cols={3}>
        {chowonList.map(chowon => (
            <GridListTile key={chowon.id} cols={1}>
                { renderChowon(chowon, editChowon, deleteChowon) }
            </GridListTile>
        ))}
      </GridList>
    </>
  )
}

ChowonList.defaultProps = {
  chowonList: [],
  addChowon: () => {},
  editChowon: () => {},
  deleteChowon: () => {}
}

export default ChowonList;
