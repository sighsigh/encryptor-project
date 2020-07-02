import * as React from 'react';

import styled, { css, keyframes } from '../theme';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
`;

const animation = () =>
  css`
    ${pulse} 0.75s infinite alternate;
  `;

const StyledLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;

    .square {
        background-color: ${props => props.theme.colors.orange};
        width: 80px;
        height: 80px;
        animation: ${animation};
    }
`;

const Loader: React.FC = () => (
    <StyledLoader>
        <div className="square" />
    </StyledLoader>
);

export default Loader;
