import { Encryptor } from "@utils/encrypt";
import { db } from "@utils/db";

export const DECRYPT_MODE_ON = "DECRYPT_MODE_ON";
export const FILE_DECRYPT_REQUEST = "FILE_DECRYPT_REQUEST";
export const FILE_DECRYPT_SUCCESS = "FILE_DECRYPT_SUCCESS";
export const FILE_DECRYPT_ERROR = "FILE_DECRYPT_ERROR";

const setDecryptModeOn = () => ({ type: DECRYPT_MODE_ON });
const fileDecryptRequest = () => ({ type: FILE_DECRYPT_REQUEST });
const fileDecryptSuccess = (payload: string) => ({
  type: FILE_DECRYPT_SUCCESS,
  payload,
});
const fileDecryptError = () => ({ type: FILE_DECRYPT_ERROR });

export const enableDecryptMode = () => (dispatch) =>
  dispatch(setDecryptModeOn());

export const decryptFile = (key: string) => (dispatch) => {
  if (!key) {
    return;
  }

  const encrypter = new Encryptor();

  return new Promise((resolve, reject) => {
    dispatch(fileDecryptRequest());

    setTimeout(async () => {
      const encryptedData = await db.getById(key);

      if (!encryptedData) {
        dispatch(fileDecryptError());
        reject();
        return;
      }

      const { encryptedText, key_hex, iv_hex } = encryptedData;
      encrypter.decrypt({ encryptedText, key_hex, iv_hex });

      if (!encrypter.decryptedText) {
        dispatch(fileDecryptError());
        reject();
        return;
      }

      dispatch(fileDecryptSuccess(encrypter.decryptedText));
      resolve();
    }, 1500);
  });
};
