export const FILE_UPLOAD_REQUEST = 'FILE_UPLOAD_REQUEST';
export const FILE_UPLOAD_SUCCESS = 'FILE_UPLOAD_SUCCESS';
export const FILE_UPLOAD_ERROR = 'FILE_UPLOAD_ERROR';

// Actions
const fileUploadRequest = () => ({ type: FILE_UPLOAD_REQUEST });
const fileUploadSuccess = fileData => ({ type: FILE_UPLOAD_SUCCESS, payload: fileData });
const fileUploadError = () => ({ type: FILE_UPLOAD_ERROR });

export const uploadFile = fileData => dispatch => {
    dispatch(fileUploadRequest());

    if(!fileData) {
        dispatch(fileUploadError());
        return;
    }

    dispatch(fileUploadSuccess(fileData));
}

export const downloadFile = (): void => { }