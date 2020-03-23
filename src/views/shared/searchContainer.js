import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SearchBar from './searchBar';

const SearchContainer = ({ search, children }) => {

    const [searchResult, setSearchResult] = useState(null);
    const setSearchQuery = (query) => {
        search(query)
            .then(setSearchResult)
    }

    return (
        <>
            <Box m={2}>
                <SearchBar setSearchQuery={setSearchQuery} />
                {searchResult && searchResult.length === 0 && 
                    <Typography align="center" variant="h5">찾으시는 사람이 없습니다.</Typography>}
            </Box>
            {children(searchResult)}
        </>
    )
}

export default SearchContainer;
