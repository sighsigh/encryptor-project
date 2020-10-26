export const FILE_UPLOAD_REQUEST = "FILE_UPLOAD_REQUEST";
export const FILE_UPLOAD_SUCCESS = "FILE_UPLOAD_SUCCESS";
export const FILE_UPLOAD_ERROR = "FILE_UPLOAD_ERROR";
export const FILE_DOWNLOAD_REQUEST = "FILE_DOWNLOAD_REQUEST";
export const FILE_DOWNLOAD_SUCCESS = "FILE_DOWNLOAD_SUCCESS";

// Actions
const fileUploadRequest = () => ({ type: FILE_UPLOAD_REQUEST });
const fileUploadSuccess = (fileData) => ({
  type: FILE_UPLOAD_SUCCESS,
  payload: fileData,
});
const fileUploadError = () => ({ type: FILE_UPLOAD_ERROR });
const fileDownloadRequest = () => ({ type: FILE_DOWNLOAD_REQUEST });
const fileDownloadSuccess = () => ({ type: FILE_DOWNLOAD_SUCCESS });

export const uploadFile = (fileData) => (dispatch) => {
  dispatch(fileUploadRequest());

  if (!fileData) {
    dispatch(fileUploadError());
    return;
  }

  dispatch(fileUploadSuccess(fileData));
};

export const downloadFile = (filename: string, fileContent: string) => (
  dispatch
) => {
  dispatch(fileDownloadRequest());
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:fileContent/plain;charset=utf-8," + encodeURIComponent(fileContent)
  );
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  dispatch(fileDownloadSuccess());
};
