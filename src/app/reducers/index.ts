import { combineReducers } from 'redux';

import fileReducer from './fileReducer';
import encryptReducer from './encryptReducer';

export default combineReducers({
    file: fileReducer,
    encrypt: encryptReducer
})