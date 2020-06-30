import {
    FILE_ENCRYPT_REQUEST,
    FILE_ENCRYPT_SUCCESS,
    FILE_ENCRYPT_ERROR
} from '../actions/encryptActions';

import { EncryptedFileInterface } from '../interfaces';

interface StateInterface {
    isEncryptingProgress: boolean,
    isEncryptingDone: boolean,
    encryptedFile: EncryptedFileInterface
}

const initialState: StateInterface = {
    isEncryptingProgress: false,
    isEncryptingDone: false,
    encryptedFile: {
        text: '',
        key: ''
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FILE_ENCRYPT_REQUEST:
            return {
                ...state,
                isEncryptingProgress: true,
                isEncryptingDone: false
            }
        case FILE_ENCRYPT_SUCCESS:
            return {
                ...state,
                isEncryptingProgress: false,
                isEncryptingDone: true,
                encryptedFile: action.payload
            }
        case FILE_ENCRYPT_ERROR:
            return {
                ...state,
                isEncrypting: false,
                isEncryptingDone: false,
            }
        default:
            return state;
    }
}