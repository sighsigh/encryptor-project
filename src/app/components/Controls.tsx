import * as React from 'react';

import { PrimaryButton, SecondaryButton } from './Button';
import styled from 'styled-components';

const StyledControls = styled.div`
    display: flex;
    justify-content: center;

    button:first-of-type {
      margin-right: 24px;
    }
`;

interface Props {
    onEncryptClick: () => void,
    onDecryptClick: () => void,
}

const Controls: React.FC<Props> = props => {
    return (
        <StyledControls>
            <PrimaryButton onClick={props.onEncryptClick}>Encrypt</PrimaryButton>
            <SecondaryButton onClick={props.onDecryptClick}>Decrypt</SecondaryButton>
        </StyledControls>
    )
};

export default Controls;
