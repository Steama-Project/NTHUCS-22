import {createSelector} from 'reselect'

//select the whole directory state
const selectDirectory = state => state.directory;


// select the current user from the whole user state
export const selectSections = createSelector(
    [selectDirectory], (directory) => directory.sections
);

export const selectSections2 = createSelector(
    [selectDirectory], (directory) => directory.sections2
);

export const selectSections3 = createSelector(
    [selectDirectory], (directory) => directory.sections3
);