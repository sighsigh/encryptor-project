import { combineReducers } from 'redux';

import fileReducer from './fileReducer';
import encryptReducer from './encryptReducer';
import decryptReducer from './decryptReducer';

export default combineReducers({
    file: fileReducer,
    encrypt: encryptReducer,
    decrypt: decryptReducer
})