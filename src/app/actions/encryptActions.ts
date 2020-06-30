import { Encrypter } from '../utils/encrypt';
import { Action } from 'redux';

export const FILE_ENCRYPT_REQUEST = 'FILE_ENCRYPT_REQUEST';
export const FILE_ENCRYPT_SUCCESS = 'FILE_ENCRYPT_SUCCESS';
export const FILE_ENCRYPT_ERROR = 'FILE_ENCRYPT_ERROR';

export const FILE_DECRYPT_REQUEST = 'FILE_DECRYPT_REQUEST';
export const FILE_DECRYPT_SUCCESS = 'FILE_DECRYPT_SUCCESS';
export const FILE_DECRYPT_ERROR = 'FILE_DECRYPT_ERROR';

interface EncryptSuccessPayload {
    text: string,
    key: string
}

const fileEncryptRequest = () => ({ type: FILE_ENCRYPT_REQUEST });
const fileEncryptSuccess = (obj: EncryptSuccessPayload) => ({ type: FILE_ENCRYPT_SUCCESS, payload: obj });
const fileEncryptError = () => ({ type: FILE_ENCRYPT_ERROR });

export const encryptFile = ({ content }) => dispatch => {
    if(!content) {
        return;
    }

    const encrypter = new Encrypter();
    // simulate api call
    return new Promise((resolve, reject) => {
        dispatch(fileEncryptRequest());
        setTimeout(() => {
            encrypter.encrypt(content);
            const { encryptedText } = encrypter;

            if(!encryptedText) {
                dispatch(fileEncryptError());
                reject();
            }

            resolve(dispatch(fileEncryptSuccess({
                text: encryptedText,
                key: encrypter.secret
            })));
        }, 1500);
    })
}