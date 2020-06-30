import {
    FILE_UPLOAD_REQUEST,
    FILE_UPLOAD_SUCCESS,
    FILE_UPLOAD_ERROR,
} from '../actions/fileActions';

import { FileDataInterface } from '../interfaces';

interface StateInterface {
    data: FileDataInterface,
    isUploaded: boolean
}

const initialState: StateInterface = {
    data: {
        path: '',
        content: ''
    },
    isUploaded: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FILE_UPLOAD_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isUploaded: true
            }
        case FILE_UPLOAD_REQUEST:
        case FILE_UPLOAD_ERROR:
            return {
                ...state,
                isUploaded: false
            }
        default:
            return state;
    }
}