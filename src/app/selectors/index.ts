export const fileNameSelector = state => state.file.data.path;
export const isFileUplaodedSelector = state => state.file.isUploaded;

export const encryptionKeySelector = state => state.encrypt.encryptedFile.key;
export const encryptedTextSelector = state => state.encrypt.encryptedFile.text;

export const isDecryptModeOn = state => state.decrypt.isModeOn;
