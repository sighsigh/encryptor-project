import {
    DECRYPT_MODE_ON,
    FILE_DECRYPT_REQUEST,
    FILE_DECRYPT_SUCCESS,
    FILE_DECRYPT_ERROR
} from '../actions/decryptActions';

interface StateInterface {
    isInProgress: boolean,
    isDecryptingDone: boolean,
    isModeOn: boolean,
    text: string
}

const initialState: StateInterface = {
    isInProgress: false,
    isDecryptingDone: false,
    isModeOn: false,
    text: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case DECRYPT_MODE_ON:
            return {
                ...state,
                isModeOn: true
            }
        case FILE_DECRYPT_REQUEST:
            return {
                ...state,
                isInProgress: true,
                isDecryptingDone: false
            }
        case FILE_DECRYPT_SUCCESS:
            return {
                ...state,
                isInProgress: false,
                isDecryptingDone: true,
                text: action.payload
            }
        case FILE_DECRYPT_ERROR:
            return {
                ...state,
                isDecrypting: false,
                isDecryptingDone: false,
            }
        default:
            return state;
    }
}