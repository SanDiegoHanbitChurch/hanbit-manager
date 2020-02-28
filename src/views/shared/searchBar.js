import React, { useState } from 'react';
import SearchBar from 'material-ui-search-bar';

const Search = ({ setSearchQuery }) => {

    const [query, setQuery] = useState('');

    return (
        <SearchBar
            value={query}
            onChange={setQuery}
            onRequestSearch={() => setSearchQuery(query)}
            style={{
                margin: '0 auto',
                maxWidth: 800
            }}
        />
    )
}

export default Search;