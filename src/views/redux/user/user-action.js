import {userActionTypes} from './user-type'

const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})

export default setCurrentUser;