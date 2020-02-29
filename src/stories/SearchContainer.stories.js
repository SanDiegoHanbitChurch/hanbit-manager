import React from 'react';
import SearchContainer from '../views/shared/searchContainer';

export default {
    title: 'shared/Search Container',
    component: SearchContainer
}

const search = (query) => Promise.resolve(query)

export const defaultRendering = () => 
    <SearchContainer search={search}>
        {(searchResult) => {
            if (searchResult) {
                return <h1>Got search result: {searchResult}</h1>
            }

            return <h1>Regular result</h1>
        }}
    </SearchContainer>