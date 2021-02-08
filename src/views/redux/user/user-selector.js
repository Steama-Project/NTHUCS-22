import {createSelector} from 'reselect'

//select the whole user state
const selectUser = state => state.user;


// select the current user from the whole user state
export const selectCurrentUser = createSelector(
    [selectUser], (user) => user.currentUser
);
