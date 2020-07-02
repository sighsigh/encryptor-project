import { Encryptor } from '../utils/encrypt';
import { db } from '../utils/db';

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

export const encryptFile = (content: string) => dispatch => {
    if(!content) { return; }

    const encrypter = new Encryptor();

    return new Promise((resolve, reject) => {
        dispatch(fileEncryptRequest());

        setTimeout(async () => {
            encrypter.encrypt(content);
            const { encryptedText, secret, iv_hex, key_hex, } = encrypter;

            await db.save(secret, { encryptedText, secret, iv_hex, key_hex })

            if(!encryptedText) {
                dispatch(fileEncryptError());
                reject();
                return;
            }

            dispatch(fileEncryptSuccess({
                text: encryptedText,
                key: encrypter.secret
            }))

            resolve();
        }, 1500);
    })
}