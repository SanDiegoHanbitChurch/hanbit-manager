import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const verse = '하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 저를 믿는 자 마다 영생을 얻게 하려 하심이라';

const TodaysVerse = () => (
    <Box display='flex' flexDirection='column' alignItems='center' flexWrap='wrap'>
        <FormatQuoteIcon />
        <Box m={1}>
            <Typography variant='h6'>
                {verse}
            </Typography>
        </Box>
        <FormatQuoteIcon />
    </Box>
);

export default TodaysVerse