import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from '../redux/question/question-reducer'


const persistConfig = {
    key: 'root',
    storage, 
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
    
})

export default persistReducer(persistConfig, rootReducer);