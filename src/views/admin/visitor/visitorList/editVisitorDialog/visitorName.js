import React from 'react';
import TextField from '@material-ui/core/TextField';

const VisitorName = ({ koreanName, englishName, setKoreanName, setEnglishName }) => {

  return (
    <>
      <TextField
        onChange={(event) => setKoreanName(event.target.value)}
        value={koreanName}
        autoFocus
        margin="dense"
        id="koreanName"
        placeholder="한국이름"
        type="text"
      />
      <TextField
        onChange={(event) => setEnglishName(event.target.value)}
        value={englishName}
        margin="dense"
        id="englishName"
        placeholder="영어이름"
        type="text"
      />
    </>
  )
}

export default VisitorName;