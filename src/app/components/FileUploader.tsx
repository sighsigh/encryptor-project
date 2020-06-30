import * as React from 'react';
import { useSelector } from 'react-redux';
import {useDropzone} from 'react-dropzone';

import { isTxtFile } from '../utils/fileExtensions';

import { fileNameSelector, isFileUplaodedSelector } from '../selectors';

import { Body1 } from './Body';
import { DocIconMini, ArrowDownIcon } from './Icons';
import Recap from './Recap';

import styled from 'styled-components';

const StyledUploader = styled.div`
    .description {
      color: ${props => props.theme.colors.white};
      max-width: 552px;
      margin: 0 auto 48px;
      text-align: center;

      @media ${props => props.theme.media_queries.phone_only} {
        padding: 0 8px;
        word-break: break-word;
      }
    }

    .upload-area {
      background-color: ${props => props.theme.colors.orange};
      height: 216px;
      text-align: center;
      padding: 8px;
      margin: 0 auto;
      max-width: 936px;
    }

    .drop-area {
        background: rgba(22, 22, 22, 0.16);
        border: 1px dashed ${props => props.theme.colors.light_grey};
        cursor: pointer;
        font-weight: 400;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;

        &.dropped {
          cursor: default
        }
    }

    .btn-upload {
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

        .text {
          flex: 1 1 142px;
          justify-content: flex-start;
        }

        .arrow {
          border-left: 1px solid ${props => props.theme.colors.dove_grey};
          max-width: 48px;
        }
    }
`;

interface FileInterface {
  path: string,
  content: string | ArrayBuffer
}

interface Props {
  onUpload: (file: FileInterface | null) => void,
}

const FileUploader: React.FC<Props> = props => {
  const { onUpload } = props;

  const isFileUploaded = useSelector(isFileUplaodedSelector);
  const fileName = useSelector(fileNameSelector);

  const onError = () => onUpload(null);

  const onDrop = React.useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    if(!isTxtFile(file.name)) {
      console.error('Invalid file type. Please upload a .txt file.');
      return;
    };

    const reader = new FileReader();

    reader.onabort = () => onError();
    reader.onerror = () => onError();
    reader.onload = () => {
      const { result } = reader;

      onUpload({
        path: file.name,
        content: result
      });
    }
    reader.readAsText(file);
  }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <StyledUploader>
      <div className='description'>
        <Body1>{ 'Sv*s"uwv2#" {"w2x{ w2w"u&-$({#"2s"v2vwu&-$({#"@2ewu)&w2s"-2x{ w2(-$w2s"v2!s{"(s{"2-#)&2$&{*su-3' }</Body1>
      </div>
      <div className='upload-area'>
      {
        !isFileUploaded ? (
            <div className='drop-area' {...getRootProps()}>
              <input {...getInputProps()} />

              <div className='btn-upload'>
                  <div><DocIconMini /></div>
                  <div className='text'><Body1>{"Uz##'w2x{ w3"}</Body1></div>
                  <div className='arrow'><ArrowDownIcon /></div>
              </div>

              <Body1>or drop files here</Body1>
            </div>
        )
        : (
          <div className='drop-area dropped'>
            <Recap text={fileName} />
          </div>
        )
      }
      </div>

    </StyledUploader>
  )
};

export default FileUploader;