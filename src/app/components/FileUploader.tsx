import * as React from 'react';
import {useDropzone} from 'react-dropzone';

import { isTxtFile } from '../utils/fileExtensions';

import { Body1 } from './Body';
import { DocIconMini, ArrowDownIcon } from './Icons';

import styled from 'styled-components';

const _Uploader = styled.div`
    background-color: ${props => props.theme.colors.orange};
    height: 216px;
    text-align: center;
    padding: 8px;

    .drop-area {
        background: rgba(22, 22, 22, 0.16);
        border: 1px dashed ${props => props.theme.colors.light_grey};
        font-weight: 400;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    .trigger {
        background-color: ${props => props.theme.colors.white};
        border-radius: 3px;
        color: ${props => props.theme.colors.dark};
        width: 264px;
        height: 48px;
        display: flex;
        align-items: center;
        margin: 0 auto 24px;

        & > div {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          flex: 1 1 33.33333%;
        }

        .filename {
          flex: 1 1 142px;
          justify-content: flex-start;
        }

        .arrow {
          border-left: 1px solid ${props => props.theme.colors.dove_grey};
          max-width: 48px;
        }
    }
`;

const FileUploader = () => {
  const onDrop = React.useCallback(acceptedFiles => {
    acceptedFiles.forEach((file) => {

      if(!isTxtFile(file.name)) {
        console.log('Invalid file type. Please upload a .txt file.');
        return;
      };

      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const content = reader.result;
        console.log(content);
      }
      reader.readAsText(file)
    })
  }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <_Uploader>
      <div className='drop-area' {...getRootProps()}>
        <input {...getInputProps()} />
        <div className='trigger'>
            <div><DocIconMini /></div>
            <div className='filename'><Body1>{"Uz##'w2x{ w3"}</Body1></div>
            <div className='arrow'><ArrowDownIcon /></div>
        </div>
        <Body1>or drop files here</Body1>
      </div>
    </_Uploader>
  )
};

export default FileUploader;