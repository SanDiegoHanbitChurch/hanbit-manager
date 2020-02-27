import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ChowonCard from './chowonCard';
import { Container, Paper } from '@material-ui/core';

const renderChowon = (chowon, editChowon, deleteChowon) => {
  return (
    <ChowonCard {...chowon} editChowon={editChowon} />
  )
}

const ChowonList = ({ chowonList, editChowon, deleteChowon}) => {

  return (
    <Container component={Paper}>
      <GridList cols={3}>
        {chowonList.map(chowon => (
            <GridListTile key={chowon.id} cols={1}>
                { renderChowon(chowon, editChowon, deleteChowon) }
            </GridListTile>
        ))}
      </GridList>
    </Container>
  )
}

ChowonList.defaultProps = {
  chowonList: [],
  addChowon: () => {},
  editChowon: () => {},
  deleteChowon: () => {}
}

export default ChowonList;
