import {
    FILE_ENCRYPT_REQUEST,
    FILE_ENCRYPT_SUCCESS,
    FILE_ENCRYPT_ERROR
} from '../actions/encryptActions';

import { EncryptedFileInterface } from '../interfaces';

interface StateInterface {
    isInProgress: boolean,
    isDone: boolean,
    encryptedFile: EncryptedFileInterface
}

const initialState: StateInterface = {
    isInProgress: false,
    isDone: false,
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
                isInProgress: true,
                isDone: false
            }
        case FILE_ENCRYPT_SUCCESS:
            return {
                ...state,
                isInProgress: false,
                isDone: true,
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