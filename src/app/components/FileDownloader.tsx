import * as React from 'react';
import { useSelector } from 'react-redux';

import {
    fileNameSelector,
    encryptionKeySelector,
    encryptedTextSelector,
    isDecryptModeOnSelector,
    decryptedContentSelector
} from '../selectors';

import { downloadFile } from '../utils/download';

import Recap from './Recap';
import { Body1 } from './Body';
import { PrimaryButtonSmall, ActionButton } from './Button';

import styled from 'styled-components';

const StyledFileDownloader = styled.div`
    color: ${props => props.theme.colors.white};
    max-width: 552px;
    margin: 0 auto;

    @media ${props => props.theme.media_queries.phone_only} {
        padding: 0 8px;
    }

    .recap {
        border: 1px solid ${props => props.theme.colors.light_grey};
        border-radius: 3px;
        padding: 16px;
    }

    .download-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 22px 0 0;

        .title {
            margin-bottom: 24px;
        }

        .secret {
            width: 100%;
            position: relative;

            input {
                display: block;
                border: 0;
                border-radius: 3px;
                background-color: ${props => props.theme.colors.grey};
                color: inherit;
                height: 48px;
                width: inherit;
                padding: 0 32px;
                margin-bottom: 48px;
            }

            button {
                position: absolute;
                top: 5px;
                right: 5px;
            }
        }
    }
`;

interface Props {
    onDecrypt: (key: string) => void
}

const DECRYPTED_FILE_NAME = 'decrypted.txt';

const FileDownloader: React.FC<Props> = ({ onDecrypt }) => {
    const fileName = useSelector(fileNameSelector);
    const encryptedContent = useSelector(encryptedTextSelector);
    const encryptionKey = useSelector(encryptionKeySelector);
    const isDecryptMode = useSelector(isDecryptModeOnSelector);
    const decryptedContent = useSelector(decryptedContentSelector);

    const [decryptionKey, setDecryptionKey] = React.useState('');

    const inputRef = React.useRef();

    const copyCodeToClipboard = () => {
        const { current }: any = inputRef;
        current.select();
        document.execCommand('copy');
    };

    const decrypt = (e) => {
        e.preventDefault();
        onDecrypt(decryptionKey);
    }

    React.useEffect(() => {
        if(isDecryptMode && decryptedContent) {
            downloadFile(DECRYPTED_FILE_NAME, decryptedContent);
        }
    }, [])

    return (
        <StyledFileDownloader>
            <div className='recap'>
                <Recap text={fileName} light />
            </div>

            { isDecryptMode
                ? (
                    <form className="download-area" onSubmit={decrypt}>
                        <div className="title">
                            <Body1>Insert your key:</Body1>
                        </div>

                        <div className="secret">
                            <input
                                type='text'
                                name='decryptSecret'
                                onChange={e => setDecryptionKey(e.target.value)}
                            />
                        </div>

                        <div className='btn-download'>
                            <ActionButton type='submit'>
                                Decrypt and download
                            </ActionButton>
                        </div>
                    </form>
                )
                :
                (
                    <div className="download-area">
                        <div className="title">
                            <Body1>Your encryption key</Body1>
                        </div>

                        <div className="secret">
                            <input
                                ref={inputRef}
                                type='text'
                                name='encryptSecret'
                                value={encryptionKey}
                                readOnly
                            />
                            <PrimaryButtonSmall onClick={copyCodeToClipboard}>
                                Copy
                            </PrimaryButtonSmall>
                        </div>

                        <div className='btn-download'>
                            <ActionButton
                                onClick={() => downloadFile(fileName, encryptedContent)}>
                                Download
                            </ActionButton>
                        </div>
                    </div>
                )
            }

        </StyledFileDownloader>
    )

};

export default FileDownloader;