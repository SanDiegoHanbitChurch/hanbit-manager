import React, { useRef, useState } from 'react';
import { Box, IconButton, CircularProgress } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { get } from 'lodash';

const fakeImageUrl = 'https://dummyimage.com/300x200/000/fff.png';

const EditablePhoto = ({ imageUrl, uploadImage }) => {
    const [isLoading, setIsLoading] = useState(false);
    const inputFile = useRef(null);
    const onClick = () => {
        // `current` points to the mounted file input element
       inputFile.current.click();
      };
    const onChange = () => {
        const fileList = get(inputFile, 'current.files', []);
        if (fileList.length > 0) {
            setIsLoading(true);
            uploadImage(fileList[0])
                .finally(() => setIsLoading(false));
        }
    };

    return (
        <Box display='flex' flexDirection='column'>
            <input 
                type='file' 
                id='file' 
                ref={inputFile} 
                onChange={onChange}
                style={{display: 'none'}}
            />
            { isLoading 
                ? <CircularProgress /> 
                : 
                    <div>
                        <img src={imageUrl ? imageUrl :  fakeImageUrl} width={200} alt='family' />
                        <IconButton onClick={onClick}>
                            <EditIcon />
                        </IconButton>
                    </div>
            }
        </Box>
    )
};

export default EditablePhoto;