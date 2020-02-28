import suggestionDAL from './dataAccess/suggestion';

const addSuggestion = (suggestion) => suggestionDAL.add(suggestion);

export {
    addSuggestion
}
