import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const VisitorName = (props) => {
  const [koreanName, setKoreanName] = useState(props.koreanName);
  const [englishName, setEnglishName] = useState(props.englishName);

  return (
    <>
      <TextField
        onChange={(event) => {
          setKoreanName(event.target.value)
          props.updateNames({koreanName, englishName})
        }}
        value={koreanName}
        autoFocus
        margin="dense"
        id="koreanName"
        placeholder="한국이름"
        type="text"
      />
      <TextField
        onChange={(event) => {
          setEnglishName(event.target.value)
          props.updateNames({koreanName, englishName})
        }}
        value={englishName}
        autoFocus
        margin="dense"
        id="englishName"
        placeholder="영어이름"
        type="text"
      />
    </>
  )
}

export default VisitorName;