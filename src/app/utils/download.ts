export const downloadFile = (filename: string, fileContent: string): void => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:fileContent/plain;charset=utf-8,' + encodeURIComponent(fileContent));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}