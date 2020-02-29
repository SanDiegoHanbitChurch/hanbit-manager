import React, { useState } from 'react';
import { Box } from '@material-ui/core';
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
            </Box>
            {children(searchResult)}
        </>
    )
}

export default SearchContainer;
