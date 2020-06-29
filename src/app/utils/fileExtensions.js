const getFileTypeChecker = type => fileName => {
    const extension = '.' + type;
    const lastDotIndex = fileName.lastIndexOf(extension);
    if (lastDotIndex === -1) {
        return false;
    }

    return extension === fileName.substr(lastDotIndex);
};

export const isTxtFile = getFileTypeChecker('txt');