import React, {useState} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import AddMokjangDialog from './addMokjangDialog';
import MokjangCard from './mokjangCard';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

const renderMokjang = (mokjang, editMokjang, deleteMokjang) => {

    return (
        <MokjangCard {...mokjang} editMokjang={editMokjang} />
    )
}

const MokjangList = ({ mokjangList, addMokjang, editMokjang, deleteMokjang, chowonList }) => {

    const [open, setOpen] = useState(false);
    const openDialog = () => setOpen(true);
    const handleCancel = () => setOpen(false);
    const handleAdd = (name, leader, chowon) => {
      addMokjang({
        chowon,
        name,
        leader
      });
      setOpen(false);
    }

    return (
        <>
            <GridList cellHeight={200} cols={3}>
                {mokjangList.map(mokjang => (
                    <GridListTile key={mokjang.id} cols={mokjang.cols || 1}>
                        { renderMokjang(mokjang, editMokjang, deleteMokjang) }
                    </GridListTile>
                ))}
            </GridList>
            <Fab style={style} color='primary'>
                <AddIcon onClick={openDialog}/>
            </Fab>
            <AddMokjangDialog open={open} handleCancel={handleCancel} handleAdd={handleAdd} chowonList={chowonList} />
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