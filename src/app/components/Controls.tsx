import * as React from 'react';
import { useSelector } from 'react-redux';

import { fileDataSelector } from '../selectors';
import { FileDataInterface } from '../interfaces';

import { PrimaryButton, SecondaryButton } from './Button';
import styled from '../theme';

const StyledControls = styled.div`
    display: flex;
    justify-content: center;

    button:first-of-type {
      margin-right: 24px;
    }
`;

interface Props {
    onEncryptClick: (fileData: FileDataInterface) => void,
    onDecryptClick: () => void,
}

const Controls: React.FC<Props> = props => {
    const { content } = useSelector(fileDataSelector);

    return (
        <StyledControls>
            <PrimaryButton onClick={() => props.onEncryptClick(content)}>Encrypt</PrimaryButton>
            <SecondaryButton onClick={props.onDecryptClick}>Decrypt</SecondaryButton>
        </StyledControls>
    )
};

export default Controls;
